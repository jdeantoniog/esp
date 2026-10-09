# Inicio (solo España)

Página de inicio de un solo país (Madrid). Usa el **mismo código** (`index.html`) que el resto de versiones: al no tener bloque `usa` en `config.js`, se muestra sin comparaciones con otro país.

## Orden en pantalla

1. Frase del día (o mensaje especial y aviso de cumpleaños).
2. Hora, día y tiempo actual de Madrid (sin bandera; se vuelve a poner con `mostrarBandera: true`).
3. Tiempo en Madrid (Ciudad Lineal): hoy, hora a hora y 6 días.
4. **Tiempo en otro lugar**: buscador de municipios de España y ciudades de todo el mundo, y botón **Mi ubicación**. El lugar elegido se recuerda en cada móvil; **Quitar** lo borra.
5. **Avisos meteorológicos** oficiales de AEMET para Madrid capital (zona "Metropolitana y Henares").
6. Calendario: festivos de Madrid, cole, cumpleaños, fútbol (Real Madrid, Barça, Atlético), UFC, eventos de Madrid, días señalados, cambios de hora (calculados solos) y santoral.
7. Próximas fechas con cuenta atrás (el fútbol y la UFC solo salen en el calendario).
8. **Sol y aire**: índice UV y calidad del aire de Madrid y del lugar buscado.
9. Expresiones útiles (inglés). Las ya marcadas como aprendidas se conservan.
10. Conversor: dólares/euros y medidas de EE. UU.
11. **Noticias políticas** de España (El País y El Mundo).

El orden de 5 a 11 se cambia en `config.js` > `ordenSecciones`.

## Qué es online

| Qué | Fuente | Si falla |
|---|---|---|
| Tiempo, Sol y aire | Open-Meteo | Última copia guardada |
| Buscador de lugares | Open-Meteo Geocoding | Mensaje "No se ha podido buscar" |
| Mi ubicación | Ubicación del móvil (con permiso) + nombre del sitio con BigDataCloud | Si no hay nombre, sale "Tu ubicación" |
| Avisos meteorológicos | MeteoAlarm (avisos oficiales de AEMET), vía servicio intermedio | Última copia o mensaje de error |
| Noticias | RSS de El País y El Mundo, vía servicio intermedio | Última copia; el pie dice qué fuente no responde |
| Fútbol y UFC | TheSportsDB | Los partidos escritos en `config.js` |
| Tipo de cambio | BCE (Frankfurter) o ExchangeRate-API | Última tasa guardada |
| Festivos de años no cargados | Nager.Date | Festivos habituales previstos |

La ubicación no se guarda en ningún servidor: las coordenadas se envían a Open-Meteo (para el tiempo) y a BigDataCloud (para el nombre del sitio).

## Mantenimiento (la página avisa en rojo)

- Festivos de Madrid del año siguiente (BOCM), desde octubre.
- Calendario escolar del curso siguiente.
- Eventos futuros en `config.js`.

## Cambiar la zona de avisos

En `config.js` > `avisos.zonas`, el texto de `buscar` es el nombre de la zona de aviso de AEMET (por ejemplo "Sierra de Madrid", "Litoral cántabro"). Se pueden poner varias zonas.
