# Inicio (versión España)

Página de inicio estática. Orden en pantalla: frase del día, hora en Madrid, previsión de 6 días en Madrid, cuenta atrás (3 próximos eventos), expresiones útiles en inglés de la época del año (12 al día, en 2 columnas), conversor de unidades y próximas fechas.

## Archivos

| Archivo | Para qué sirve | ¿Se edita? |
|---|---|---|
| `index.html` | La página | No hace falta |
| `config.js` | Previsión, fechas, mensajes, cumpleaños, nº de eventos y expresiones | Sí |
| `palabras.js` | Frases del día y 500 expresiones (125 por estación) | Solo para añadir o quitar expresiones |

Los tres archivos son necesarios. Si falta `palabras.js`, la página carga pero desaparecen las tarjetas de expresiones y vocabulario sin dar error.

## Publicar en GitHub Pages

1. Crea un repositorio nuevo. Con cuenta gratuita debe ser **público**: cualquiera con el enlace puede ver nombres, cumpleaños y ubicación de `config.js`.
2. Sube `index.html`, `config.js` y `palabras.js` a la raíz del repositorio (*Add file > Upload files*).
3. *Settings > Pages* > *Deploy from a branch*, rama `main`, carpeta `/ (root)`, *Save*.
4. En 1–2 minutos estará en `https://TU-USUARIO.github.io/NOMBRE-REPO/`.
5. En el iPhone: Safari > *Compartir > Añadir a pantalla de inicio*.

## Cambiar ajustes

Edita `config.js` en GitHub (icono del lápiz).

- Días de previsión: `dias` dentro de `detalles` (de 1 a 16).
- Eventos de la cuenta atrás: `cuentaAtras.maxEventos`.
- Expresiones por día: `palabrasPorDia` (12 = 2 columnas de 6).
- Si la página queda en blanco tras un cambio, falta una coma o una comilla.
- GitHub Pages puede tardar hasta 10 minutos en mostrar los cambios.
- La lista `fechas` llega hasta agosto de 2027: añade las de después cuando toque.

## Fuentes de datos

- Previsión: Open-Meteo (sin clave, gratuito para uso no comercial).
