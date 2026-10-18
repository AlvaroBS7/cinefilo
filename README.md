# Cinéfilo · paquete para Cloudflare Pages (versión no comercial)

## Contenido
- `index.html`: la app.
- `functions/api/...`: proxy que guarda tus claves de TMDb y OMDb en el servidor.
- `aviso-legal.html`, `privacidad.html`, `cookies.html`: busca los textos entre corchetes `[...]` y rellénalos. Son plantillas, no asesoramiento legal.
- Falta `tmdb-logo.svg`: descarga el logo oficial de TMDb desde su web y guárdalo en la raíz con ese nombre (TMDb exige mostrarlo).

## Paso 1: publicar y obtener la URL
1. Crea una cuenta en github.com y un repositorio nuevo llamado `cinefilo`.
2. Descomprime este zip y sube su contenido al repositorio (Add file > Upload files). Debe verse la carpeta `functions`.
3. Crea una cuenta en cloudflare.com. En Workers y Pages, crea un proyecto de Pages conectado a Git y elige el repositorio. Nombre del proyecto: `cinefilo`. Build command: vacío. Output directory: `/` o vacío.
4. Tu URL pública será `https://cinefilo.pages.dev` (o parecida si el nombre está ocupado). Úsala al pedir la clave a TMDb.
Los menús de Cloudflare cambian a veces; si no encuentras algo, busca "Pages" y "Connect to Git".

## Paso 2: claves
1. TMDb: Ajustes > API > solicitar clave (Developer). Di que es un proyecto personal sin ánimo de lucro, sin anuncios ni cobros.
2. OMDb (opcional, para notas de IMDb y Rotten Tomatoes): omdbapi.com/apikey.aspx.
3. En Cloudflare, tu proyecto > Settings > Variables and secrets: añade `TMDB_KEY` y `OMDB_KEY` como secretos y vuelve a desplegar.
Hasta que pongas las claves, la app funciona con el catálogo propio.

## Reglas de TMDb a respetar
- Uso no comercial: sin anuncios, cobros, afiliados ni donaciones. Para ganar dinero necesitas un acuerdo escrito con TMDb.
- Mostrar el logo (menos prominente que el tuyo) y el aviso exacto, ya incluido en el pie.
- No guardar sus datos más de 6 meses: la app los refresca a los 150 días o los borra.
