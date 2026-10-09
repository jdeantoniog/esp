> Documento histórico del traspaso (octubre de 2026). La página ya usa el código común: ver README.md.

# Traspaso: página "Inicio" (versión España)

Paquete para continuar el desarrollo en otra conversación y unificarlo con otra versión.
Estado a 8 de octubre de 2026.

## Contenido del paquete

| Archivo | Contenido | ¿Se edita? |
|---|---|---|
| `index.html` | Página, estilos y toda la lógica | No hace falta |
| `config.js` | Tiempo, mensajes especiales, festivos, días señalados, calendario escolar, eventos, fuentes online y ajustes | Sí |
| `cumples.js` | 25 cumpleaños, una línea por persona: `["MM-DD", "Nombre"]` | Sí |
| `palabras.js` | 30 frases del día y 2.000 expresiones en 23 bloques | Rara vez |
| `santoral.js` | Santoral de los 366 días | Rara vez |
| `README.md` | Publicación, mantenimiento y fuentes | No |
| `TRASPASO.md` | Este documento | No |

Orden de carga de los scripts: `config.js`, `cumples.js`, `palabras.js`, `santoral.js` y después el script principal de `index.html`.

## 1. Objetivo

Versión solo España de la página de inicio personal de Carlota (la original era para su estancia en West Branch, Michigan). Página estática en GitHub Pages, usada desde el iPhone como icono de la pantalla de inicio. Criterio general: automatizar todo lo posible y, para cada dato online, tener respaldo en `config.js` y avisos cuando algo caduque.

## 2. Orden de la página

1. Frase del día (EN/ES) o mensaje especial
2. Reloj de Madrid (sin bandera)
3. Tiempo en Madrid (Ciudad Lineal): línea "Hoy" + hora a hora (00–23) + 6 días desde mañana en 3 columnas por 2 filas
4. Calendario mensual con detalle del día y santoral
5. Próximas fechas con cuenta atrás en vivo, en 2 columnas
6. Expresiones útiles: 20 al día en 2 columnas de 10, con modo repaso
7. Conversor: dólares/euros y medidas de EE. UU. con botones (actualizado después del traspaso)
8. Pie: "Actualizado a las…" y botón "Actualizar ahora"

## 3. Decisiones tomadas

| Tema | Decisión |
|---|---|
| Contenido de EE. UU. | Eliminado: reloj de West Branch, hora para llamar, avisos NWS, auroras, luna, cuenta con impuesto y propina, tiempo de EE. UU., festivos de EE. UU., barra "Vuelta a España", gasolina $/galón y bandera |
| Tiempo | Solo Madrid. Sin UV, calidad del aire, lista de ciudades ni línea de luz aparte (las horas de luz van en la línea "Hoy") |
| Próximos días | 6 días desde mañana, siempre en 3x2, compactados para 320 px |
| Calendario | Semana de lunes a domingo, flechas de mes y botón "Hoy" |
| Próximas fechas y cuenta atrás | Unificadas en una sola sección |
| Fútbol y UFC | Solo en el calendario, nunca en Próximas fechas |
| Expresiones | 2.000 en 23 bloques temáticos, mezcladas sin depender de la estación |
| Cumpleaños | Archivo propio, `cumples.js`. Son apodos: privacidad validada por el usuario |

## 4. Reglas de negocio

**Festivos (prioridad)**
1. `config.js` > `calendario.festivos[año]`, oficial (BOCM y Ayuntamiento): relleno rojo.
2. Nager.Date (nacionales y ES-MD), solo si el año no está en config: borde rojo, "pendiente de confirmar con el BOCM".
3. Festivos habituales calculados, con Semana Santa por algoritmo de Pascua: borde rojo, "previsto".

Los locales de Madrid capital (San Isidro y la Almudena) solo vienen de config; si faltan, se marcan como previstos.

**Marcas del calendario**

| Tipo | Color | Origen | Regla |
|---|---|---|---|
| Festivo | Rojo | Prioridad anterior | Ámbito: Nacional, Comunidad de Madrid o Madrid capital |
| Familia | Verde | `cumples.js` | "¡Felicita a X!", confeti y aviso 3 días antes; Carlota con `{ avisar: false }` |
| Escolar | Morado | `calendario.escolar` | Rangos; en Próximas fechas aparecen una vez, el día de inicio |
| Evento | Azul | `calendario.eventos` y TheSportsDB | Un evento online sustituye al de config si coincide en ±1 día con los mismos equipos (o es UFC) |
| Día señalado | Dorado | `calendario.senalados` (fecha fija, regla por día de la semana o ligada a Pascua) | No se repite si ese día ya es festivo con el mismo nombre |

**Próximas fechas:** todas las de los próximos 31 días; si son menos de 12, se completa hasta 12. Cuenta atrás cada segundo hasta la medianoche de Madrid del día del evento. "¡Es hoy!" el mismo día y "En curso" en rangos ya empezados. Se recalcula sola a medianoche.

**Rotaciones:** la frase del día y las expresiones cambian a medianoche de Madrid. Las expresiones se reparten por turnos entre bloques; las marcadas como aprendidas salen de la rotación.

**Zona horaria:** todo en hora de Madrid. Partidos y UFC se convierten de UTC a hora de España.

**Caché (localStorage, prefijo `inicio:v1:`)**

