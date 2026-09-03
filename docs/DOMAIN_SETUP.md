# Guía de Conexión del Dominio: stichtingluminacollective.nl

Esta guía explica con total claridad técnica por qué tu dominio todavía no muestra la web desplegada en Cloudflare y cómo activarlo de forma definitiva.

---

## 1. Diagnóstico del Estado Actual

Cuando cualquier usuario visita `https://stichtingluminacollective.nl`, actualmente recibe:
* **Servidor que responde:** `LiteSpeed` (un servidor compartido en `178.251.232.180`).
* **Servidores de Nombres (DNS):**
  - `ns1.webhost.company`
  - `ns2.webhost.company`
  - `ns3.webhost.company`

Mientras tanto:
* El código del proyecto se compila y se despliega como **Cloudflare Worker** (`lumina-collective`) en la infraestructura global de Cloudflare.
* Por lo tanto, aunque GitHub Actions despliegue con éxito en Cloudflare, el dominio sigue apuntando a los servidores antiguos de `webhost.company`.

---

## 2. Configuración en el Código (Ya Realizada)

En `wrangler.jsonc` se han registrado las rutas de dominio personalizado:
```jsonc
"routes": [
  { "pattern": "stichtingluminacollective.nl", "custom_domain": true },
  { "pattern": "www.stichtingluminacollective.nl", "custom_domain": true }
]
```

Esto le indica a Cloudflare que vincule automáticamente el Worker con el dominio `stichtingluminacollective.nl`.

---

## 3. Pasos Requeridos en tu Proveedor de Dominio (webhost.company)

Para que el tráfico llegue a Cloudflare, debes realizar **una** de las siguientes dos opciones en el panel donde administras `stichtingluminacollective.nl`:

### Opción A (Recomendada): Cambiar los Servidores de Nombres (Nameservers) a Cloudflare

1. Inicia sesión en el panel de **Cloudflare** (cuenta `8b0163597918b41cf5c6d61b87518515` o la cuenta donde tengas la zona).
2. Si el dominio `stichtingluminacollective.nl` ya está añadido como Zona en Cloudflare, te mostrará dos servidores de nombres asignados (por ejemplo: `xxx.ns.cloudflare.com` y `yyy.ns.cloudflare.com`).
3. Inicia sesión en tu registrador (**webhost.company** o panel de cPanel / cliente).
4. Ve a la sección **Nameservers / Servidores de DNS** del dominio.
5. Cambia `ns1.webhost.company` y `ns2.webhost.company` por los dos servidores de Cloudflare.
6. Guarda los cambios. (La propagación toma entre 15 minutos y un par de horas).
   *A partir de ese momento, todo el tráfico pasará por Cloudflare y servirá instantáneamente la versión nueva.*

---

### Opción B: Si gestionas el DNS en webhost.company (Sin cambiar Nameservers)

Si necesitas mantener los DNS en `webhost.company` (por ejemplo, si tienes cuentas de correo cPanel allí):
1. Entra a la **Zona DNS** en el panel de `webhost.company`.
2. Modifica el registro **A** o **CNAME**:
   - Tipo: `CNAME`
   - Nombre: `@` (o `stichtingluminacollective.nl`)
   - Destino: `lumina-collective.aliosmankara111.workers.dev`
   - Registro para `www`: `CNAME` apuntando a `stichtingluminacollective.nl`
3. En el panel de Cloudflare (Workers & Pages -> `lumina-collective` -> Settings -> Domains & Routes), asegúrate de que `stichtingluminacollective.nl` figure como **Custom Domain**.

---

## 4. Verificación de Funcionamiento

Una vez configurado, puedes comprobar que el dominio sirve Cloudflare ejecutando en PowerShell:
```powershell
Resolve-DnsName -Name stichtingluminacollective.nl
curl -I https://stichtingluminacollective.nl
```

El encabezado de respuesta HTTP debe mostrar:
```http
Server: cloudflare
cf-ray: ...
```
Y el endpoint de salud debe devolver la versión de despliegue:
`https://stichtingluminacollective.nl/api/health`
