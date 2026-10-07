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
    { fecha: "02-28", texto: "¡Feliz cumpleaños Carlotilla!", lista: "Tu cumpleaños", confeti: true },
    { fecha: "04-05", texto: "¡Cumpleaños de Celia!", lista: "Cumpleaños de Celia", avisar: true, confeti: true },
    { fecha: "05-16", texto: "¡Cumple de Yeya!", lista: "Cumpleaños de Yeya", avisar: true, confeti: true },
    { fecha: "07-18", texto: "¡Cumple de papi!", lista: "Cumpleaños de papi", avisar: true, confeti: true },
    { fecha: "09-27", texto: "¡Felicita a mamá!", lista: "Cumpleaños de mamá", avisar: true, confeti: true },
    { fecha: "12-25", nombre: "Navidad", texto: "¡Feliz Navidad Carlotis! ¡Te quiero cariño!" }
  ],

  /* ---------- Cuenta atrás (al final de la página) ----------
     Muestra todas las fechas de mensajesEspeciales que caen dentro de maxDias. */
  cuentaAtras: { maxDias: 365 },

  /* ---------- Palabras de la estación y vocabulario ----------
     Cuántas se muestran cada día (rotan solas a medianoche de Madrid). */
  palabrasPorDia: 6,

  /* ---------- Horas de luz (línea antes de "Próximos días") ---------- */
  luz: { nombre: "Madrid", lat: 40.4168, zonaHoraria: "Europe/Madrid" },

  /* ---------- Índice UV por hora y calidad del aire (un bloque por lugar) ----------
     Horas centradas en el mediodía solar de Madrid (hacia las 14:15 en verano, 13:15 en invierno).
     Calidad del aire con el índice europeo (EAQI). */
  uv: [
    {
      nombre: "Madrid (Ciudad Lineal)",
      lat: 40.4466, lon: -3.6510,
      zonaHoraria: "Europe/Madrid",
      horaInicio: 11, horaFin: 18
    }
  ],

  /* ---------- Previsión detallada (una tarjeta por lugar, en este orden) ---------- */
  detalles: [
    {
      nombre: "Madrid (Ciudad Lineal)",
      lat: 40.4466, lon: -3.6510,
      zonaHoraria: "Europe/Madrid",
      unidad: "celsius",
      mostrarAmbasUnidades: false,
      dias: 3
    }
  ],

  /* ---------- Tiempo ---------- */
  espana: {
    titulo: "España",
    zonaHoraria: "Europe/Madrid",
    ciudadReloj: "Madrid",
    unidad: "celsius",             // "celsius" o "fahrenheit"
    lugares: [
      { nombre: "Madrid",     lat: 40.4168, lon: -3.7038 },
      { nombre: "Estepona",   lat: 36.4276, lon: -5.1463 },
      { nombre: "Isla Canela", lat: 37.1765, lon: -7.3410 },
      { nombre: "Barcelona",  lat: 41.3874, lon:  2.1686 },
      // Estación de esquí (cota media). Para el pueblo de Taüll usa lat: 42.5197, lon: 0.8486
      { nombre: "Boí Taüll",  lat: 42.4770, lon:  0.8780 }
    ]
  },

  /* ---------- Festivos y fechas señaladas ----------
     pais: "ES" (España) u "Otro" (personales, avisos).
     Puedes añadir cumpleaños o fechas familiares con pais: "Otro".        */
  mostrarFechas: 6,
  fechas: [
    { fecha: "2026-10-12", pais: "ES", nombre: "Fiesta Nacional" },
    { fecha: "2026-10-25", pais: "Otro", nombre: "Cambio de hora: a las 3:00 serán las 2:00" },
    { fecha: "2026-11-01", pais: "ES", nombre: "Todos los Santos" },
    { fecha: "2026-12-06", pais: "ES", nombre: "Día de la Constitución" },
    { fecha: "2026-12-08", pais: "ES", nombre: "Inmaculada Concepción" },
    { fecha: "2026-12-25", pais: "ES", nombre: "Navidad" },
    { fecha: "2027-01-01", pais: "ES", nombre: "Año Nuevo" },
    { fecha: "2027-01-06", pais: "ES", nombre: "Reyes" },
    { fecha: "2027-03-26", pais: "ES", nombre: "Viernes Santo" },
    { fecha: "2027-03-28", pais: "Otro", nombre: "Cambio de hora: a las 2:00 serán las 3:00" },
    { fecha: "2027-05-01", pais: "ES", nombre: "Fiesta del Trabajo" },
    { fecha: "2027-08-15", pais: "ES", nombre: "Asunción de la Virgen" }
  ]
};
