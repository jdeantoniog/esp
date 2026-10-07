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
     avisar: true -> aviso arriba los días previos (ver avisoPrevioDias).
     confeti: true -> confeti en el aviso grande de ese día.
     nombre: cómo aparece en la cuenta atrás (si no, se usa "lista" o el texto).          */
  avisoPrevioDias: 3,
  // Aviso grande a pantalla completa al abrir la página en un día con mensaje especial
  aviso: { activo: true, segundos: 5 },
  mensajesEspeciales: [
    { fecha: "01-01", nombre: "Año Nuevo", texto: "¡Feliz Año Nuevo! Un beso cariño, ¡qué pena que no estés aquí!" },
    { fecha: "01-06", nombre: "Reyes Magos", texto: "¡Felices Reyes Magos!" },
    { fecha: "02-28", texto: "¡Feliz cumpleaños Carlotilla!", lista: "Cumpleaños Carlota", confeti: true },
    { fecha: "04-05", texto: "¡Cumpleaños de Celia!", lista: "Cumpleaños de Celia", avisar: true, confeti: true },
    { fecha: "05-16", texto: "¡Cumple de Yeya!", lista: "Cumpleaños de Yeya", avisar: true, confeti: true },
    { fecha: "07-18", texto: "¡Cumple de papi!", lista: "Cumpleaños de papi", avisar: true, confeti: true },
    { fecha: "09-27", texto: "¡Felicita a mamá!", lista: "Cumpleaños de mamá", avisar: true, confeti: true },
    { fecha: "12-25", nombre: "Navidad", texto: "¡Feliz Navidad Carlotis! ¡Te quiero cariño!" }
  ],

  /* ---------- Cuenta atrás (debajo de la previsión) ----------
     Muestra las próximas fechas de mensajesEspeciales: como máximo maxEventos,
     y solo si caen dentro de maxDias. */
  cuentaAtras: { maxEventos: 3, maxDias: 365 },

  /* ---------- Expresiones útiles ----------
     Cuántas se muestran cada día (2 columnas de 6). Rotan solas a medianoche de Madrid.
     La lista está en palabras.js (125 por estación). */
  palabrasPorDia: 12,

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
     Los cumpleaños salen de mensajesEspeciales (los que tienen "lista").        */
  mostrarFechas: 6,
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
      { regla: { mes: 10, diaSemana: 0, orden: -1 }, nombre: "Cambio de hora: a las 3:00 serán las 2:00" },
      { fecha: "10-31", nombre: "Halloween" },
      { fecha: "11-01", nombre: "Todos los Santos" },
      { fecha: "12-06", nombre: "Día de la Constitución" },
      { regla: { mes: 11, diaSemana: 4, orden: 4, desplazamiento: 1 }, nombre: "Black Friday" },
      { fecha: "12-22", nombre: "Sorteo de la Lotería de Navidad" },
      { fecha: "12-24", nombre: "Nochebuena" },
      { fecha: "12-28", nombre: "Día de los Santos Inocentes" },
      { fecha: "12-31", nombre: "Nochevieja" }
    ]
  }
};
