# PRD 10/10 Definitivo — Stichting Lumina Collective

## Product Requirements Document premium para ejecución en Antigravity

**Proyecto:** Stichting Lumina Collective
**Dominio:** stichtingluminacollective.nl
**Tipo de producto:** sitio web institucional, editorial, comunitario y administrable para una organización/fundación/comunidad de mujeres en Países Bajos.
**Idioma principal del sitio:** Neerlandés.
**Idioma secundario preparado:** Inglés.
**Idioma de este PRD:** Español.
**Entorno de ejecución:** Antigravity con agentes IA autónomos.
**Nivel esperado:** Agencia internacional premium, con dirección de arte cálida, femenina, editorial y coherente con el logo ya creado.
**Estética prohibida:** vibecode, startup genérica, ONG amateur, plantilla Bootstrap, landing artificial, ilustraciones IA, blobs, SVGs decorativos sin sentido, tarjetas con iconos genéricos.
**Objetivo:** construir una web institucional premium, visual, rápida, SEO-first, accesible, editable desde CMS y preparada para crecer sin perder la calidez, suavidad y elegancia femenina de la marca.

## Ajuste de dirección 10/10 aplicado

Esta versión refuerza cinco decisiones clave para que la web no solo sea técnicamente completa, sino también coherente con el logo y con la identidad real de Stichting Lumina Collective:

1. La marca se define como femenina, cálida, comunitaria, cultural y profesional, no como una ONG genérica ni como una organización panfletaria o agresiva.
2. El logo y su “L” caligráfica pasan a ser una guía visual central: suavidad, luz, movimiento, marfil, blush, vino profundo y oro suave.
3. El MVP se reduce y se ordena para lanzar una primera versión más premium, pulida y realista, en vez de construir demasiadas funciones de golpe.
4. El tono editorial se vuelve más humano y menos abstracto: menos frases vacías de “empoderamiento” abstracto y más claridad sobre encuentro, apoyo, actividades, cultura y participación.
5. Los agentes IA deben priorizar dirección de arte, jerarquía visual, fotografía real, SEO y contenido administrable sin sacrificar calidad.

---

# 1. Executive Summary

Stichting Lumina Collective necesita una presencia digital institucional de alto nivel para comunicar su misión, atraer mujeres a su comunidad, publicar actividades, mostrar eventos, captar voluntarias, facilitar colaboraciones, recibir donaciones y construir confianza ante instituciones, partners y público local en Países Bajos.

La marca debe percibirse como un lugar cálido, femenino, serio y real: un espacio donde las mujeres pueden encontrarse, participar, crecer y sentirse acompañadas. La web debe evitar una lectura política dura o panfletaria; su fuerza debe venir de la dignidad, la cercanía, la cultura, la comunidad y la claridad.

La web debe sentirse humana, cálida, femenina, editorial, europea y profesional. No debe parecer una plantilla de ONG ni una web generada automáticamente por IA. La dirección visual debe basarse en fotografía real, composición editorial, tipografía elegante, espacio generoso, ritmo visual y copywriting cuidado.

El sitio será principalmente fotográfico. Las imágenes reales serán proporcionadas por el cliente. Hasta recibirlas, se usarán imágenes referenciales temporales, cuidadosamente seleccionadas, relacionadas con mujeres, comunidad, talleres, encuentros, apoyo, diversidad, cultura, participación y crecimiento. Cada imagen placeholder debe estar marcada internamente para reemplazo posterior.

El producto final debe permitir que una persona no técnica pueda gestionar contenido desde un panel simple: cambiar fotos, textos, eventos, blog, páginas, llamadas a la acción, testimonios, partners, SEO metadata y formularios.

---

# 2. Objetivos principales del proyecto

## 2.1 Objetivos institucionales

1. Presentar Stichting Lumina Collective como una organización seria, confiable y humana.
2. Explicar claramente qué hace, por qué existe y cómo ayuda a mujeres.
3. Crear una imagen de marca cálida, femenina, europea y profesional.
4. Mostrar comunidad real mediante fotografía y storytelling.
5. Facilitar contacto con voluntarias, colaboradoras, donantes e instituciones.
6. Publicar eventos, actividades, noticias y programas de forma simple.
7. Construir legitimidad mediante equipo, partners, transparencia y datos institucionales.

## 2.2 Objetivos de conversión

La web debe convertir visitas en acciones concretas:

* Contactar con la organización.
* Unirse como participante.
* Registrarse como voluntaria.
* Inscribirse a eventos.
* Leer historias o noticias.
* Suscribirse a newsletter.
* Donar o mostrar interés en donar.
* Contactar para colaboración institucional.
* Seguir redes sociales.
* Compartir contenidos.

## 2.3 Objetivos SEO

1. Posicionarse en búsquedas de marca: “Stichting Lumina Collective”.
2. Posicionarse en búsquedas neerlandesas relacionadas con fundaciones de mujeres.
3. Posicionarse en búsquedas sobre comunidad femenina, actividades, eventos, voluntariado, comunidad y participación.
4. Construir autoridad mediante blog, eventos, páginas optimizadas y contenido local.
5. Estar preparada para Search Console desde el primer día.
6. Implementar metadata, sitemap, robots, schema markup y performance desde arquitectura.

## 2.4 Objetivos técnicos

* Lighthouse 90+ en Performance, Accessibility, Best Practices y SEO.
* Core Web Vitals sólidos en móvil y escritorio.
* CMS funcional y fácil.
* Diseño responsive real.
* Imágenes optimizadas.
* Código limpio, modular y escalable.
* Formularios seguros.
* GDPR preparado.
* Deploy estable.
* Sitemap dinámico.
* Schema validado.
* Admin protegido.
* Documentación clara.

---

# 3. Principios no negociables

## 3.1 Principios visuales

* La fotografía manda. El diseño debe elevar las imágenes, no competir con ellas.
* Nada de blobs, ondas, SVGs decorativos, ilustraciones IA, avatares genéricos ni patrones típicos de vibecoding.
* Nada de estética SaaS/startup con gradientes, cards genéricas e iconos exagerados.
* La web debe sentirse como una publicación editorial institucional europea, pero con suavidad femenina y calidez humana.
* La composición debe tener tensión visual: imágenes grandes, espacios amplios, bloques asimétricos, ritmo entre texto e imagen.
* La identidad debe respirar el mismo lenguaje del logo: curvas suaves, luz cálida, fondo marfil, detalles blush, texto vino profundo y acentos dorados muy discretos.
* El texto debe ser breve, claro y emocional sin ser cursi.
* Las animaciones deben ser silenciosas, sutiles y con propósito.
* El diseño debe transmitir confianza, humanidad, comunidad y cuidado.
* No usar Bootstrap.
* No usar plantillas visuales prediseñadas.
* No usar componentes genéricos sin dirección de arte.

## 3.2 Principios técnicos

* Next.js con App Router.
* TypeScript estricto.
* Tailwind CSS como sistema de diseño, no como clases improvisadas.
* CMS headless para administración.
* Server-first siempre que sea posible.
* JavaScript mínimo.
* Imágenes con `next/image`.
* SEO desde arquitectura.
* Accesibilidad desde diseño.
* Formularios validados en cliente y servidor.
* Seguridad básica desde el inicio.
* No instalar dependencias innecesarias.
* No crear un panel admin desde cero si Sanity puede resolverlo mejor.
* Todo contenido editable debe venir del CMS salvo textos legales muy estáticos.

## 3.3 Principios editoriales

* El idioma principal debe ser neerlandés.
* El inglés debe quedar preparado, pero no activado si no hay traducciones reales.
* El tono debe ser cálido, profesional, cercano, humano e institucional.
* Evitar lenguaje vacío: “empoderamos mujeres para transformar el mundo” sin explicar cómo.
* Evitar exceso de texto en la home.
* Cada página debe tener objetivo, jerarquía y CTA.
* Cada artículo debe terminar con una acción.
* Los textos SEO deben sonar naturales.
* No hacer keyword stuffing.
* Usar “wij”, “jij” y “je” en neerlandés para sonar cercano y humano.

---

# 4. Benchmark estratégico de referencias

Las siguientes webs sirven como referencia conceptual, no como modelo para copiar:

* goldenroses.be
* stichtingcamellia.nl
* wo-men.nl

## 4.1 Aprendizajes útiles

### Golden Roses

* Comunidad visible.
* Fotografía como prueba social.
* Eventos y actividades como centro de la experiencia.
* Tono cálido y local.

### Stichting Camellia

