# Conexion de stichtingluminacollective.nl

## Estado comprobado el 3 de septiembre de 2026

- GitHub Actions despliega el Worker `lumina-collective`.
- URL operativa: https://lumina-collective.aliosmankara111.workers.dev
- El dominio sigue respondiendo desde LiteSpeed/Webhost.
- DNS autoritativos: `ns1.webhost.company`, `ns2.webhost.company`, `ns3.webhost.company`.
- La consulta de zonas accesibles con el token de despliegue no devuelve este dominio.
- El Worker no tiene un Custom Domain asociado.

Por tanto, publicar en GitHub no actualiza todavia el dominio. El proveedor DNS
observado no identifica por si solo al registrador donde se cambian los nameservers.

## Antes De Cambiar DNS

Inicia sesion en Cloudflare y en el panel del registrador. En Cloudflare, anade el
dominio a la cuenta que contiene el Worker. Revisa la importacion de **todos** los
registros, incluidos MX, SPF, DKIM, DMARC, subdominios y verificaciones.

Conserva una exportacion de la zona anterior. Los destinos de correo deben seguir
resolviendo al servidor de correo existente; un MX que apunte al dominio raiz
necesita especial atencion antes de mover la web. Los registros de correo no deben
quedar detras del proxy HTTP. No canceles el alojamiento de correo.

Utiliza exactamente los nameservers asignados a esta zona, nunca ejemplos. Revisa
DNSSEC y los registros DS anteriores siguiendo el procedimiento oficial antes de
cambiar la delegacion. Espera a que la zona aparezca **Active**; no hay un plazo de
propagacion garantizado. [Guia oficial de cambio de nameservers](https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/).

## Asociar El Worker

En la misma cuenta de Cloudflare:

1. Abre Workers & Pages, `lumina-collective`, Settings, Domains & Routes.
2. Anade `stichtingluminacollective.nl` como **Custom Domain** cuando la zona este activa.
3. Revisa cualquier conflicto de registros web existentes antes de aceptar el cambio.
4. Anade `www.stichtingluminacollective.nl` si tambien debe funcionar. Mantiene el mismo
   destino y verifica su certificado.
5. Comprueba la emision del certificado y el acceso HTTPS.

Cloudflare gestiona los registros web y el certificado de un Custom Domain.
**No crees un CNAME desde el dominio raiz a `workers.dev` como sustituto de esta
asociacion.** El proyecto no usa un despliegue estatico de Cloudflare Pages.
[Documentacion de Custom Domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/).

## Verificacion

```powershell
Resolve-DnsName -Name stichtingluminacollective.nl -Type NS
Invoke-RestMethod https://stichtingluminacollective.nl/api/health
Invoke-RestMethod https://lumina-collective.aliosmankara111.workers.dev/api/health
```

Las dos respuestas deben contener el mismo `release`, correspondiente al commit
publicado. Comprueba ademas `/anbi`, su PDF, `/contact`, imagenes, HTTPS y correo
entrante/saliente. El script `scripts/cloudflare-status.mjs` realiza una auditoria
de lectura en GitHub Actions sin mostrar secretos.

El `wrangler.jsonc` no declara rutas para una zona inexistente o no activada. Asi
se puede seguir desplegando el Worker mientras se completa la migracion del dominio.