| Dato | Validez | Sin conexión |
|---|---|---|
| Tiempo | Se renueva en cada carga | "Previsión guardada hace X" |
| Partidos y UFC | 12 h | Copia guardada; si no hay, config |
| Festivos online | 7 días | Calculados |
| Aprendidas y modo repaso | Permanente | Por dispositivo, no se sincronizan |

**Avisos automáticos (rojo, en el calendario):**
- Faltan los festivos del año en curso.
- Desde octubre, faltan los del año siguiente.
- No hay calendario escolar futuro.
- No quedan eventos de Madrid futuros.

Recordatorios fijos en el calendario: 15 de junio (calendario escolar) y 5 de octubre (festivos).

## 5. Claves de `config.js`

| Clave | Valor |
|---|---|
| `detalles[0].dias` | 6 |
| `palabrasPorDia` | 20 |
| `proximasFechasDias` / `mostrarFechas` | 31 / 12 |
| `proximasFechasExcluir` | ["Fútbol", "UFC"] |
| `avisoPrevioDias` | 3 |
| `online.festivos` | true |
| `online.deportes` | Clave 123, caché de 12 h. Equipos: Real Madrid 133738, Barcelona 133739, Atlético 133729 (si el id falla, búsqueda por nombre). Liga UFC 4443 |

**Funciones principales de `index.html`:**
- Tiempo: `renderWeather`, `loadDetail`.
- Calendario: `marksForYear`, `renderCalendar`, `renderCalDetail`, `renderCalStatus`.
- Datos online: `loadOnlineHolidays`, `loadOnlineSports`, `tsdbTeamEvents`.
- Próximas fechas: `renderDates`, `tickDates`.
- Expresiones: `renderExpr`, `dailySlice`.
- Fechas: `easterSunday`, `nthWeekday`, `midnightIn`, `breakdown`.
- Almacenamiento: `store`, `load`.

## 6. Fuentes

| Dato | Fuente | Confianza |
|---|---|---|
| Festivos 2026 | Decreto 75/2025 (BOCM 25/09/2025) y Ayuntamiento de Madrid | Alta |
| Festivos 2027 | Decreto 82/2026 (BOCM 01/10/2026) | Alta (locales de Madrid: pendientes) |
| Calendario escolar 2026-27 | Comunidad de Madrid | Alta |
| LaLiga 2026-27 | Calendario oficial (día y hora por confirmar) | Media |
| Final de la Champions 2027 | UEFA: 5 de junio, Metropolitano | Alta |
| UFC (octubre a diciembre de 2026) | Calendario oficial a 7 de octubre de 2026 | Alta en fechas |
| Mutua Madrid Open y Maratón 2027 | Del 19 de abril al 2 de mayo, y 25 de abril | Alta |
| Tiempo | Open-Meteo | Alta |
| Partidos y UFC online | TheSportsDB | Media: no verificado en producción |
| Festivos de años sin datos oficiales | Nager.Date | Media: no garantiza traslados |
| Santoral | Compilación propia revisada | Media: orientativo |
| Expresiones | Redacción propia, sin duplicados | Media-Alta |

## 7. Pendientes

| Prioridad | Pendiente | Cuándo |
|---|---|---|
| Alta | Verificar la línea de estado del calendario en producción ("Partidos y UFC online hace X") | Al publicar |
| Alta | Probar la caché en el iPhone: abrir con conexión y después en modo avión | Al publicar |
| Media | Quitar `provisional: true` de San Isidro y la Almudena 2027 | Cuando los apruebe el Ayuntamiento |
| Media | Calendario escolar 2027-28 | Junio de 2027 (lo avisa la página) |
| Media | Festivos de 2028 | Octubre de 2027 (lo avisa la página) |
| Media | Eventos de Madrid posteriores a junio de 2027 | Lo avisa la página |
| Baja | Frases del día sobre la distancia y texto de Año Nuevo | — |
| Baja | Colores dorado y negro (instituto de Michigan) | — |

**Propuestas no aplicadas:**
- Exportar eventos al calendario del móvil (.ics).
- Resultados de partidos pasados.
- Sincronizar las aprendidas entre dispositivos.
- Proveedor de partidos alternativo.
- Edad en cumpleaños (`nacio`).
- Botón "Felicitar por WhatsApp".
- Excluir los días señalados menores de Próximas fechas.
- Mostrar horas y segundos solo en los próximos 7 días.
- Resaltar las fechas de la semana.

**Limitación de las pruebas:** todo se ha probado en navegador con respuestas simuladas de Open-Meteo, TheSportsDB y Nager.Date. La lógica está verificada; el comportamiento real de las fuentes online queda pendiente de verificar en producción.

## 8. Notas para unificar con otra versión

- La lógica de fechas es una **fuente única**: calendario y Próximas fechas salen de `marksForYear()`. Si la otra versión tiene festivos, eventos o cumpleaños propios, conviene volcarlos en `config.js` y `cumples.js`, no duplicar listas.
- Los mensajes especiales que no son cumpleaños (Año Nuevo, Reyes, Navidad) siguen en `config.js` > `mensajesEspeciales`. Los cumpleaños se fusionan desde `cumples.js` al arrancar.
- Comparar antes de fusionar: estructura de `config.js` (claves y tipos), formato de `palabras.js` (`window.FRASES` y `window.EXPRESIONES` por bloques), claves de localStorage (`inicio:v1:`) e ids de elementos HTML que use el código.
- En caso de conflicto, decidir para cada sección cuál de las dos versiones manda antes de mezclar código.