* Sensación institucional.
* Claridad en misión, programas y contacto.
* Importancia de confianza, datos legales, equipo y partners.

### WO=MEN

* Arquitectura institucional robusta.
* Temas sociales y agenda clara.
* Contenido, noticias, red y legitimidad.
* Mayor densidad informativa, útil como inspiración de estructura.

## 4.2 Cómo debe superarlas Lumina

Stichting Lumina Collective debe ser más visual, más editorial, más moderna, más cálida y más premium. Debe combinar:

* La prueba fotográfica de comunidad.
* La solidez institucional.
* La claridad de programas.
* La energía femenina.
* Una experiencia más limpia, más boutique y menos saturada.

---

# 5. Posicionamiento digital de marca

## 5.1 Idea central

Stichting Lumina Collective es una comunidad de mujeres que crea espacios de encuentro, crecimiento, apoyo, cultura y participación en Países Bajos.

La marca debe asociarse con:

* Luz.
* Presencia.
* Voz.
* Comunidad.
* Claridad.
* Cuidado.
* Dignidad.
* Acción social.
* Futuro.

## 5.2 Personalidad

La marca debe sentirse:

* Cálida, no informal.
* Femenina, no infantil.
* Institucional, no fría.
* Socialmente consciente y participativa, no panfletaria ni agresiva.
* Cultural, no elitista.
* Moderna, no trendy.
* Cercana, no amateur.
* Humana, no genérica.
* Visual, no decorativa.
* Profesional, no corporativa.

## 5.3 Mensajes clave

1. Las mujeres necesitan espacios seguros y visibles para encontrarse, crecer y participar.
2. La comunidad es una forma real de transformación social.
3. Lumina conecta historias, capacidades y oportunidades.
4. Participar puede empezar con algo simple: asistir, colaborar, donar, escribir o compartir.
5. Cada mujer debe sentirse vista, escuchada y acompañada.

## 5.4 Identidad visual desde el logo

El logo actual de Stichting Lumina Collective tiene una “L” caligráfica, fluida y femenina, con una sensación de luz suave, calidez y refinamiento. La web debe sentirse como una extensión directa de ese logo, no como una pieza separada.

### Reglas de uso visual

* La “L” puede funcionar como isotipo secundario en footer, favicon, redes sociales, loading states sutiles, detalles de newsletter y marca de agua editorial muy discreta.
* No repetir la “L” como decoración excesiva. Debe aparecer poco, pero con intención.
* Usar el color vino profundo/aubergine del logo como acento principal en texto, botones y elementos institucionales.
* Usar fondos marfil, crema y blush para mantener la calidez visual.
* Usar oro suave solo como micro-acento, nunca como color dominante.
* El diseño de la web debe evitar esquinas excesivamente redondas tipo app genérica. Las formas pueden ser suaves, pero editoriales.
* Las curvas del logo pueden inspirar transiciones, líneas divisorias, encuadres y composiciones, pero no deben convertirse en ondas decorativas genéricas.

### Sensación final buscada

La web debe hacer sentir que Stichting Lumina Collective es:

* seria sin ser fría;
* femenina sin ser infantil;
* cálida sin ser informal;
* elegante sin ser elitista;
* comunitaria sin parecer amateur;
* visual sin parecer decorativa;
* institucional sin perder alma.

---

# 6. Público objetivo

## 6.1 Mujeres interesadas en comunidad

**Edad aproximada:** 25–60 años.
**Necesidades:** sentirse parte de algo, conocer otras mujeres, participar en actividades, encontrar apoyo.
**Motivaciones:** conexión, crecimiento personal, bienestar, pertenencia.
**Objeciones:** no saber si el espacio es para ellas, miedo a no encajar, falta de tiempo.
**Qué debe encontrar:** misión clara, fotos reales, eventos, formas fáciles de participar, tono acogedor.

## 6.2 Mujeres migrantes o internacionales en Países Bajos

**Necesidades:** integración, red de apoyo, orientación cultural, actividades accesibles.
**Motivaciones:** pertenecer, mejorar idioma, conocer personas, crecer profesional o personalmente.
**Objeciones:** barrera idiomática, desconocimiento de la organización, miedo a trámites.
**Qué debe encontrar:** lenguaje claro, versión inglesa preparada, actividades inclusivas, contacto simple.

## 6.3 Voluntarias

**Necesidades:** saber cómo ayudar, cuánto tiempo implica, qué impacto tendrá.
**Motivaciones:** aportar, aprender, conectar, participar en causas sociales.
**Objeciones:** no saber si tienen experiencia suficiente.
**Qué debe encontrar:** página “Doe mee”, formulario simple, roles de voluntariado, mensajes humanos.

## 6.4 Donantes

**Necesidades:** confianza, transparencia, impacto, datos legales.
**Motivaciones:** apoyar una causa real y local.
**Objeciones:** dudas sobre uso del dinero, falta de claridad legal.
**Qué debe encontrar:** misión, impacto, transparencia, ANBI si aplica, método de donación claro.

## 6.5 Instituciones y partners

**Necesidades:** legitimidad, claridad, datos, historia, equipo, programas.
**Motivaciones:** colaborar con una organización seria.
**Objeciones:** falta de trayectoria visible.
**Qué debe encontrar:** partners, programas, impacto, contacto institucional, documentación.

## 6.6 Prensa o medios

**Necesidades:** información clara, contacto, fotos, misión, datos.
**Qué debe encontrar:** About, noticias, press contact, imágenes aprobadas, información institucional.

---

# 7. Stack tecnológico recomendado

## 7.1 Frontend

**Framework:** Next.js con App Router.
**Lenguaje:** TypeScript estricto.
**Estilos:** Tailwind CSS 4.x o última versión estable compatible.
**Arquitectura:** Server Components por defecto, Client Components solo cuando sea necesario.
**Animaciones:** CSS transitions + Framer Motion. GSAP solo si una animación editorial avanzada lo justifica.
**Formularios:** Server Actions o Route Handlers + Zod.
**Imágenes:** next/image + Sanity image builder.
**SEO:** Metadata API, sitemap dinámico, robots dinámico, JSON-LD por tipo de página.
**Testing:** Playwright + Lighthouse CI + TypeScript + ESLint.
**Deploy:** Vercel.
**DNS:** Cloudflare DNS recomendado.

## 7.2 CMS

**CMS recomendado:** Sanity Studio, última versión estable.

Motivos:

* Excelente para contenido editorial y visual.
* Flexible para páginas, blog, eventos, galería, programas y settings globales.
* Interfaz simple para admins no técnicos.
* Preview posible con Next.js.
* Modelos de contenido definidos por código.
* Roles y permisos.
* Buen manejo de imágenes, alt text, captions y créditos.
* No obliga a mantener un backend propio complejo.

## 7.3 Base de datos

Fase 1:

* No crear base de datos propia si no es necesario.
* Sanity Content Lake será la fuente de verdad editorial.
* Formularios se enviarán por email y opcionalmente se almacenarán en Sanity o proveedor externo.

Fase 2 opcional:

* Supabase para contactos, registros a eventos, voluntariado o newsletter.
* Activar Row Level Security.
* Exportación CSV para admin.
* Dashboard simple si se requiere.

## 7.4 Email y formularios

Recomendación:

* Resend para emails transaccionales.
* Zod para validación.
* Honeypot anti-spam.
* Rate limiting por IP.
* Consentimiento GDPR obligatorio.
* Emails enviados a contacto oficial de la organización.

## 7.5 Newsletter

Opciones:

* Brevo si se busca solución europea y GDPR-friendly.
* Mailchimp si el equipo ya lo usa.
* Buttondown si se busca simplicidad.
* Fase 1 puede limitarse a capturar emails y conectar después.

## 7.6 Donaciones

Fase 1:

* Enlace externo editable desde CMS.
* Texto claro sobre cómo donar.
* Si no existe proveedor, mostrar CTA “Neem contact op over doneren”.

Fase 2:

* Mollie recomendado para Países Bajos.
* Stripe como alternativa.
* Registrar conversiones de clic en donar.

## 7.7 Analytics

Recomendado:

* Google Search Console obligatorio.
* GA4 si el equipo acepta cookies analíticas.
* Plausible o Fathom si se prefiere privacidad y simplicidad.
* Google Tag Manager solo si habrá varias etiquetas.
* Microsoft Clarity solo con consentimiento explícito.

## 7.8 Seguridad

