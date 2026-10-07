# Inicio (versión España)

Página de inicio estática. Orden en pantalla:

1. Frase del día y hora en Madrid.
2. Tiempo en Madrid: hoy (máxima, mínima y resumen), hoy hora a hora y los 6 días siguientes desde mañana (3 columnas x 2 filas).
3. Calendario mensual con festivos, cumpleaños, eventos (fútbol, UFC, Madrid) y días señalados; al tocar un día muestra lo marcado y el santoral.
4. Próximas fechas: 12 en 2 columnas (sale de los mismos datos que el calendario).
5. Expresiones útiles en inglés: 20 al día (2 columnas de 10) de un total de 2.000.
6. Conversor de unidades.
7. Cuenta atrás compacta (6 próximos eventos).

## Archivos

| Archivo | Para qué sirve | ¿Se edita? |
|---|---|---|
| `index.html` | La página | No hace falta |
| `config.js` | Tiempo, cumpleaños, mensajes, festivos, eventos y días señalados | Sí |
| `palabras.js` | Frases del día y 2.000 expresiones en 23 bloques temáticos | Solo para añadir o quitar expresiones |
| `santoral.js` | Santo de cada día (366 días) | Rara vez |

Sube los cuatro archivos. Si falta `palabras.js` o `santoral.js`, la página carga igual pero sin expresiones o sin santoral, y no avisa.

## Mantenimiento anual (importante)

Los festivos oficiales están cargados para **2026 y 2027** en `config.js` > `calendario.festivos`:

- 2026: Decreto 75/2025 (BOCM 25/09/2025) y festivos locales del Ayuntamiento de Madrid.
- 2027: Decreto 82/2026 (BOCM 01/10/2026). San Isidro y la Almudena están marcados como pendientes hasta que el Ayuntamiento apruebe los festivos locales de 2027. Cuando se publiquen, quita `provisional: true` o corrige la fecha.

Para años sin calendario cargado, la página marca los festivos habituales como "previstos" (borde rojo, sin relleno). Cada otoño, cuando la Comunidad de Madrid publique el calendario del año siguiente, añade un bloque `"2028": [ ... ]` copiando el formato de 2027.

### Eventos (fútbol, UFC, Madrid)

Están en `config.js` > `calendario.eventos`, con fecha fija. Revísalos cada mes:

- Fútbol: LaLiga confirma día y hora unas semanas antes. Los partidos llevan `provisional: true` hasta entonces (salen como "por confirmar").
- UFC: los carteles cambian a menudo. Los eventos en EE. UU. o Canadá se ven en España de madrugada del domingo.
- Para añadir uno: `{ fecha: "2027-03-14", nombre: "…", categoria: "Fútbol", nota: "…" },`

## Publicar en GitHub Pages

1. Crea un repositorio nuevo. Con cuenta gratuita debe ser **público**: cualquiera con el enlace puede ver nombres, cumpleaños y ubicación de `config.js`.
2. Sube `index.html`, `config.js`, `palabras.js` y `santoral.js` a la raíz (*Add file > Upload files*).
3. *Settings > Pages* > *Deploy from a branch*, rama `main`, carpeta `/ (root)`, *Save*.
4. En 1–2 minutos estará en `https://TU-USUARIO.github.io/NOMBRE-REPO/`.
5. En el iPhone: Safari > *Compartir > Añadir a pantalla de inicio*.

## Cambiar ajustes

Edita `config.js` en GitHub (icono del lápiz).

- Días de previsión a partir de mañana: `dias` dentro de `detalles` (de 1 a 15).
- Eventos de la cuenta atrás: `cuentaAtras.maxEventos`.
- Expresiones por día: `palabrasPorDia` (20 = 2 columnas de 10).
- Número de próximas fechas: `mostrarFechas` (12 = 2 columnas de 6).
- Cumpleaños: `mensajesEspeciales` (los que llevan `lista` salen en el calendario).
- Días señalados: `calendario.senalados`.
- Si la página queda en blanco tras un cambio, falta una coma o una comilla.
- GitHub Pages puede tardar hasta 10 minutos en mostrar los cambios.

## Fuentes de datos

- Tiempo: Open-Meteo (sin clave, gratuito para uso no comercial).
- Festivos: BOCM y Ayuntamiento de Madrid.
- Eventos: calendarios oficiales de LaLiga, UEFA, UFC, Mutua Madrid Open y Maratón de Madrid (a 7 de octubre de 2026).
- Santoral: orientativo, según el calendario católico y la tradición española; puede variar entre calendarios.
