/* =============================================================
   CONFIGURACIÓN · INICIO (solo España)
   Edita solo este archivo para cambiar lugares, fechas o textos.
   - Fechas siempre "AAAA-MM-DD" (o "MM-DD" si se repite cada año).
   - Respeta comas y comillas: un error aquí deja la página en blanco.
   - Mismo código que las demás versiones: al no haber bloque "usa", la página es de un solo país.
   ============================================================= */

window.CONFIG = {
  titulo: "Inicio",
  version: "es",                 // identificador de esta web: separa su caché de las otras versiones del mismo dominio
  zonaPrincipal: "pais",

  /* ---------- España ---------- */
  pais: {
    nombre: "España",
    bandera: "ES",                 // se usa para los colores del calendario y del confeti
    mostrarBandera: false,         // sin bandera en la cabecera
    ciudadReloj: "Madrid",
    zonaHoraria: "Europe/Madrid",
    // Tarjeta fija del tiempo (y de "Sol y aire")
    tiempo: { nombre: "Madrid (Ciudad Lineal)", lat: 40.4466, lon: -3.651 },
    moneda: { codigo: "EUR", simbolo: "€", nombre: "Euros", tasaRespaldo: 0.87 },
    festivosOnline: { pais: "ES", region: "ES-MD", ambitoNacional: "Nacional", ambitoRegion: "Comunidad de Madrid", confirmados: false },
    fuenteOficial: "BOCM",
    festivos: {
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
    festivosHabituales: [
      { fecha: "01-01", nombre: "Año Nuevo", ambito: "Nacional" },
      { fecha: "01-06", nombre: "Epifanía del Señor (Reyes)", ambito: "Nacional" },
      { pascua: -3, nombre: "Jueves Santo", ambito: "Comunidad de Madrid" },
      { pascua: -2, nombre: "Viernes Santo", ambito: "Nacional" },
      { fecha: "05-01", nombre: "Fiesta del Trabajo", ambito: "Nacional" },
      { fecha: "05-02", nombre: "Fiesta de la Comunidad de Madrid", ambito: "Comunidad de Madrid" },
      { fecha: "05-15", nombre: "San Isidro Labrador", ambito: "Madrid capital", soloConfig: true },
      { fecha: "08-15", nombre: "Asunción de la Virgen", ambito: "Nacional" },
      { fecha: "10-12", nombre: "Fiesta Nacional de España", ambito: "Nacional" },
      { fecha: "11-01", nombre: "Todos los Santos", ambito: "Nacional" },
      { fecha: "11-09", nombre: "Nuestra Señora de la Almudena", ambito: "Madrid capital", soloConfig: true },
      { fecha: "12-06", nombre: "Día de la Constitución", ambito: "Nacional" },
      { fecha: "12-08", nombre: "Inmaculada Concepción", ambito: "Nacional" },
      { fecha: "12-25", nombre: "Navidad", ambito: "Nacional" }
    ],
    // Los cambios de hora se calculan solos.
    senalados: [
      { fecha: "01-05", nombre: "Cabalgata de Reyes" },
      { fecha: "01-06", nombre: "Sorteo de la Lotería del Niño" },
      { fecha: "01-07", nombre: "Empiezan las rebajas de invierno" },
      { fecha: "02-14", nombre: "San Valentín" },
      { pascua: -47, nombre: "Martes de Carnaval" },
      { pascua: -46, nombre: "Miércoles de Ceniza" },
      { fecha: "03-08", nombre: "Día Internacional de la Mujer" },
      { fecha: "03-19", nombre: "Día del Padre" },
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
      { fecha: "10-31", nombre: "Halloween" },
      { fecha: "11-01", nombre: "Todos los Santos" },
      { fecha: "12-06", nombre: "Día de la Constitución" },
      { regla: { mes: 11, diaSemana: 4, orden: 4, desplazamiento: 1 }, nombre: "Black Friday" },
      { fecha: "12-22", nombre: "Sorteo de la Lotería de Navidad" },
      { fecha: "12-24", nombre: "Nochebuena" },
      { fecha: "12-28", nombre: "Día de los Santos Inocentes" },
      { fecha: "12-31", nombre: "Nochevieja" },
      { fecha: "12-31", nombre: "San Silvestre Vallecana" },
      { fecha: "06-15", nombre: "Recordatorio: añadir el calendario escolar del curso siguiente" },
      { fecha: "10-05", nombre: "Recordatorio: añadir los festivos del año siguiente (BOCM)" }
    ]
  },

  /* ---------- Tiempo ----------
     Además de Madrid, una tarjeta con buscador (municipios de España y ciudades de todo el mundo)
     y botón "Mi ubicación". El lugar elegido se recuerda en cada móvil. */
  buscadorTiempo: { activo: true },
  diasTiempo: 6,

  /* ---------- Mensajes especiales (sustituyen a la frase del día). Cumpleaños en cumples.js ---------- */
  avisoPrevioDias: 3,
  aviso: { activo: true, segundos: 5 },
  mensajesEspeciales: [
    { fecha: "01-01", nombre: "Año Nuevo", texto: "¡Feliz Año Nuevo! Un beso cariño, ¡qué pena que no estés aquí!" },
    { fecha: "01-06", nombre: "Reyes Magos", texto: "¡Felices Reyes Magos!" },
    { fecha: "12-25", nombre: "Navidad", texto: "¡Feliz Navidad Carlotis! ¡Te quiero cariño!" }
  ],

  /* ---------- Orden de las secciones (debajo del tiempo) ----------
     avisos, calendario, proximasFechas, solAire, expresiones, conversor, noticias. La que se quite no se muestra. */
  ordenSecciones: ["avisos", "calendario", "proximasFechas", "solAire", "expresiones", "conversor", "noticias"],

  palabrasPorDia: 20,
  proximasFechasDias: 31,
  mostrarFechas: 12,
  proximasFechasExcluir: ["Fútbol", "UFC"],

  /* ---------- Avisos meteorológicos oficiales (AEMET, vía MeteoAlarm) ----------
     zonas: nombre que se muestra y nombres de zona de aviso de AEMET a buscar.
     Madrid capital está en la zona "Metropolitana y Henares". */
  avisos: {
    feed: "https://feeds.meteoalarm.org/feeds/meteoalarm-legacy-atom-spain",
    minutosCache: 30,
    zonas: [
      { nombre: "Madrid capital", buscar: ["Metropolitana y Henares"] }
    ]
  },

  /* ---------- Noticias políticas (abajo del todo): RSS de medios de líneas editoriales distintas ---------- */
  noticias: {
    porPais: 10,
    minutosCache: 30,
    paises: [
      { nombre: "España", fuentes: [
        { nombre: "El País", rss: "https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/section/espana/portada" },
        { nombre: "El Mundo", rss: "https://e00-elmundo.uecdn.es/elmundo/rss/espana.xml" }
      ] }
    ]
  },

  /* ---------- Datos online (se guardan en el navegador; si fallan, se usa este archivo) ---------- */
  online: {
    festivos: true,
    deportes: {
      activo: true,
      clave: "123",
      horasCache: 12,
      equipos: [
        { nombre: "Real Madrid", id: "133738", buscar: "Real Madrid", deporte: "Soccer", coincide: ["Real Madrid"], categoria: "Fútbol" },
        { nombre: "Barcelona", id: "133739", buscar: "Barcelona", deporte: "Soccer", coincide: ["Barcelona"], categoria: "Fútbol" },
        { nombre: "Atlético de Madrid", id: "133729", buscar: "Atletico Madrid", deporte: "Soccer", coincide: ["Atletico Madrid", "Atlético de Madrid", "Atletico de Madrid"], categoria: "Fútbol" }
      ],
      // Ligas completas (todas sus próximas citas). filtro: palabra que debe aparecer en el evento
      ligas: [
        { id: "4443", categoria: "UFC", filtro: "ufc" }
      ]
    }
  },

  /* ---------- Calendario ---------- */
  calendario: {
    nombreEscolar: "Cole (Madrid)",
    escolar: [
      { fecha: "2026-12-23", hasta: "2027-01-10", nombre: "Vacaciones escolares de Navidad", nota: "vuelta a clase el lunes 11 de enero" },
      { fecha: "2027-02-12", nombre: "Día no lectivo", nota: "colegios e institutos" },
      { fecha: "2027-02-15", nombre: "Día no lectivo", nota: "colegios e institutos" },
      { fecha: "2027-03-19", hasta: "2027-03-29", nombre: "Vacaciones escolares de Semana Santa", nota: "vuelta a clase el martes 30 de marzo" },
      { fecha: "2027-06-18", nombre: "Último día de clase", nota: "Infantil, Primaria, ESO, Bachillerato y FP" }
    ],
    // hora: "HH:MM" en hora de España (opcional)
    eventos: [
      { fecha: "2026-10-10", nombre: "UFC Fight Night: Allen vs. Duncan", categoria: "UFC", nota: "Las Vegas · madrugada del domingo en España" },
      { fecha: "2026-10-17", nombre: "UFC Fight Night: Buckley vs. Malott", categoria: "UFC", nota: "Edmonton · madrugada del domingo en España" },
      { fecha: "2026-10-24", nombre: "UFC 333: Volkanovski vs. Evloev", categoria: "UFC", nota: "Abu Dabi · título pluma" },
      { fecha: "2026-10-31", nombre: "UFC Fight Night: Moicano vs. Nolan", categoria: "UFC", nota: "Las Vegas · madrugada del domingo en España" },
      { fecha: "2026-11-07", nombre: "UFC Fight Night: Bonfim vs. Brady", categoria: "UFC", nota: "Las Vegas · madrugada del domingo en España" },
      { fecha: "2026-11-14", nombre: "UFC 334: Gane vs. Hokit", categoria: "UFC", nota: "Madison Square Garden, Nueva York · título pesado" },
      { fecha: "2026-11-21", nombre: "UFC Fight Night: Prochazka vs. Stirling", categoria: "UFC", nota: "Doha" },
      { fecha: "2026-12-12", nombre: "UFC 335: Oliveira vs. Lopes", categoria: "UFC", nota: "Las Vegas · madrugada del domingo en España" },
      { fecha: "2026-10-25", nombre: "Clásico: Barcelona - Real Madrid", categoria: "Fútbol", nota: "LaLiga, jornada 10 · fin de semana 24-25 oct", provisional: true },
      { fecha: "2026-11-08", nombre: "Atlético de Madrid - Barcelona", categoria: "Fútbol", nota: "LaLiga, jornada 12", provisional: true },
      { fecha: "2027-02-07", nombre: "Barcelona - Atlético de Madrid", categoria: "Fútbol", nota: "LaLiga, jornada 23", provisional: true },
      { fecha: "2027-04-04", nombre: "Derbi: Real Madrid - Atlético de Madrid", categoria: "Fútbol", nota: "LaLiga, jornada 30 · fin de semana 3-4 abr", provisional: true },
      { fecha: "2027-05-09", nombre: "Clásico: Real Madrid - Barcelona", categoria: "Fútbol", nota: "LaLiga, jornada 35 · fin de semana 8-9 may", provisional: true },
      { fecha: "2027-05-30", nombre: "Última jornada de LaLiga", categoria: "Fútbol" },
      { fecha: "2027-06-05", nombre: "Final de la Champions League", categoria: "Fútbol", nota: "Estadio Metropolitano, Madrid" },
      { fecha: "2027-04-19", hasta: "2027-05-02", nombre: "Mutua Madrid Open de tenis", categoria: "Tenis", nota: "Caja Mágica" },
      { fecha: "2027-04-25", nombre: "Maratón de Madrid", categoria: "Madrid", nota: "Zurich Rock 'n' Roll Running Series · cortes de tráfico en el centro" }
    ]
  }
};