* HTTPS obligatorio.
* Headers de seguridad.
* CSP ajustada a Sanity, Vercel, Analytics y proveedor de formularios.
* Validación server-side.
* Sanitización de inputs.
* Rate limiting.
* Honeypot.
* No exponer tokens en cliente.
* Variables de entorno por entorno.
* Roles de CMS mínimos.

---

# 8. Arquitectura general del sistema

```txt
Usuario
  ↓
stichtingluminacollective.nl
  ↓
Cloudflare DNS
  ↓
Vercel Edge Network
  ↓
Next.js App Router
  ├─ Rutas públicas
  ├─ Server Components
  ├─ Metadata dinámica
  ├─ Sitemap dinámico
  ├─ Robots dinámico
  ├─ JSON-LD Schema
  ├─ API routes / Server Actions
  └─ Fetch layer con Sanity
        ↓
Sanity Content Lake
  ├─ Pages
  ├─ Posts
  ├─ Events
  ├─ Programs
  ├─ Gallery
  ├─ Team
  ├─ Partners
  └─ Global Settings

Servicios externos
  ├─ Resend / SMTP
  ├─ GA4 / Plausible
  ├─ Search Console
  ├─ Mollie / Stripe opcional
  └─ Sentry opcional
```

## 8.1 Flujo de publicación

1. Editora entra a `/studio`.
2. Crea o edita contenido.
3. Añade imagen, alt text, SEO title y meta description.
4. Usa preview.
5. Publica.
6. Sanity dispara webhook.
7. Vercel revalida rutas afectadas.
8. El sitio público se actualiza.

## 8.2 Flujo de formularios

1. Usuario completa formulario.
2. Frontend valida campos.
3. Servidor valida con Zod.
4. Honeypot y rate limit revisan spam.
5. Se envía email a admin.
6. Usuario ve mensaje de éxito.
7. Evento de conversión se registra con consentimiento.

---

# 9. Design System

## 9.1 Dirección de arte

El sitio debe parecer diseñado por una agencia con dirección editorial. La base visual no será “decoración”, sino composición.

La dirección de arte debe partir del logo ya creado: una identidad femenina, cálida, caligráfica, luminosa y refinada. La web no debe forzar una estética fría de fundación corporativa. Debe sentirse como una casa editorial/comunitaria europea con presencia institucional real.

Palabras guía:

* Luminoso.
* Cálido.
* Editorial.
* Femenino.
* Comunitario.
* Sobrio.
* Europeo.
* Fotográfico.
* Institucional.
* Humano.
* Elegante.
* Accesible.

Palabras prohibidas como resultado:

* Startup SaaS.
* Plantilla WordPress genérica.
* ONG amateur.
* Vibecode.
* Landing con gradientes artificiales.
* Dashboard corporativo.
* Ilustración IA.
* Web con cards genéricas.
* Página con iconos de librería por todas partes.

## 9.2 Paleta de color

La paleta debe acompañar fotografía real, no competir con ella.

### Colores base ajustados al logo

```txt
Lumina Ivory       #F7F1E8  fondo cálido principal
Soft Linen         #EFE5D6  superficie secundaria
Warm White         #FFFDF8  tarjetas y áreas limpias
Ink Brown          #211A16  texto principal
Logo Plum          #3A1830  color principal inspirado en la L del logo
Deep Aubergine     #3A2432  acento institucional profundo
Blush Circle       #E9CFC8  fondo suave inspirado en el círculo del logo
Dusty Rose         #C98F86  acento femenino cálido
Rose Clay          #B86F63  acento cálido secundario
Muted Terracotta   #9C5E4F  hover / énfasis
Sage Grey          #A8A89A  apoyo natural
Soft Gold          #D2AF77  micro-acento luminoso
Dust Gold          #B99B6B  detalle premium mínimo
```

### Jerarquía cromática recomendada

* 70% fondos cálidos: Lumina Ivory, Warm White, Soft Linen.
* 20% profundidad institucional: Logo Plum, Deep Aubergine, Ink Brown.
* 8% calidez femenina: Blush Circle, Dusty Rose, Rose Clay.
* 2% detalle premium: Soft Gold o Dust Gold.

El logo no debe competir con una web demasiado colorida. La web debe dejar que el color vino profundo y el marfil respiren.

### Uso

* Fondo global: Lumina Ivory.
* Texto principal: Ink Brown.
* Títulos especiales: Deep Aubergine.
* CTA primario: Logo Plum o Deep Aubergine.
* CTA secundario: transparente con borde Ink Brown.
* Detalles mínimos: Soft Gold, Dust Gold, Blush Circle o Rose Clay.
* Footer: Ink Brown o Deep Aubergine.
* No usar azules genéricos.
* No usar gradientes multicolor.
* No usar fondos blancos fríos si rompen la calidez.

## 9.3 Tipografía

### Elección recomendada

**Display:** Fraunces Variable o Cormorant Garamond Variable.
**Texto/UI:** Inter Variable, Geist Sans o Satoshi.

### Elección final recomendada

El equipo debe probar dos rutas y elegir la que mejor dialogue visualmente con el logo:

### Ruta A — Editorial cálida moderna

* Títulos: Fraunces Variable self-hosted.
* Texto y UI: Inter Variable self-hosted.

Motivo: Fraunces da calidez editorial y personalidad sin parecer infantil. Inter da legibilidad, accesibilidad y rendimiento.

### Ruta B — Elegancia más cercana al logo

* Títulos: Cormorant Garamond Variable self-hosted.
* Texto y UI: Satoshi, Geist Sans o Inter Variable self-hosted.

Motivo: Cormorant puede conectar mejor con la “L” caligráfica del logo y dar una sensación más femenina, suave y elegante.

### Decisión recomendada

Para Stichting Lumina Collective, la Ruta B debe probarse primero. Si resulta demasiado clásica o delicada en móvil, pasar a Ruta A. La tipografía elegida debe verse profesional en neerlandés, con buena legibilidad en palabras largas.

## 9.4 Escala tipográfica

```css
--text-xs: clamp(0.75rem, 0.72rem + 0.1vw, 0.82rem);
--text-sm: clamp(0.875rem, 0.84rem + 0.16vw, 0.98rem);
--text-base: clamp(1rem, 0.96rem + 0.2vw, 1.12rem);
--text-md: clamp(1.12rem, 1.02rem + 0.42vw, 1.38rem);
--text-lg: clamp(1.35rem, 1.16rem + 0.8vw, 1.85rem);
--text-xl: clamp(1.8rem, 1.42rem + 1.6vw, 2.9rem);
--text-2xl: clamp(2.4rem, 1.7rem + 3vw, 4.8rem);
--text-hero: clamp(3.2rem, 2rem + 6vw, 8rem);
```

## 9.5 Grid y layout

```txt
Mobile: 4 columnas
Tablet: 8 columnas
Desktop: 12 columnas
Max-width: 1440px
Márgenes laterales: clamp(1rem, 4vw, 4rem)
Gutter: clamp(1rem, 2vw, 2rem)
```

### Ritmo vertical

```css
--space-section-sm: clamp(3rem, 6vw, 6rem);
--space-section-md: clamp(5rem, 9vw, 10rem);
--space-section-lg: clamp(7rem, 12vw, 14rem);
```

## 9.6 Botones

### Primary

* Fondo: Deep Aubergine.
* Texto: Warm White.
* Padding: 14px 28px.
* Border-radius: pequeño o cero, estilo editorial.
* Hover: desplazamiento de 1px, cambio sutil a Muted Terracotta.
* Focus: outline visible.
* Texto: uppercase pequeño o sentence case elegante.

### Secondary

* Fondo: transparente.
* Borde: Ink Brown.
* Texto: Ink Brown.
* Hover: fondo Ink Brown, texto Warm White.

### Text Link

* Sin fondo.
* Subrayado animado.
* Flecha textual opcional: `→`.
* No usar iconos de librería.

## 9.7 Header

Desktop:

* Logo a la izquierda.
* Navegación centrada o derecha.
* CTA visible: “Doe mee” o “Doneer”.
* Fondo transparente en hero si hay contraste suficiente.
* Al hacer scroll: fondo Lumina Ivory con blur sutil y borde inferior muy fino.

Mobile:

* Logo izquierda.
* Botón menú con dos líneas CSS.
* Menú full-screen editorial.
* Links grandes.
* CTA separado.
* Cerrar con texto o símbolo simple, no icono de librería.

## 9.8 Footer

Debe incluir:

* Logo.
* Claim corto.
* Navegación principal.
* Contacto.
* Dirección si existe.
* Redes sociales en texto.
* Newsletter opcional.
* Enlaces legales.
* ANBI/KVK si aplica.
* Copyright.
* Créditos sobrios.

## 9.9 Cards

### Program Card

* Imagen obligatoria.
* Título.
* Descripción breve.
* Categoría.
* Link textual.
* Sin iconos.
* Hover: zoom de imagen máximo 1.03.
* Sin sombras fuertes.

### Event Card

* Fecha tipográfica.
* Imagen opcional.
* Título.
* Lugar.
* Estado: upcoming / past / cancelled.
* CTA.

### Blog Card

* Imagen.
* Categoría.
* Fecha.
* Título.
* Excerpt.
* Autor.
* Link.

### Testimonial Card

* Texto corto.
* Nombre o inicial si requiere privacidad.
* Contexto: participante, voluntaria, partner.
* Foto opcional.
* No usar comillas gigantes decorativas.

## 9.10 Galería

* Masonry editorial.
* Filtros por evento, programa y año.
* Imágenes con alt, caption y crédito.
* Lightbox accesible en fase 2.
* No publicar imágenes sensibles sin consentimiento.
* Campos de privacidad en CMS.

## 9.11 Sistema de iconos sociales y favicon

La marca ya cuenta con una versión de icono basada en la “L” del logo. Debe usarse de forma consistente en canales digitales.

### Requisitos

* Favicon SVG basado solo en la “L”.
* Apple touch icon 180x180.
* Social profile icon 1024x1024.
* Open Graph image institucional con logo completo.
* Versión clara sobre marfil.
* Versión alternativa sobre Logo Plum para contextos oscuros.
* No crear iconos nuevos con flores, rostros, manos o símbolos femeninos genéricos.

### Redes existentes

Incluir en settings globales y footer:

```txt
Facebook: https://www.facebook.com/stichtinglumina
TikTok: https://www.tiktok.com/@stichtinglumina
X: https://x.com/stichtinglumina
Instagram: https://www.instagram.com/stichtinglumina
```

---

# 10. Arquitectura de información

## 10.1 Navegación principal recomendada

```txt
Home
Over ons
Programma’s
Agenda
Nieuws
Gemeenschap
Doe mee
Contact
```

## 10.2 Navegación reducida si aún hay poco contenido

```txt
Home
Over ons
Programma’s
Agenda
Doe mee
Contact
```

Esta debe ser la navegación de Fase 1 si todavía no existe suficiente contenido real. Es mejor lanzar una web pequeña, elegante y completa que una web grande con páginas vacías o genéricas.

## 10.3 Slugs neerlandeses

```txt
/
/over-ons
/programmas
/programmas/[slug]
/agenda
/agenda/[slug]
/nieuws
/nieuws/[slug]
/gemeenschap
/doe-mee
/contact
/privacy
/cookies
/anbi
/studio
```

## 10.4 Slugs ingleses preparados

```txt
/en
/en/about
/en/programs
/en/programs/[slug]
/en/events
/en/events/[slug]
/en/news
/en/news/[slug]
/en/community
/en/join
/en/contact
```

No activar inglés hasta tener traducciones reales revisadas.

---

# 11. Páginas del sitio

# 11.1 Home

## Propósito

Comunicar en menos de 5 segundos quién es Stichting Lumina Collective, qué hace y cómo participar.

## Keyword principal

`vrouwen stichting Nederland`

## Keywords secundarias

* `vrouwen community Nederland`
* `vrouwen activiteiten Nederland`
* `vrouwen netwerk`
* `vrouwen empowerment stichting`
* `stichting vrouwen`

## Meta title

```txt
Stichting Lumina Collective | Vrouwen verbinden, inspireren en versterken
```

## Meta description

```txt
Stichting Lumina Collective brengt vrouwen samen rond ontmoeting, groei, cultuur en maatschappelijke betrokkenheid in Nederland. Ontdek onze programma’s, evenementen en gemeenschap.
```

## Secciones

### 1. Hero editorial

Desktop:

* Grid 12 columnas.
* Texto en 5 columnas.
* Imagen en 6 columnas.
* Imagen grande, real, cálida.
* No usar hero genérico con overlay oscuro fuerte.

Copy sugerido:

```txt
Ruimte voor vrouwen om te groeien, verbinden en zichtbaar te zijn.

Stichting Lumina Collective brengt vrouwen samen in Nederland rond ontmoeting, kennis, cultuur en maatschappelijke betrokkenheid.
```

CTA:

* Primario: `Doe mee`
* Secundario: `Bekijk onze programma’s`

### 2. Statement de misión

Texto grande, centrado o alineado en columna editorial:

```txt
Wij geloven dat verandering begint waar vrouwen elkaar ontmoeten, verhalen delen en samen nieuwe mogelijkheden creëren.
```

### 3. Tres pilares

1. `Ontmoeting`
2. `Ontwikkeling`
3. `Gemeenschap`

Cada pilar debe tener máximo dos líneas.

### 4. Programas destacados

* 3 programas desde CMS.
* Cards grandes.
* Imagen fuerte.
* CTA a página detalle.

### 5. Próximo evento

Si hay evento:

* Fecha.
* Imagen.
* Título.
* Lugar.
* CTA `Aanmelden`.

Si no hay evento:

```txt
Binnenkort delen we nieuwe activiteiten. Blijf op de hoogte via onze nieuwsbrief.
```

### 6. Galería / comunidad visual

* Collage de 5 imágenes.
* Una grande, cuatro pequeñas.
* CTA: `Bekijk onze gemeenschap`

### 7. Últimas noticias

* 2 o 3 artículos.
* No saturar.
* CTA: `Lees meer verhalen`

### 8. Únete

Copy sugerido:

```txt
Wil je bijdragen aan een gemeenschap waarin vrouwen elkaar versterken?
```

CTA:

* `Word vrijwilliger`
* `Neem contact op`
* `Doneer`

---

# 11.2 Over ons

## Propósito

Explicar historia, misión, visión, valores, equipo y legitimidad.

## Keyword principal

`vrouwenorganisatie Nederland`

## Meta title

```txt
Over ons | Stichting Lumina Collective
```

## Meta description

```txt
Leer Stichting Lumina Collective kennen: onze missie, waarden en de mensen achter onze gemeenschap voor vrouwen in Nederland.
```

## Secciones

1. Hero con imagen amplia.
2. Historia.
3. Misión y visión.
4. Valores.
5. Equipo.
6. Partners.
7. Transparencia.
8. CTA final.

## Copy sugerido

```txt
Stichting Lumina Collective is ontstaan vanuit de behoefte aan een warme, zichtbare en toegankelijke plek waar vrouwen elkaar kunnen ontmoeten, hun ervaringen kunnen delen en nieuwe stappen kunnen zetten.
```

## Valores sugeridos

* Verbinding.
* Vertrouwen.
* Groei.
* Gelijkwaardigheid.
* Cultuur.
* Zorgvuldigheid.

---

# 11.3 Programma’s

## Propósito

Mostrar qué hace la organización.

## Keyword principal

`vrouwen programma’s Nederland`

## Meta title

```txt
Programma’s | Stichting Lumina Collective
```

## Meta description

```txt
Ontdek de programma’s van Stichting Lumina Collective rond ontmoeting, participatie, leiderschap, cultuur en gemeenschap voor vrouwen.
```

## Programas iniciales sugeridos

Estos son placeholders y deben ajustarse a la realidad. Para mantener el tono cálido y comunitario, priorizar nombres simples y humanos antes que conceptos demasiado corporativos.

1. `Samenkomen & verbinden`
2. `Samen groeien`
3. `Culturele ontmoetingen`
4. `Taal, verhaal & dialoog`
5. `Mentorschap & ondersteuning`
6. `Community events`

`Vrouwen & leiderschap` puede añadirse en Fase 2 si realmente existe un programa formal de liderazgo.

## Página detalle de programa

Ruta:

```txt
/programmas/[slug]
```

Secciones:

1. Hero con imagen.
2. Descripción larga.
3. Para quién es.
4. Objetivos.
5. Próximas actividades relacionadas.
6. Galería relacionada.
7. CTA para participar.

---

# 11.4 Agenda / Eventos

## Propósito

Mostrar eventos próximos y pasados.

## Keyword principal

`vrouwen evenementen Nederland`

## Meta title

```txt
Agenda | Evenementen voor vrouwen | Stichting Lumina Collective
```

## Meta description

