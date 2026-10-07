# Inicio (versión España)

Página de inicio estática: hora en Madrid, tiempo en España, índice UV y calidad del aire (índice europeo), previsión detallada, conversor de unidades, expresiones en inglés, próximas fechas y cuenta atrás.

## Archivos

| Archivo | Para qué sirve | ¿Se edita? |
|---|---|---|
| `index.html` | La página | No hace falta |
| `config.js` | Ciudades, fechas, mensajes, cumpleaños | Sí |
| `palabras.js` | Expresiones, frases y vocabulario en inglés | Solo para añadir o quitar palabras |

Los tres archivos son necesarios. Si falta `palabras.js`, la página carga pero desaparecen las tarjetas de expresiones y vocabulario sin dar error.

## Publicar en GitHub Pages

1. Crea un repositorio nuevo. Con cuenta gratuita debe ser **público**: cualquiera con el enlace puede ver nombres, cumpleaños y ubicación de `config.js`.
2. Sube `index.html`, `config.js` y `palabras.js` a la raíz del repositorio (*Add file > Upload files*).
3. *Settings > Pages* > *Deploy from a branch*, rama `main`, carpeta `/ (root)`, *Save*.
4. En 1–2 minutos estará en `https://TU-USUARIO.github.io/NOMBRE-REPO/`.
5. En el iPhone: Safari > *Compartir > Añadir a pantalla de inicio*.

## Cambiar ciudades o fechas

Edita `config.js` en GitHub (icono del lápiz). Cada lugar es una línea:

```js
{ nombre: "Valencia", lat: 39.4699, lon: -0.3763 },
```

- El orden de la lista es el orden en pantalla.
- Si la página queda en blanco tras un cambio, falta una coma o una comilla.
- GitHub Pages puede tardar hasta 10 minutos en mostrar los cambios.
- La lista `fechas` llega hasta agosto de 2027: añade las de después cuando toque.

## Fuentes de datos

- Tiempo, UV y calidad del aire: Open-Meteo (sin clave, gratuito para uso no comercial).
