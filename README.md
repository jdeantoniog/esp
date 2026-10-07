# Inicio (versión España)

Página de inicio estática. Orden en pantalla:

1. Frase del día y hora en Madrid.
2. Tiempo en Madrid: hoy (máxima, mínima y resumen), hoy hora a hora y los 6 días siguientes desde mañana.
3. Cuenta atrás (3 próximos eventos).
4. Expresiones útiles en inglés de la época del año (12 al día, 2 columnas).
5. Calendario mensual con festivos, cumpleaños y días señalados; al tocar un día muestra lo marcado y el santoral.
6. Próximas fechas (sale de los mismos datos que el calendario).
7. Conversor de unidades.

## Archivos

| Archivo | Para qué sirve | ¿Se edita? |
|---|---|---|
| `index.html` | La página | No hace falta |
| `config.js` | Tiempo, cumpleaños, mensajes, festivos y días señalados | Sí |
| `palabras.js` | Frases del día y 500 expresiones (125 por estación) | Solo para añadir o quitar expresiones |
| `santoral.js` | Santo de cada día (366 días) | Rara vez |

Sube los cuatro archivos. Si falta `palabras.js` o `santoral.js`, la página carga igual pero sin expresiones o sin santoral, y no avisa.

## Mantenimiento anual (importante)

Los festivos oficiales están cargados para **2026 y 2027** en `config.js` > `calendario.festivos`:

- 2026: Decreto 75/2025 (BOCM 25/09/2025) y festivos locales del Ayuntamiento de Madrid.
- 2027: Decreto 82/2026 (BOCM 01/10/2026). San Isidro y la Almudena están marcados como pendientes hasta que el Ayuntamiento apruebe los festivos locales de 2027. Cuando se publiquen, quita `provisional: true` o corrige la fecha.

Para años sin calendario cargado, la página marca los festivos habituales como "previstos" (borde rojo, sin relleno). Cada otoño, cuando la Comunidad de Madrid publique el calendario del año siguiente, añade un bloque `"2028": [ ... ]` copiando el formato de 2027.

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
- Expresiones por día: `palabrasPorDia` (12 = 2 columnas de 6).
- Cumpleaños: `mensajesEspeciales` (los que llevan `lista` salen en el calendario).
- Días señalados: `calendario.senalados`.
- Si la página queda en blanco tras un cambio, falta una coma o una comilla.
- GitHub Pages puede tardar hasta 10 minutos en mostrar los cambios.

## Fuentes de datos

- Tiempo: Open-Meteo (sin clave, gratuito para uso no comercial).
- Festivos: BOCM y Ayuntamiento de Madrid.
- Santoral: orientativo, según el calendario católico y la tradición española; puede variar entre calendarios.