```txt
Bekijk komende bijeenkomsten, workshops en culturele evenementen van Stichting Lumina Collective voor vrouwen in Nederland.
```

## Página listado

Secciones:

1. Hero.
2. Próximos eventos.
3. Eventos destacados.
4. Eventos pasados.
5. CTA para recibir actualizaciones.

## Página detalle de evento

Ruta:

```txt
/agenda/[slug]
```

Campos visibles:

* Fecha.
* Hora.
* Lugar.
* Imagen.
* Descripción.
* Información práctica.
* Precio o gratuito.
* Capacidad si aplica.
* CTA de inscripción.
* Mapa opcional.
* Eventos relacionados.

Schema:

* Event.
* BreadcrumbList.
* Organization como organizer.

---

# 11.5 Nieuws / Blog

## Propósito

Publicar noticias, historias, reflexiones, comunicados y actualizaciones.

## Keyword principal

`vrouwen nieuws Nederland`

## Meta title

```txt
Nieuws & verhalen | Stichting Lumina Collective
```

## Meta description

```txt
Lees nieuws, verhalen en inzichten van Stichting Lumina Collective over vrouwen, gemeenschap, cultuur, participatie en maatschappelijke betrokkenheid.
```

## Tipos de contenido

* Nieuws.
* Verhalen.
* Interviews.
* Terugblik.
* Kennis.
* Persbericht.

## Página listado

* Header sobrio.
* Artículo destacado.
* Grid de artículos.
* Filtros por categoría.
* Newsletter CTA.

## Página artículo

Ruta:

```txt
/nieuws/[slug]
```

Requisitos:

* H1 único.
* Fecha visible.
* Autor o `Stichting Lumina Collective`.
* Imagen destacada.
* Cuerpo legible, ancho máximo 720px.
* Imágenes intercaladas.
* Artículos relacionados.
* CTA final.

Schema:

* BlogPosting.
* BreadcrumbList.
* Organization como publisher.

---

# 11.6 Gemeenschap / Galería

## Propósito

Demostrar vida real, comunidad y actividades mediante fotografía.

## Secciones

1. Hero visual.
2. Texto breve.
3. Masonry gallery.
4. Filtros: evento, programa, año.
5. Bloque testimonial opcional.
6. CTA para participar.

## Reglas

* Cada imagen debe tener alt text útil.
* No publicar fotos sensibles sin permiso.
* Menores requieren consentimiento explícito.
* Permitir marcar imágenes como `private/internal`.
* Las imágenes privadas no deben aparecer en frontend.

---

# 11.7 Doe mee

## Propósito

Convertir interés en acción.

## Keyword principal

`vrijwilligerswerk vrouwen Nederland`

## Meta title

```txt
Doe mee | Stichting Lumina Collective
```

## Meta description

```txt
Doe mee met Stichting Lumina Collective als vrijwilliger, partner, deelnemer of donateur en draag bij aan een sterke gemeenschap voor vrouwen.
```

## Opciones de participación

1. Vrijwilliger worden.
2. Activiteit bijwonen.
3. Partner worden.
4. Doneren.
5. Verhaal delen.

## Formulario voluntariado

Campos:

* Naam.
* E-mail.
* Telefoon opcional.
* Ik wil helpen met:

  * Events.
  * Communicatie.
  * Begeleiding.
  * Fotografie.
  * Organisatie.
  * Anders.
* Bericht.
* Consent checkbox privacidad.
* Honeypot invisible.

---

# 11.8 Contact

## Propósito

Permitir contacto claro y generar confianza.

## Meta title

```txt
Contact | Stichting Lumina Collective
```

## Meta description

```txt
Neem contact op met Stichting Lumina Collective voor vragen, samenwerking, vrijwilligerswerk, evenementen of donaties.
```

## Secciones

* Hero simple.
* Contact details.
* Formulario.
* Dirección si existe.
* Redes sociales textuales.
* Mapa opcional.
* Horarios de respuesta.
* CTA alternativo para voluntariado o colaboración.

## Campos formulario

* Naam.
* E-mail.
* Onderwerp.
* Bericht.
* Consent privacidad.
* Honeypot.

---

# 12. Panel de administración

## 12.1 Ruta

```txt
/studio
```

## 12.2 Roles

### Admin

Puede:

* Editar todo.
* Publicar.
* Eliminar contenido.
* Gestionar usuarios.
* Cambiar settings globales.
* Modificar navegación.
* Gestionar SEO global.
* Acceder a configuración crítica.

### Editor

Puede:

* Crear y editar noticias.
* Crear y editar eventos.
* Actualizar imágenes.
* Crear galerías.
* Editar programas.
* Guardar borradores.
* Solicitar publicación si se activa workflow.

No puede:

* Eliminar contenido crítico.
* Cambiar settings técnicos.
* Gestionar usuarios.
* Modificar integraciones.

## 12.3 Experiencia admin

El panel debe ser simple. La home del Studio debe tener accesos rápidos:

```txt
+ Nieuw artikel
+ Nieuw evenement
+ Afbeelding uploaden
+ Programma bewerken
+ Homepage aanpassen
```

Debe incluir:

* Vista de documentos recientes.
* Estado publicado/borrador.
* Preview.
* Campos obligatorios claramente marcados.
* Ayudas breves en neerlandés.
* Validaciones amigables.
* Orden lógico de campos.

---

# 13. Modelos de contenido en Sanity

## 13.1 Global Settings

Campos:

* siteTitle.
* siteDescription.
* defaultOgImage.
* logoFull.
* logoMark.
* logoMarkSocial.
* faviconSvg.
* ogImageDefault.
* primaryLanguage.
* secondaryLanguageEnabled.
* contactEmail.
* contactPhone.
* address.
* kvkNumber.
* anbiStatus.
* bankIban opcional.
* socialLinks.
* footerText.
* newsletterEnabled.
* donationEnabled.
* donationUrl.
* cookiePolicyLink.
* privacyPolicyLink.

## 13.2 Page

Campos:

* title.
* slug.
* language.
* seoTitle.
* metaDescription.
* ogImage.
* heroTitle.
* heroEyebrow.
* heroText.
* heroImage.
* blocks.
* publishedAt.
* updatedAt.

## 13.3 Program

Campos:

* title.
* slug.
* shortDescription.
* longDescription.
* featuredImage.
* gallery.
* category.
* targetAudience.
* goals.
* scheduleInfo.
* location.
* relatedEvents.
* ctaLabel.
* ctaHref.
* seoTitle.
* metaDescription.

## 13.4 Blog Post

Campos:

* title.
* slug.
* excerpt.
* body.
* author.
* category.
* tags.
* featuredImage.
* publishedAt.
* updatedAt.
* seoTitle.
* metaDescription.
* relatedPrograms.
* relatedEvents.

## 13.5 Event

Campos:

* title.
* slug.
* description.
* dateStart.
* dateEnd.
* locationName.
* locationAddress.
* registrationUrl.
* isFree.
* priceDescription.
* capacity.
* featuredImage.
* gallery.
* status: upcoming / past / cancelled.
* seoTitle.
* metaDescription.

## 13.6 Team Member

Campos:

* name.
* role.
* bio.
* portrait.
* email opcional.
* socialLinks opcional.
* order.
* visible.

## 13.7 Partner

Campos:

* name.
* logo.
* website.
* description.
* relationshipType.
* visible.
* order.

## 13.8 Gallery Item

Campos:

* image.
* alt.
* caption.
* event.
* program.
* date.
* credit.
* isPlaceholder.
* visibility: public / private / internal.
* consentConfirmed.

## 13.9 Testimonial

Campos:

* quote.
* name.
* roleOrContext.
* image opcional.
* anonymous.
* approvedForPublication.
* relatedProgram.
* order.

## 13.10 Navigation

Campos:

* label.
* href.
* order.
* visible.
* language.
* isCTA.
* parent opcional.

---

# 14. SEO técnico

## 14.1 Requisitos globales

* Un solo H1 por página.
* Titles únicos.
* Meta descriptions únicas.
* URLs limpias.
* Canonicals.
* Sitemap dinámico.
* Robots.txt.
* Open Graph.
* Twitter Cards.
* JSON-LD.
* Breadcrumbs visibles y estructurados.
* Alt text real.
* Imágenes optimizadas.
* Internal linking.
* Páginas legales indexables o no indexables según estrategia.
* No publicar páginas vacías.
* No generar thin content.

## 14.2 Sitemap

Debe incluir:

* Home.
* Páginas estáticas.
* Programas.
* Eventos.
* Noticias.
* Galería si tiene páginas individuales.
* Páginas EN solo si están activas.

