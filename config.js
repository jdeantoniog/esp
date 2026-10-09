/* =============================================================
   CONFIGURACIÓN DE LA PÁGINA (versión España)
   Edita solo este archivo para cambiar ciudades, fechas o textos.
   - El orden de cada lista es el orden en pantalla.
   - Coordenadas: Google Maps, clic derecho sobre el punto, copiar.
   - Fechas siempre en formato "AAAA-MM-DD".
   - Respeta comas y comillas: un error aquí deja la página en blanco.
   ============================================================= */

window.CONFIG = {
  titulo: "Inicio",   // solo se ve en la pestaña y en el icono de la pantalla de inicio

  /* ---------- Mensajes especiales (sustituyen a la frase del día) ----------
     Todas las fechas se evalúan en hora de Madrid.
     fecha: "MM-DD"       -> se repite cada año
     fecha: "AAAA-MM-DD"  -> solo ese día concreto
     regla: festivos que cambian de día cada año
            { mes, diaSemana (0 domingo, 1 lunes ... 6 sábado), orden (1 a 5, o -1 = último) }
     lista: texto para "Próximas fechas" (si no se pone, no aparece en la lista).
     LOS CUMPLEAÑOS VAN EN cumples.js (una línea por persona).
     avisar: true -> aviso arriba los días previos (ver avisoPrevioDias).
     confeti: true -> confeti en el aviso grande de ese día.          */
  avisoPrevioDias: 3,
  // Aviso grande a pantalla completa al abrir la página en un día con mensaje especial
  aviso: { activo: true, segundos: 5 },
  mensajesEspeciales: [
    { fecha: "01-01", nombre: "Año Nuevo", texto: "¡Feliz Año Nuevo! Un beso cariño, ¡qué pena que no estés aquí!" },
    { fecha: "01-06", nombre: "Reyes Magos", texto: "¡Felices Reyes Magos!" },
    { fecha: "12-25", nombre: "Navidad", texto: "¡Feliz Navidad Carlotis! ¡Te quiero cariño!" }
  ],

  /* ---------- Expresiones útiles ----------
     Cuántas se muestran cada día (2 columnas de 10). Rotan solas a medianoche de Madrid.
     La lista está en palabras.js: 2.000 en bloques temáticos, se mezclan un poco de cada uno. */
  palabrasPorDia: 20,

  /* ---------- Tiempo (una tarjeta por lugar) ----------
     Hoy hora a hora + los "dias" siguientes a partir de mañana (de 1 a 15). */
  detalles: [
    {
      nombre: "Madrid (Ciudad Lineal)",
      lat: 40.4466, lon: -3.6510,
      zonaHoraria: "Europe/Madrid",
      unidad: "celsius",
      mostrarAmbasUnidades: false,
      dias: 6
    }
  ],

  /* ---------- Conversor ----------
     Moneda frente al dólar. tasaRespaldo: euros por 1 dólar, solo si no hay conexión
     ni tasa guardada en el navegador. Revísala de vez en cuando. */
  moneda: { codigo: "EUR", simbolo: "€", nombre: "Euros", tasaRespaldo: 0.87 },

  /* ---------- Reloj ---------- */
  espana: {
    zonaHoraria: "Europe/Madrid",
    ciudadReloj: "Madrid"
  },

  /* ---------- Calendario y próximas fechas ----------
     Una sola fuente para el calendario y para "Próximas fechas".
     festivos: oficiales por año (BOE / BOCM / Ayuntamiento de Madrid).
               ambito: "Nacional", "Comunidad de Madrid" o "Madrid capital".
               provisional: true -> pendiente de aprobación oficial.
     Si un año no está en "festivos", se marcan los festivos habituales
     como "previstos" hasta que se añadan los oficiales.
     senalados: días clave que no son festivos.
       fecha: "MM-DD" (cada año) · regla: { mes, diaSemana, orden, desplazamiento }
       pascua: días respecto al Domingo de Resurrección (-47 = martes de Carnaval)
     eventos: citas con fecha concreta de un año (deporte, Madrid, cultura).
       fecha y, si dura varios días, hasta: "AAAA-MM-DD" · categoria · nota
       provisional: true -> fecha aún sin confirmar del todo.
       Revisarlos de vez en cuando: el deporte cambia fechas y horarios.
     Los cumpleaños salen de cumples.js.        */
  // Próximas fechas con cuenta atrás: todo lo de los próximos proximasFechasDias días;
  // si son menos de mostrarFechas, se completa con las siguientes.
  proximasFechasDias: 31,
  mostrarFechas: 12,
  // Categorías de eventos que solo salen en el calendario, no en "Próximas fechas"
  proximasFechasExcluir: ["Fútbol", "UFC"],

  /* ---------- Datos online (se guardan en el navegador; si fallan, se usa config.js) ----------
     festivos: si un año no está en calendario.festivos, se piden a Nager.Date
               (nacionales + Comunidad de Madrid). Los locales de Madrid se marcan como previstos.
     deportes: próximos partidos de los equipos y veladas UFC desde TheSportsDB (clave gratuita 123).
               Solo aparecen en el calendario. Si el id de un equipo no funciona, se busca por nombre. */
  online: {
    festivos: true,
    deportes: {
      activo: true,
      clave: "123",
      horasCache: 12,
      equipos: [
        { nombre: "Real Madrid", id: "133738", buscar: "Real Madrid" },
        { nombre: "Barcelona", id: "133739", buscar: "Barcelona" },
        { nombre: "Atlético de Madrid", id: "133729", buscar: "Atletico Madrid" }
      ],
      ufcLiga: "4443"
    }
  },
  calendario: {
    festivos: {
      // Decreto 75/2025 (BOCM 25/09/2025) + Ayuntamiento de Madrid (pleno 30/09/2025)
      "2026": [
        { fecha: "2026-01-01", nombre: "Año Nuevo", ambito: "Nacional" },
        { fecha: "2026-01-06", nombre: "Epifanía del Señor (Reyes)", ambito: "Nacional" },
        { fecha: "2026-04-02", nombre: "Jueves Santo", ambito: "Comunidad de Madrid" },
        { fecha: "2026-04-03", nombre: "Viernes Santo", ambito: "Nacional" },
        { fecha: "2026-05-01", nombre: "Fiesta del Trabajo", ambito: "Nacional" },
        { fecha: "2026-05-02", nombre: "Fiesta de la Comunidad de Madrid", ambito: "Comunidad de Madrid" },
        { fecha: "2026-05-15", nombre: "San Isidro Labrador", ambito: "Madrid capital" },
        { fecha: "2026-08-15", nombre: "Asunción de la Virgen", ambito: "Nacional" },
        { fecha: "2026-10-12", nombre: "Fiesta Nacional de España", ambito: "Nacional" },
        { fecha: "2026-11-02", nombre: "Todos los Santos (traslado)", ambito: "Comunidad de Madrid" },
        { fecha: "2026-11-09", nombre: "Nuestra Señora de la Almudena", ambito: "Madrid capital" },
        { fecha: "2026-12-07", nombre: "Día de la Constitución (traslado)", ambito: "Comunidad de Madrid" },
        { fecha: "2026-12-08", nombre: "Inmaculada Concepción", ambito: "Nacional" },
        { fecha: "2026-12-25", nombre: "Navidad", ambito: "Nacional" }
      ],
      // Decreto 82/2026 (BOCM 01/10/2026). Festivos locales de Madrid capital aún sin aprobar.
      "2027": [
        { fecha: "2027-01-01", nombre: "Año Nuevo", ambito: "Nacional" },
        { fecha: "2027-01-06", nombre: "Epifanía del Señor (Reyes)", ambito: "Nacional" },
        { fecha: "2027-03-19", nombre: "San José", ambito: "Comunidad de Madrid" },
        { fecha: "2027-03-25", nombre: "Jueves Santo", ambito: "Comunidad de Madrid" },
        { fecha: "2027-03-26", nombre: "Viernes Santo", ambito: "Nacional" },
        { fecha: "2027-05-01", nombre: "Fiesta del Trabajo", ambito: "Nacional" },
        { fecha: "2027-05-15", nombre: "San Isidro Labrador", ambito: "Madrid capital", provisional: true },
        { fecha: "2027-08-16", nombre: "Asunción de la Virgen (traslado)", ambito: "Comunidad de Madrid" },
        { fecha: "2027-10-12", nombre: "Fiesta Nacional de España", ambito: "Nacional" },
        { fecha: "2027-11-01", nombre: "Todos los Santos", ambito: "Nacional" },
        { fecha: "2027-11-09", nombre: "Nuestra Señora de la Almudena", ambito: "Madrid capital", provisional: true },
        { fecha: "2027-12-06", nombre: "Día de la Constitución", ambito: "Nacional" },
        { fecha: "2027-12-08", nombre: "Inmaculada Concepción", ambito: "Nacional" },
        { fecha: "2027-12-25", nombre: "Navidad", ambito: "Nacional" }
      ]
    },
    senalados: [
      { fecha: "01-05", nombre: "Cabalgata de Reyes" },
      { fecha: "01-06", nombre: "Sorteo de la Lotería del Niño" },
      { fecha: "01-07", nombre: "Empiezan las rebajas de invierno" },
      { fecha: "02-14", nombre: "San Valentín" },
      { pascua: -47, nombre: "Martes de Carnaval" },
      { pascua: -46, nombre: "Miércoles de Ceniza" },
      { fecha: "03-08", nombre: "Día Internacional de la Mujer" },
      { fecha: "03-19", nombre: "Día del Padre" },
      { regla: { mes: 3, diaSemana: 0, orden: -1 }, nombre: "Cambio de hora: a las 2:00 serán las 3:00" },
      { pascua: -7, nombre: "Domingo de Ramos" },
      { pascua: 0, nombre: "Domingo de Resurrección" },
      { fecha: "04-23", nombre: "Día del Libro" },
      { fecha: "05-02", nombre: "Fiesta de la Comunidad de Madrid" },
      { regla: { mes: 5, diaSemana: 0, orden: 1 }, nombre: "Día de la Madre" },
      { pascua: 60, nombre: "Corpus Christi" },
      { fecha: "06-23", nombre: "Noche de San Juan" },
      { fecha: "07-01", nombre: "Empiezan las rebajas de verano" },
      { fecha: "08-07", nombre: "Verbena de San Cayetano" },
      { fecha: "08-10", nombre: "Verbena de San Lorenzo" },
      { fecha: "08-15", nombre: "Fiestas de la Virgen de la Paloma" },
      { regla: { mes: 10, diaSemana: 0, orden: -1 }, nombre: "Cambio de hora: a las 3:00 serán las 2:00" },
      { fecha: "10-31", nombre: "Halloween" },
      { fecha: "11-01", nombre: "Todos los Santos" },
      { fecha: "12-06", nombre: "Día de la Constitución" },
      { regla: { mes: 11, diaSemana: 4, orden: 4, desplazamiento: 1 }, nombre: "Black Friday" },
      { fecha: "12-22", nombre: "Sorteo de la Lotería de Navidad" },
      { fecha: "12-24", nombre: "Nochebuena" },
      { fecha: "12-28", nombre: "Día de los Santos Inocentes" },
      { fecha: "12-31", nombre: "Nochevieja" },
      { fecha: "12-31", nombre: "San Silvestre Vallecana" },
      // Recordatorios de mantenimiento (la página también avisa sola si falta algo)
      { fecha: "06-15", nombre: "Recordatorio: añadir el calendario escolar del curso siguiente" },
      { fecha: "10-05", nombre: "Recordatorio: añadir los festivos del año siguiente (BOCM)" }
    ],
    // Calendario escolar de la Comunidad de Madrid, curso 2026-2027 (BOCM). Se marca en morado.
    escolar: [
      { fecha: "2026-12-23", hasta: "2027-01-10", nombre: "Vacaciones escolares de Navidad", nota: "vuelta a clase el lunes 11 de enero" },
      { fecha: "2027-02-12", nombre: "Día no lectivo", nota: "colegios e institutos" },
      { fecha: "2027-02-15", nombre: "Día no lectivo", nota: "colegios e institutos" },
      { fecha: "2027-03-19", hasta: "2027-03-29", nombre: "Vacaciones escolares de Semana Santa", nota: "vuelta a clase el martes 30 de marzo" },
      { fecha: "2027-06-18", nombre: "Último día de clase", nota: "Infantil, Primaria, ESO, Bachillerato y FP" }
    ],
    eventos: [
      // UFC (fuente: calendario oficial publicado a 7 oct 2026). Eventos en EE. UU./Canadá: en España, madrugada del domingo.
      { fecha: "2026-10-10", nombre: "UFC Fight Night: Allen vs. Duncan", categoria: "UFC", nota: "Las Vegas · madrugada del domingo en España" },
      { fecha: "2026-10-17", nombre: "UFC Fight Night: Buckley vs. Malott", categoria: "UFC", nota: "Edmonton · madrugada del domingo en España" },
      { fecha: "2026-10-24", nombre: "UFC 333: Volkanovski vs. Evloev", categoria: "UFC", nota: "Abu Dabi · título pluma" },
      { fecha: "2026-10-31", nombre: "UFC Fight Night: Moicano vs. Nolan", categoria: "UFC", nota: "Las Vegas · madrugada del domingo en España" },
      { fecha: "2026-11-07", nombre: "UFC Fight Night: Bonfim vs. Brady", categoria: "UFC", nota: "Las Vegas · madrugada del domingo en España" },
      { fecha: "2026-11-14", nombre: "UFC 334: Gane vs. Hokit", categoria: "UFC", nota: "Madison Square Garden, Nueva York · título pesado" },
      { fecha: "2026-11-21", nombre: "UFC Fight Night: Prochazka vs. Stirling", categoria: "UFC", nota: "Doha" },
      { fecha: "2026-12-12", nombre: "UFC 335: Oliveira vs. Lopes", categoria: "UFC", nota: "Las Vegas · madrugada del domingo en España" },
      // Fútbol: LaLiga fija día y hora pocas semanas antes; la fecha es la del fin de semana de la jornada
      { fecha: "2026-10-25", nombre: "Clásico: Barcelona - Real Madrid", categoria: "Fútbol", nota: "LaLiga, jornada 10 · fin de semana 24-25 oct", provisional: true },
      { fecha: "2026-11-08", nombre: "Atlético de Madrid - Barcelona", categoria: "Fútbol", nota: "LaLiga, jornada 12", provisional: true },
      { fecha: "2027-02-07", nombre: "Barcelona - Atlético de Madrid", categoria: "Fútbol", nota: "LaLiga, jornada 23", provisional: true },
      { fecha: "2027-04-04", nombre: "Derbi: Real Madrid - Atlético de Madrid", categoria: "Fútbol", nota: "LaLiga, jornada 30 · fin de semana 3-4 abr", provisional: true },
      { fecha: "2027-05-09", nombre: "Clásico: Real Madrid - Barcelona", categoria: "Fútbol", nota: "LaLiga, jornada 35 · fin de semana 8-9 may", provisional: true },
      { fecha: "2027-05-30", nombre: "Última jornada de LaLiga", categoria: "Fútbol" },
      { fecha: "2027-06-05", nombre: "Final de la Champions League", categoria: "Fútbol", nota: "Estadio Metropolitano, Madrid" },
      // Madrid
      { fecha: "2027-04-19", hasta: "2027-05-02", nombre: "Mutua Madrid Open de tenis", categoria: "Tenis", nota: "Caja Mágica" },
      { fecha: "2027-04-25", nombre: "Maratón de Madrid", categoria: "Madrid", nota: "Zurich Rock 'n' Roll Running Series · cortes de tráfico en el centro" }
    ]
  }
};
