# icrossweb

Sitio público de **iCross** — la app de tiempos de espera en los puentes de la
frontera México–EE.UU. Repo separado del de la app (`strellesa/tiempos-puentes`).

Su razón de ser principal **no es la landing**: son las dos páginas legales.
App Store Connect exige una URL de política de privacidad para poder enviar la
app a revisión, y la guía 1.2 de Apple exige, para una app con contenido de
usuarios, un acuerdo de tolerancia cero al contenido ofensivo más información de
contacto publicada. Eso vive aquí.

## Rutas

| Ruta | Para qué |
|---|---|
| `/` | Landing |
| `/privacidad` | Aviso de Privacidad → va en el campo obligatorio de App Store Connect |
| `/terminos` | Términos y Condiciones → incluye la cláusula de tolerancia cero (guía 1.2) |
| `/soporte` | URL de soporte de la ficha, y el contacto publicado que pide la guía 1.2 |

## Stack

Next 16 (App Router, Turbopack) · React 19 · Tailwind 4 · TypeScript.
El mismo molde que `reclutaya-web`, para no tener dos formas de hacer lo mismo.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npx eslint .
```

Todas las páginas son estáticas: no hay base de datos, ni API, ni variables de
entorno, ni sesión. Es a propósito — el revisor de Apple tiene que poder abrir
`/privacidad` sin cuenta y sin que nada falle.

## Dominios

`icrossapp.com` es el **canónico**; `icrossapp.com.mx` redirige a él desde
Vercel. Se define en un solo lugar, `lib/sitio.ts` (`SITIO`), de donde salen los
metadatos, el sitemap y el robots. Para invertirlo se cambia esa constante y se
invierte la redirección en Vercel.

**La URL del aviso de privacidad, una vez registrada en App Store Connect,
conviene no moverla nunca.**

## Reglas al tocar este repo

1. **No se anuncia lo que la app no hace.** Nada de inicio de sesión con Google,
   nada de Apple Wallet, nada de descuentos de patrocinadores: hoy ninguna de
   esas tres existe. La guía 2.3 de Apple trata el material promocional engañoso
   igual que un control que no funciona. Cuando la app publique de verdad, se
   pone la URL en `APP_STORE_URL` de `lib/sitio.ts` y los botones aparecen solos.

2. **Los tres documentos de privacidad tienen que CUADRAR entre sí:**
   `/privacidad`, el `ios/Runner/PrivacyInfo.xcprivacy` de la app y las etiquetas
   de privacidad de App Store Connect. **Apple compara los tres.** Si la app
   empieza a recoger un dato nuevo, se actualizan los tres el mismo día.

3. **Las instrucciones de `/soporte` describen pantallas reales.** Si una pantalla
   de la app cambia de nombre, esta página cambia el mismo día: una instrucción
   que no se puede seguir es peor que no tener ayuda.

4. **Los términos comprometen 24 horas** para actuar sobre un reporte de
   contenido (sección 6). Es el plazo que pide la guía 1.2 y es una obligación
   operativa real, no una frase.

5. El acento es el azul **#1E40AF**, el mismo de la app. **Nunca morado**: ese
   color se quitó de la app a propósito, y aclarar el azul multiplicando canales
   lleva justo ahí. Los tokens están en `app/globals.css`.

## Pendiente

- Registrar el dominio en Vercel y apuntar el DNS.
- Decidir si el correo de contacto pasa a `soporte@icrossapp.com` (hoy es el de
  Controlify). Si cambia, se cambia en `lib/sitio.ts` y en la ficha de la tienda.