Debe excluir:

* `/studio`
* APIs.
* Preview routes.
* Drafts.
* Páginas privadas.
* Imágenes internas.

## 14.3 Robots

Debe permitir crawling del sitio público y bloquear rutas no públicas.

Ejemplo:

```txt
User-agent: *
Allow: /

Disallow: /studio
Disallow: /api
Disallow: /preview
Disallow: /drafts

Sitemap: https://stichtingluminacollective.nl/sitemap.xml
```

## 14.4 Schema markup

Implementar JSON-LD por tipo de página.

### Home

* Organization.
* WebSite.
* WebPage.

### Programas

* WebPage.
* BreadcrumbList.
* Organization.

### Eventos

* Event.
* BreadcrumbList.
* Organization.

### Blog

* BlogPosting.
* BreadcrumbList.
* Organization.
* Person o Organization como author/publisher.

### Contact

* ContactPage.
* Organization.

### Breadcrumbs

* BreadcrumbList en todas las páginas internas.

## 14.5 Keywords NL

Principales:

* stichting vrouwen Nederland
* vrouwen stichting Nederland
* vrouwenorganisatie Nederland
* vrouwen community Nederland
* vrouwengemeenschap
* vrouwen activiteiten Nederland
* vrouwen evenementen Nederland
* vrijwilligerswerk vrouwen Nederland
* vrouwen empowerment stichting
* vrouwen netwerk Nederland
* activiteiten voor vrouwen
* stichting voor vrouwen
* vrouwen participatie
* vrouwen leiderschap
* culturele activiteiten vrouwen

## 14.6 Keywords EN preparadas

* women foundation Netherlands
* women community Netherlands
* women empowerment Netherlands
* women events Netherlands
* women network Netherlands
* women volunteering Netherlands
* women organization Netherlands
* community for women Netherlands

## 14.7 Estrategia local

Aunque la organización pueda actuar en todo Países Bajos, cada página importante debe dejar claro el contexto local.

Incluir cuando sea real:

* Ciudad.
* Región.
* Dirección.
* Lugares de eventos.
* Partners locales.
* Idioma neerlandés.
* KVK.
* ANBI.
* Contacto institucional.

## 14.8 Search Console checklist

Antes de lanzar:

* Verificar dominio.
* Subir sitemap.
* Revisar robots.
* Inspeccionar home.
* Inspeccionar páginas principales.
* Validar rich results.
* Revisar Core Web Vitals.
* Revisar Page Indexing.
* Revisar errores 404.
* Revisar mobile usability.
* Revisar canonical correcto.
* Revisar titles duplicados.

---

# 15. Contenido y copywriting

## 15.1 Tono de voz

Debe ser:

* Cálido.
* Humano.
* Profesional.
* Inspirador.
* Femenino.
* Inclusivo.
* Claro.
* Cercano.
* Institucional sin ser frío.
* Emocional sin ser cursi.
* Elegante sin sonar elitista.

No debe ser:

* Exagerado.
* Panfletario.
* Frío.
* Genérico.
* Académico.
* Demasiado corporativo.
* Demasiado informal.
* Traducido literalmente del español.

## 15.2 Copy principal NL

### Hero Home

```txt
Ruimte voor vrouwen om te groeien, verbinden en zichtbaar te zijn.
```

### Subtítulo Home

```txt
Stichting Lumina Collective brengt vrouwen samen in Nederland rond ontmoeting, kennis, cultuur en maatschappelijke betrokkenheid.
```

### CTA principal

```txt
Doe mee
```

### CTA secundario

```txt
Bekijk onze programma’s
```

### Misión

```txt
Wij geloven dat verandering begint waar vrouwen elkaar ontmoeten, verhalen delen en samen nieuwe mogelijkheden creëren.
```

### About H1

```txt
Wij zijn Lumina Collective.
```

### About body

```txt
Stichting Lumina Collective is ontstaan vanuit de behoefte aan een warme, zichtbare en toegankelijke plek waar vrouwen elkaar kunnen ontmoeten, hun ervaringen kunnen delen en nieuwe stappen kunnen zetten.
```

### Programas H1

```txt
Programma’s die vrouwen samenbrengen en versterken.
```

### Doe mee H1

```txt
Jouw betrokkenheid maakt ruimte voor meer vrouwen.
```

### Newsletter

```txt
Blijf verbonden met onze gemeenschap.
```

### Contact

```txt
Heb je een vraag, idee of voorstel voor samenwerking? We horen graag van je.
```

## 15.3 Microcopy formularios

Éxito contacto:

```txt
Bedankt voor je bericht. We nemen zo snel mogelijk contact met je op.
```

Error general:

```txt
Er ging iets mis. Probeer het opnieuw of stuur ons direct een e-mail.
```

Consent:

```txt
Ik ga akkoord met de verwerking van mijn gegevens volgens het privacybeleid.
```

Newsletter éxito:

```txt
Je bent ingeschreven. Welkom bij onze community.
```

## 15.4 Reglas editoriales para blog

* Títulos entre 40 y 70 caracteres.
* Meta descriptions entre 120 y 155 caracteres.
* Párrafos de máximo 5 líneas.
* Usar H2 cada 300–400 palabras.
* No usar H4 salvo necesidad real.
* Usar pull quotes con testimonios reales.
* Terminar con CTA.
* No publicar sin imagen destacada.
* No usar títulos clickbait.
* No repetir keywords artificialmente.

---

# 16. Estrategia de imágenes

## 16.1 Estilo fotográfico

Las imágenes deben ser:

* Reales.
* Humanas.
* Luminosas.
* Cálidas.
* Editoriales.
* Naturales.
* Diversas.
* Cercanas.
* Con momentos de interacción.
* Con mujeres en actividades reales.
* Con espacios bien iluminados.

Evitar:

* Stock demasiado posado.
* Sonrisas falsas.
* Oficinas corporativas frías.
* Imágenes demasiado producidas.
* Estética IA.
* Collages artificiales.
* Manos genéricas.
* Fotos sin contexto.
* Fotos con exceso de filtros.

## 16.2 Tipos de imagen necesarios

* Hero Home: mujeres reunidas en ambiente cálido.
* About: retrato grupal o actividad comunitaria.
* Programas: talleres, conversaciones, dinámicas.
* Eventos: grupo, espacio, interacción.
* Blog: imágenes temáticas, retratos, actividades.
* Galería: mezcla de horizontales, verticales y detalles.
* Equipo: retratos naturales.
* Partners: logos oficiales.

## 16.3 Requisitos técnicos

* Hero: mínimo 1920px ancho.
* Cards: mínimo 800px ancho.
* Retratos: mínimo 800px alto.
* Formatos: AVIF/WebP cuando sea posible.
* Siempre definir width/height.
* Usar `sizes`.
* Usar `priority` solo para hero principal.
* Lazy loading para resto.
* Alt text obligatorio.
* Caption recomendado.
* Credit opcional.
* Campo `isPlaceholder` obligatorio.

---

# 17. Accesibilidad

## 17.1 Estándar

Cumplir WCAG 2.2 AA como mínimo.

## 17.2 Requisitos

* Contraste mínimo 4.5:1 en texto normal.
* Focus visible.
* Navegación por teclado.
* Menú mobile accesible.
* Botones con labels claros.
* Inputs con labels reales.
* Mensajes de error asociados al campo.
* Alt text útil.
* No depender solo del color.
* Respeto a `prefers-reduced-motion`.
* Estructura semántica correcta.
* Landmarks: header, nav, main, footer.
* Skip link.
* Tamaño mínimo de tap targets en móvil.
* Formularios accesibles.

---

# 18. Performance

## 18.1 Objetivos

* Lighthouse Performance: 90+.
* Accessibility: 95+.
* SEO: 95+.
* Best Practices: 95+.
* LCP menor a 2.5s.
* CLS menor a 0.1.
* INP menor a 200ms.
* Sin imágenes rotas.
* Sin layout shift visible.
* Sin fuentes bloqueando render.

## 18.2 Reglas

* Server Components por defecto.
* Client Components solo para interactividad.
* No cargar GSAP globalmente.
* No cargar librerías pesadas si CSS resuelve.
* Imágenes optimizadas.
* Fuentes self-hosted.
* Preload solo de fuente crítica.
* Evitar sliders pesados.
* No usar video en hero en MVP.
* No usar mapas embebidos pesados sin interacción.
* Scripts analytics solo con consentimiento si aplica.

