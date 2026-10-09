# Inicio (versión España)

Página de inicio estática. Orden en pantalla:

1. Frase del día y hora en Madrid.
2. Tiempo en Madrid: hoy (máxima, mínima y resumen), hoy hora a hora y los 6 días siguientes desde mañana (3 columnas x 2 filas).
3. Calendario mensual con festivos, cumpleaños, calendario escolar, eventos (fútbol, UFC, Madrid) y días señalados; al tocar un día muestra lo marcado y el santoral. Avisa solo si falta algún dato.
4. Próximas fechas con cuenta atrás en vivo: todo lo de los próximos 31 días (mínimo 12), en 2 columnas. Sale de los mismos datos que el calendario.
5. Expresiones útiles en inglés: 20 al día (2 columnas de 10) de un total de 2.000, con modo repaso y marcado de aprendidas.
6. Conversor (al final): dólares/euros como principal y botones para medidas de EE. UU. (millas, yardas, grados, libras, onzas, tazas, pulgadas, galones, mph, onzas líquidas, cucharadas y pies). Mismo formato que las versiones con EE. UU.

## Archivos

| Archivo | Para qué sirve | ¿Se edita? |
|---|---|---|
| `index.html` | La página | No hace falta |
| `config.js` | Tiempo, mensajes, festivos, eventos y días señalados | Sí |
| `cumples.js` | Cumpleaños, una línea por persona: `["11-04", "Felipe"],` | Sí |
| `palabras.js` | Frases del día y 2.000 expresiones en 23 bloques temáticos | Solo para añadir o quitar expresiones |
| `santoral.js` | Santo de cada día (366 días) | Rara vez |

Sube los cinco archivos `.js` y el `index.html`. Si falta `palabras.js`, `santoral.js` o `cumples.js`, la página carga igual pero sin expresiones, santoral o cumpleaños, y no avisa.

## Qué se actualiza solo y qué no

| Dato | Fuente | Si falla |
|---|---|---|
| Tiempo | Open-Meteo, cada vez que se abre | Muestra la última previsión guardada en el navegador ("Sin conexión: previsión guardada hace X") |
| Partidos de Real Madrid, Barça y Atlético | TheSportsDB (gratuita), cada 12 h | Usa la última copia guardada; si no hay, los partidos de `config.js` |
| Veladas UFC | TheSportsDB, cada 12 h | Igual que los partidos |
| Festivos de un año sin datos oficiales en `config.js` | Nager.Date (nacionales + Comunidad de Madrid) | Festivos habituales calculados, marcados como "previstos" |
| Festivos locales de Madrid capital | Solo `config.js` | Se marcan como "previstos" |
| Calendario escolar | Solo `config.js` | Aviso en el calendario |
| Eventos de Madrid (maratón, tenis…) | Solo `config.js` | Aviso en el calendario cuando no queden futuros |

Los partidos y la UFC salen solo en el calendario, no en "Próximas fechas" (`proximasFechasExcluir` en `config.js`).

Los datos online, las expresiones aprendidas y el modo repaso se guardan en el navegador de cada dispositivo: no se comparten entre el móvil y el ordenador.

## Mantenimiento (la página avisa sola)

El calendario muestra un aviso rojo cuando:

- Falta el calendario laboral del año en curso, o es octubre o más tarde y falta el del año siguiente (la Comunidad de Madrid lo publica a finales de septiembre o principios de octubre).
- No hay calendario escolar para el curso siguiente (se publica en primavera-verano).
- No quedan eventos de Madrid futuros en `config.js`.

Además hay dos recordatorios en el calendario: 15 de junio (calendario escolar) y 5 de octubre (festivos).

Festivos cargados: **2026** (Decreto 75/2025) y **2027** (Decreto 82/2026; San Isidro y la Almudena pendientes del Ayuntamiento). Para añadir 2028, copia el bloque `"2027": [ ... ]` y cambia las fechas.

## Publicar en GitHub Pages

1. Crea un repositorio nuevo. Con cuenta gratuita debe ser **público**: cualquiera con el enlace puede ver nombres, cumpleaños y ubicación de `config.js`.
2. Sube `index.html`, `config.js`, `cumples.js`, `palabras.js` y `santoral.js` a la raíz (*Add file > Upload files*).
3. *Settings > Pages* > *Deploy from a branch*, rama `main`, carpeta `/ (root)`, *Save*.
4. En 1–2 minutos estará en `https://TU-USUARIO.github.io/NOMBRE-REPO/`.
5. En el iPhone: Safari > *Compartir > Añadir a pantalla de inicio*.

## Cambiar ajustes

Edita `config.js` en GitHub (icono del lápiz).

- Días de previsión a partir de mañana: `dias` dentro de `detalles` (de 1 a 15).
- Próximas fechas: `proximasFechasDias` (31) y `mostrarFechas` (mínimo de fechas, 12).
- Expresiones por día: `palabrasPorDia` (20 = 2 columnas de 10).
- Cumpleaños: `cumples.js`, ordenados por mes. Para que no avise los días previos: `["02-28", "Carlota", { avisar: false }],`
- Días señalados: `calendario.senalados`.
- Si la página queda en blanco tras un cambio, falta una coma o una comilla.
- GitHub Pages puede tardar hasta 10 minutos en mostrar los cambios.

## Fuentes de datos

- Tiempo: Open-Meteo (sin clave, gratuito para uso no comercial).
- Partidos y UFC: TheSportsDB (clave gratuita 123).
- Festivos de años sin datos oficiales: Nager.Date.
- Calendario escolar: BOCM, curso 2026-2027.
- Festivos: BOCM y Ayuntamiento de Madrid.
- Eventos: calendarios oficiales de LaLiga, UEFA, UFC, Mutua Madrid Open y Maratón de Madrid (a 7 de octubre de 2026).
- Santoral: orientativo, según el calendario católico y la tradición española; puede variar entre calendarios.
