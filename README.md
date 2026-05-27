# CatFighters 2D

CatFighters 2D en React echo como pedía la consigna siendo el tema principal los gatitos, pero rondando alrededor de un juegito que estoy creando junto a mi compañero en este tp de peleas 2d creando así CatFighters 2D la red social.

Usamos de cuenta prelogeada a la que sería justamente nuestra cuenta en esta red de gatitos siendo el gatito franco una extencion instalada por el propio usuario.

Por esto del juego, también agregamos un post promocional del juego original publicado en netlify y claudflare(utilizado para el modo online):

https://fighters2d.netlify.app

---

## Diseño de Figma utilizado
En teoría usamos como referencia uno de los diseños de figma proporcionado.
Osea el 1   
https://www.figma.com/design/CLoPDBlSOj0Dh9re1y3nyb/Instagram---Web-UI--Recreated---Community-?node-id=1-2&p=f&t=St2vulLD93oRAiAN-0


---

## Componentes y responsabilidades
Tenemos:
- ErrorMensaje 
(Recibe un mensaje de texto y lo mete en un contenedor con clase para ser mostrado al usuario)
- Feed
(Recibe todos los posteos a mostrar y los va enviando por separado a Posteo junto a sus funciones posibles)
- Header
(Recive en que página están y la función cambiar de página y las usa para crear el header de la red social con los botones de cambiar vista)
- Loader
(Lo mismo que error pero sobre cargando)
- ModalPosteo
(Es cuando tocas un posteo y se abre a detalle cargas el posteo completo con comentarios y todo y sus funciones para abrirlo cerrarlo o darle like, etc y lo pone como principal en la pantalla(aunque eso es css pero ma o meno porque aca se lo permite con los classname))
- Perfil
(Recibe todos los perfiles(inicialmente por un logeo futuro y porque hice varios iniciales pero ahora me doy cuenta que no es util pero funciona para este tp porque agarra el primero) muestra x cantidad de posteos y permite abrirlos no los muestra completos porque no tiene las funciones para que anden completos)
- Posteo
(Es el posteo de forma simple como un articulo para usarse de a por montones en el feed más simple que el modalPosteo)
- WarCats
(El mejor componente de todos actuando como la supuesta extención es quien recibe el activar de App.jsx y lo activa el disparo y justo luego lo desactiva por lo mismo(app tiene una función en segundo plano que calcula un tiempo random y una x random para disparar el tiro pero desde 1 de los 3 lados de la pantalla isquierda abajo y arriba))
Y es un componente pero lo puse como data porque serían archivos como de bd o contenedores de información directa:
- Perfil
(Contenedor de perfiles osea data)
- Posteo
(Contenedor de posteos de fabrica osea data)
---

## Organización
Usamos componentes como funciones ejecutadoras o visualisadoras, data como contenedores de información, app como el que proporciona funciones con props y une un poco todo y calcula tiempos y x random y main para ejecutar app. A y está la api que simplemente trae de a 12 img o las que se pida de la api para que no me tumben la app mientras se prueba actualmente se llama 1 ves pero estoy viendo si llego hacer que cuando se muestren las 12 se llame de buelta para mantener el bucle de mejor manera y no tan simulado limitado.

App.jsx tiene los estados: la llamada a la API, para armar los posteos y donde decide qué vista se muestra(el feed, el perfil, el modal o el evento de WarCats).

---

## Por qué decidimos componentizar de esa manera

Decidimos componentizar así porque el proyecto tiene varias partes que se repiten o que tienen responsabilidades distintas.
Lo hicimos así porque nos lo pidieron pero en sí simplemente subdividimos tareas largas y complejas en más pequeñas y simples hasta el punto que un normal como app solo une modulos con props y cada uno se encarga de lo suyo siendo más facil de localizar errores y en general de aislar los mismos porque en un momento se rompio perfil y su conexion pero el resto andaba perfecto por lo que sirve separarlo así. Tambíen para evitar repetir código que da fiaca y el termino técnico es evitar el código espageti incremental a largo plazo que complejiza la revicion del mismo código por humanos y gasta más tokens al ser tan largo en las ia.

Hay mejores formas de subdividir y creo que hasta para el mismo css porque tener 500 lineas en uno es dificil de leer y se podría comentar mejor para buscar por secciones pero esto es un tp al fin y al cabo y no un projecto laboral o personal.
---

## Cómo se comunican los componentes mediante props

Los componentes se comunican usando props. La mayoría de estos, siendo los estados importantes, están en App.jsx, y desde ahí se mandan datos o funciones a los componentes hijos.

Ej, App manda pero a header por lo que este recibe:
```jsx
<Header
  vista={vista}
  cambiarVista={cambiarVista}
/>
```
Estas son como las comillas para poner código

---

## Organizado exacto
La carpeta `src` está organizada así:

src/
├── api/
│   └── catsApi.js
├── data/
│   ├── Perfil.jsx
│   └── Posteo.jsx
├── components/
│   ├── Header.jsx
│   ├── Perfil.jsx
│   ├── Feed.jsx
│   ├── Posteo.jsx
│   ├── ModalPosteo.jsx
│   ├── WarCats.jsx
│   ├── Loader.jsx
│   └── ErrorMessage.jsx
├── App.jsx
├── App.css
└── main.jsx