---

# 19. Responsive design

## 19.1 Mobile

* Menú full-screen.
* CTAs apilados.
* Hero texto primero o imagen primero según contraste.
* Cards en una columna.
* Galería en 2 columnas simples.
* Formularios full width.
* Footer en una columna.
* Sin overflow horizontal.

## 19.2 Tablet

* Grid de 2 columnas cuando tenga sentido.
* Imágenes con proporción controlada.
* Espaciado medio.

## 19.3 Desktop

* Layout editorial.
* Grids asimétricos.
* Imágenes grandes.
* Más espacio negativo.
* Navegación completa.
* Footer multi-columna.

---

# 20. Componentes necesarios

## Componentes globales

* Header.
* MobileMenu.
* Footer.
* Logo.
* LanguageSwitcher preparado.
* CookieBanner.
* SEOHead / Metadata helpers.
* StructuredData.
* Breadcrumbs.
* Container.
* Section.
* Button.
* TextLink.
* ImageComponent.
* CMSImage.

## Componentes editoriales

* EditorialHero.
* FullBleedHero.
* SplitImageText.
* MissionStatement.
* PillarsSection.
* ImageMosaic.
* GalleryMasonry.
* QuoteBlock.
* CTASection.
* PartnerStrip.
* TestimonialCard.

## Componentes de contenido

* ProgramCard.
* ProgramList.
* EventCard.
* EventList.
* BlogCard.
* BlogGrid.
* FeaturedPost.
* TeamCard.
* PartnerCard.

## Componentes de formularios

* ContactForm.
* VolunteerForm.
* NewsletterForm.
* DonationInterestForm.
* FormInput.
* FormTextarea.
* FormSelect.
* FormCheckbox.
* FormStatusMessage.

## Componentes admin/preview

* PreviewBanner.
* DraftModeIndicator.
* SanityPreviewProvider.

---

# 21. Funcionalidades

## Fase 1 obligatoria — MVP premium controlado

La Fase 1 debe ser pequeña, elegante, completa y muy pulida. No intentar construir una plataforma gigante antes de tener contenido real.

Debe incluir:

* Sitio público.
* CMS.
* Home editable.
* Over ons.
* Programma’s.
* Agenda.
* Doe mee.
* Contact.
* Galería inicial pequeña si existen fotos reales o placeholders muy cuidados.
* Logo completo e isotipo “L” implementados correctamente.
* Social links reales.
* Contact form.
* Volunteer form.
* Newsletter capture simple.
* SEO editable por página.
* Sitemap.
* Robots.
* Schema básico.
* Cookie banner.
* Analytics básico con consentimiento.
* Deploy en Vercel.

No son obligatorios en el primer lanzamiento si no hay contenido real suficiente:

* Blog completo.
* Donaciones integradas.
* Dashboard de registros.
* Lightbox avanzado.
* Multiidioma activo.
* Página extensa de partners.
* Sistema completo de testimonios.

## Fase 2 opcional

* Donaciones con Mollie.
* RSVP a eventos.
* Dashboard de registros.
* Lightbox avanzado.
* Área de recursos descargables.
* Multiidioma activo EN.
* CRM.
* Automatizaciones de email.
* Página de prensa.
* Memoria anual / reportes.

---

# 22. Formularios

## 22.1 Contacto

Campos:

* Naam.
* E-mail.
* Onderwerp.
* Bericht.
* Consent.
* Honeypot.

Validación:

* Nombre requerido.
* Email válido requerido.
* Mensaje mínimo 10 caracteres.
* Consent obligatorio.

## 22.2 Voluntariado

Campos:

* Naam.
* E-mail.
* Telefoon opcional.
* Área de interés.
* Disponibilidad opcional.
* Bericht.
* Consent.
* Honeypot.

## 22.3 Newsletter

Campos:

* E-mail.
* Consent.
* Honeypot.

## 22.4 Colaboraciones

Campos:

* Naam.
* Organisatie.
* E-mail.
* Website opcional.
* Type samenwerking.
* Bericht.
* Consent.

---

# 23. GDPR, privacidad y legal

## 23.1 Páginas legales obligatorias

* Privacy Policy.
* Cookie Policy.
* Terms / Algemene voorwaarden si aplica.
* ANBI si aplica.
* Contact details.
* Data processing explanation.

## 23.2 Requisitos GDPR

* Consentimiento explícito en formularios.
* No marcar checkboxes por defecto.
* Explicar finalidad de datos.
* No guardar datos innecesarios.
* Permitir solicitud de eliminación.
* No cargar analytics no esencial sin consentimiento.
* Política de cookies clara.
* Contratos con proveedores si corresponde.

## 23.3 Cookies

Categorías:

* Necesarias.
* Analíticas.
* Marketing, solo si se usan.

El banner debe permitir:

* Aceptar.
* Rechazar.
* Configurar.
* Cambiar preferencia después.

---

# 24. Estructura de archivos recomendada

```txt
src/
  app/
    [locale]/
      layout.tsx
      page.tsx
      over-ons/
      programmas/
      agenda/
      nieuws/
      gemeenschap/
      doe-mee/
      contact/
    api/
      contact/
      volunteer/
      newsletter/
      revalidate/
    studio/
  components/
    global/
    layout/
    sections/
    cards/
    forms/
    cms/
    seo/
    ui/
  lib/
    sanity/
    seo/
    analytics/
    validation/
    utils/
  sanity/
    schemas/
    structure/
    queries/
  styles/
    globals.css
    tokens.css
  types/
  config/
  data/
  tests/
```

---

# 25. Variables de entorno

```txt
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
SANITY_API_READ_TOKEN=
SANITY_API_WRITE_TOKEN=
SANITY_REVALIDATE_SECRET=
RESEND_API_KEY=
CONTACT_EMAIL=
VOLUNTEER_EMAIL=
NEWSLETTER_PROVIDER_API_KEY=
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=
SENTRY_DSN=
```

Reglas:

* Nunca exponer tokens privados.
* Separar production y preview.
* Documentar cada variable.
* Añadir `.env.example`.

---

# 26. Analytics y eventos

## 26.1 Eventos a medir

* Click CTA Hero.
* Click `Doe mee`.
* Envío formulario contacto.
* Envío formulario voluntariado.
* Suscripción newsletter.
* Click donar.
* Click social.
* Click email.
* Registro evento.
* Cambio idioma.
* Scroll 75% Home.
* Click en programa.
* Click en artículo.

## 26.2 Métricas de éxito

* Formularios enviados.
* Registros voluntariado.
* Clics a eventos.
* Tráfico orgánico.
* Páginas indexadas.
* CTR en Google.
* Tiempo en página.
* Scroll depth.
* Conversiones por canal.

---

# 27. Testing y QA

## 27.1 Tests obligatorios

* TypeScript build.
* ESLint.
* Playwright en páginas principales.
* Lighthouse mobile y desktop.
* Test formularios.
* Test imágenes rotas.
* Test rutas 404.
* Test sitemap.
* Test robots.
* Test schema con Rich Results.
* Test navegación teclado.
* Test responsive.

## 27.2 Páginas a probar

* Home.
* Over ons.
* Programmas.
* Program detail.
* Agenda.
* Event detail.
* Nieuws.
* Blog detail.
* Gemeenschap.
* Doe mee.
* Contact.
* Privacy.
* Cookies.
* Studio login.

## 27.3 Criterios de bloqueo

No lanzar si ocurre cualquiera de estos:

* Error 500 en build.
* Lighthouse Performance mobile menor a 80.
* CLS mayor a 0.15.
* Formulario contacto no envía email.
* CMS no accesible.
* Imagen rota.
* Contraste menor a 4.5:1 en texto principal.
* Sitemap no funciona.
* Robots bloquea páginas públicas.
* Página principal no indexable.
* Metadata duplicada grave.
* Menú mobile no usable.
* Error JS crítico en consola.
* Página no responsive.

---

# 28. Roadmap de implementación

## Fase 0 — Preparación

* Crear repositorio.
* Definir stack.
* Configurar Next.js.
* Configurar TypeScript.
* Configurar Tailwind.
* Configurar Sanity.
* Crear estructura base.
* Configurar Vercel.
* Crear `.env.example`.

## Fase 1 — Design System

* Tokens de color.
* Tipografía.
* Grid.
* Botones.
* Inputs.
* Header.
* Footer.
* Cards.
* Layout sections.
* Componentes base.

## Fase 2 — CMS

* Schemas.
* Studio structure.
* Roles.
* Preview.
* Queries.
* Image handling.
* Validaciones.
* Settings globales.

## Fase 3 — Frontend MVP premium

* Home.
* Over ons.
* Programmas.
* Agenda.
* Doe mee.
* Contacto.
* Galería inicial si hay imágenes suficientes.
* Legal pages.

Blog, páginas extensas de partners y donaciones avanzadas pasan a Fase 2 si no hay contenido real.

## Fase 4 — SEO

* Metadata.
* Sitemap.
* Robots.
* JSON-LD.
* Open Graph.
* Internal linking.
* Hreflang preparado.
* Canonicals.

## Fase 5 — Formularios

* Contact.
* Volunteer.
* Newsletter.
* Validación.
* Emails.
* Anti-spam.
* Mensajes de éxito/error.

## Fase 6 — QA

* Testing.
* Performance.
* Accessibility.
* Mobile.
* Schema.
* Search Console readiness.
* Fixes.

## Fase 7 — Launch

* Conectar dominio.
* Verificar HTTPS.
* Redirecciones.
* Search Console.
* Analytics.
* Sitemap submit.
* Revisión final.
* Deploy production.

## Fase 8 — Post-launch

* Revisar indexación.
* Revisar errores Search Console.
* Medir conversiones.
* Optimizar páginas con bajo rendimiento.
* Añadir contenido blog.
* Mejorar imágenes reales.
* Activar EN si corresponde.

---

# 29. Instrucciones para agentes IA en Antigravity

## 29.1 Reglas generales

* No improvisar diseño.
* No usar Bootstrap.
* No usar SVGs decorativos generados.
* No usar librerías de iconos salvo aprobación.
* No usar componentes visuales genéricos.
* No crear páginas sin CMS si deben ser editables.
* No escribir texto falso sin marcar como placeholder.
* No subir imágenes sin alt.
* No romper SEO por diseño.
* No dejar `console.log`.
* No dejar TODOs críticos.
* No lanzar sin QA.
* No añadir dependencias sin justificar.
* No duplicar lógica.
* No meter Client Components innecesarios.
* No construir funciones de Fase 2 antes de terminar una Fase 1 premium.
* No hacer la web demasiado corporativa, fría o rígida.
* No transformar la marca en una ONG genérica o panfletaria.
* Respetar siempre el logo, su “L”, sus colores y su suavidad visual.

## 29.1.1 Prompt maestro para Antigravity

Usar este bloque como instrucción inicial antes de ejecutar tareas:

```txt
Construye Stichting Lumina Collective como una web institucional premium, femenina, cálida, editorial y europea. La web debe sentirse como una extensión directa del logo: marfil, blush, vino profundo, oro suave, luz, suavidad y elegancia. No hagas una landing genérica, no uses Bootstrap, no uses iconos decorativos sin sentido, no uses blobs, no uses estética SaaS, no uses ilustraciones IA. Prioriza una Fase 1 pequeña pero impecable: Home, Over ons, Programma’s, Agenda, Doe mee, Contact, CMS, formularios, SEO, accesibilidad y responsive. Todo debe verse real, humano, serio y cálido. Menos funciones, más calidad. Cada sección debe tener intención visual, copy breve y claro, fotografía real o placeholders marcados. No avances a Fase 2 hasta que el MVP se vea premium y funcione perfecto.
```

## 29.2 Agentes recomendados

### Agent 1 — Arquitectura

Responsable de:

* Setup Next.js.
* Estructura de carpetas.
* Configuración TS.
* Tailwind.
* Vercel.
* Variables.
* Routing.

### Agent 2 — Design System

Responsable de:

* Tokens.
* Componentes UI.
* Layout.
* Header/Footer.
* Responsive.
* Animaciones base.

### Agent 3 — CMS

Responsable de:

* Sanity schemas.
* Studio.
* Preview.
* Queries.
* Image fields.
* Roles.

### Agent 4 — Frontend Pages

Responsable de:

* Construir páginas.
* Conectar CMS.
* Implementar cards.
* Implementar secciones.

### Agent 5 — SEO & Content

Responsable de:

* Metadata.
* Sitemap.
* Robots.
* JSON-LD.
* Copy inicial.
* Keywords.
* Internal linking.

### Agent 6 — Forms & Security

Responsable de:

* Contact forms.
* Volunteer forms.
* Newsletter.
* Zod.
* Honeypot.
* Rate limiting.
* Emails.

### Agent 7 — QA

Responsable de:

* Testing.
* Lighthouse.
* Accessibility.
* Responsive.
* Bugs.
* Launch checklist.

---

# 30. Criterios de aceptación final

El proyecto estará terminado cuando:

* Todas las páginas definidas existen.
* El diseño se ve premium, editorial y humano.
* La web no parece vibecode.
* No usa Bootstrap.
* No usa plantillas genéricas.
* Las imágenes están optimizadas.
* El CMS permite editar contenido clave.
* El admin puede crear blog, eventos, programas y galería.
* Formularios funcionan.
* SEO técnico completo.
* Sitemap correcto.
* Robots correcto.
* Schema validado.
* Metadata única.
* Responsive real.
* Accesibilidad AA.
* Lighthouse 90+ objetivo.
* No hay errores críticos.
* Search Console listo.
* Deploy estable.
* Documentación entregada.

---

# 31. Entregables finales

## Código

* Proyecto Next.js.
* Componentes.
* CMS.
* Schemas.
* Queries.
* Formularios.
* SEO helpers.
* Tests.
* Configuraciones.

## Documentación

* README.
* Setup local.
* Variables de entorno.
* Guía de CMS para admin.
* Guía de publicación de blog.
* Guía de eventos.
* Guía de imágenes.
* QA checklist.
* Launch checklist.
* Mantenimiento.

## Contenido

* Copy inicial.
* Metadata inicial.
* Páginas legales placeholder.
* Programas placeholder.
* Eventos placeholder.
* Blog placeholder.
* Imágenes placeholder marcadas.

---

# 32. Checklist final de lanzamiento

## Técnico

* Build correcto.
* Deploy production.
* Dominio conectado.
* HTTPS activo.
* Redirección www a non-[www](http://www).
* No errores consola.
* No imágenes rotas.
* No links rotos.
* Forms OK.
* CMS OK.
* Revalidate OK.

## SEO

* Titles.
* Descriptions.
* Canonicals.
* Sitemap.
* Robots.
* Schema.
* Open Graph.
* H1 único.
* Alt text.
* Internal links.
* Search Console.

## Diseño

* Mobile perfecto.
* Tablet correcto.
* Desktop premium.
* Header funcional.
* Footer completo.
* CTAs visibles.
* Tipografía correcta.
* Imágenes bien recortadas.
* Sin overflow.
* Sin estética genérica.

## Legal

* Privacy.
* Cookies.
* Consent.
* Contact details.
* KVK si aplica.
* ANBI si aplica.
* Terms si aplica.

## Admin

* Login.
* Crear post.
* Crear evento.
* Cambiar imagen.
* Cambiar texto home.
* Editar SEO.
* Publicar.
* Preview.
* Revalidación.

---

# 33. Resumen de dirección final

Stichting Lumina Collective debe ser una web de comunidad femenina con presencia institucional real. El diseño debe parecer trabajado por una agencia premium: fotografía fuerte, tipografía editorial, espacios generosos, copy humano, estructura clara y tecnología moderna.

La web debe evitar todo lo que delata una página genérica: Bootstrap, iconos de librería, ilustraciones IA, blobs, gradientes artificiales, cards repetidas y layouts sin intención.

El resultado debe ser una plataforma viva: fácil de administrar, preparada para SEO, útil para la comunidad y suficientemente elegante para generar confianza ante partners, instituciones y donantes.

## 33.1 Ajuste final de marca

La web no debe sentirse como una organización que intenta parecer grande artificialmente. Debe sentirse como una comunidad real que ya tiene una identidad clara y está preparada para crecer.

La clave final es esta:

```txt
Menos ruido visual. Más fotografía real.
Menos frases genéricas. Más claridad humana.
Menos funciones de golpe. Más ejecución premium.
Menos activismo abstracto. Más comunidad, cultura y presencia.
```

El objetivo final no es solo tener una web bonita. El objetivo es crear una presencia digital que haga que una mujer piense:

```txt
“Este lugar parece serio, cálido y real. Aquí puedo participar.”
```

Y que una institución piense:

```txt
“Esta organización tiene identidad, claridad y potencial para colaborar.”
```

Ese es el estándar mínimo del proyecto.
