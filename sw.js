/*esta es una constante llamada CAHCHE_NAME, DONDE DEFINO EL  NOMBRE DE LA MEMORIA CACHE
VA A TENER 
como nos damos cuenta despeusdel valor agragado a la constante chache_name, creo el arreglo
urlsToCache que es donde eto las rutas de los elementos que quiero cargaar a mi cache. */
const CACHE_NAME = "v1_chess_mate_club",
  urlsToCache = [
    "./", /*este es el index */
    
    /*pagina mates */
    "./mates/",

    /*pagina libros */
    "./libros/",

    /*pagina aperturas */
    "./aperturas/",

    /*pagina contacto */
    "./contacto/",

    /*esto son las fuentes  o tipo de letra  */
    "https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap",

    /*el kit de iconos */
    "./assets/icons/kit-fontawesomeicons.js",
    
    /*todo las paginas que son  css */
    "./assets/css/main.css", 
    "./aperturas/assets/css/aperturas.css",
    "./libros/assets/css/libros.css",
    "./mates/assets/css/mates.css",
    "./contacto/assets/css/contacto.css",

    /*hoja exteranna de java script */
    "./contacto/assets/js/protocol-handler.js",

    /*aqui van todas las imagenes de sitio web del index */
    "./assets/img/ProgramadorFitness.png",

    /*start up imgage  */
    "./assets/img/startup-image-750x1334@2x.png",
    "./assets/img/startup-image-1125x2436@3x.png",
    "./assets/img/startup-image-768x1024@2x.png",
    
    /*favaicons */
    "./assets/img/favicon-16x16.png",
    "./assets/img/favicon-32x32.png",
    "./assets/img/favicon-48x48.png",
    "./assets/img/favicon-76x76.png",
    "./assets/img/favicon-96x96.png",
    "./assets/img/favicon-120x120.png",
    "./assets/img/favicon-144x144.png",
    "./assets/img/favicon-152x152.png",
    "./assets/img/favicon-167x167.png",
    "./assets/img/favicon-180x180.png",
    "./assets/img/favicon-192x192.png",
    "./assets/img/favicon-256x256.png",
    "./assets/img/favicon-384x384.png",
    "./assets/img/favicon-512x512.png",
   
   /*todo lo que es apple touch icon */
    "./assets/img/apple-touch-icon-57x57.png",
    "./assets/img/apple-touch-icon-60x60.png",
    "./assets/img/apple-touch-icon-72x72.png",
    "./assets/img/apple-touch-icon-76x76.png",
    "./assets/img/apple-touch-icon-114x114.png",
    "./assets/img/apple-touch-icon-120x120.png",
    "./assets/img/apple-touch-icon-144x144.png",
    "./assets/img/apple-touch-icon-152x152.png",
    "./assets/img/apple-touch-icon-167x167.png",
    "./assets/img/apple-touch-icon-180x180.png",

    /*imagenes de las partes de aperturas y defensa */
    "./aperturas/assets/img/Apertura-Ruy-Lopez.png",
    "./aperturas/assets/img/Apertura-Italiana.png",
    "./aperturas/assets/img/Defensa-Alekhine.png",
    "./aperturas/assets/img/Defensa-Caro-Kann.png",
    "./aperturas/assets/img/Defensa-Escandinava.png",
    "./aperturas/assets/img/Defensa-Escocesa.png",
    "./aperturas/assets/img/Defensa-Francesa.png",
    "./aperturas/assets/img/Defensa-Siciliana.png",
    "./aperturas/assets/img/Defensa-Vienesa.png",
    "./aperturas/assets/img/Gambito-de-Rey.png",

    /*imagenes de parte de mates */
    "./mates/assets/img/mate-arabe.gif",
    "./mates/assets/img/mate-cola-de-golondrina.gif",
    "./mates/assets/img/mate-de-anastasia.gif",
    "./mates/assets/img/mate-de-blackburne.gif",
    "./mates/assets/img/mate-de-boen.gif",
    "./mates/assets/img/mate-de-cozio.gif",
    "./mates/assets/img/mate-de-damiano.gif",
    "./mates/assets/img/mate-de-la-coz.gif",
    "./mates/assets/img/mate-de-la-opera.gif",
    "./mates/assets/img/mate-de-las-hombreras.gif",
    "./mates/assets/img/mate-de-legal.gif",
    "./mates/assets/img/mate-de-morphy.gif",
    "./mates/assets/img/mate-del-loco.gif",

    /*imagens pagina libros */
    "./libros/assets/img/mis-60-partidas-memorables.jpg",
    "./libros/assets/img/curso-completo-de-ajedrez.jpg",
  ];

  /*el self hace una referncia al entorno acutal y en este caso es el service worker, y aqui lo 
  estoy agregando con el self.addEventListener, y que escuches el evento install. El envento se instala en
  el sw-register.js
  el parametro e, palabra reservada, es el elemento que esta generando el evento,
  en este caso seria nuestro servirworker. para aclarar:
  ver que se llamo a sw.js desde sw-register.js que es donde se registra el servis worker.
  sin el parametro e no tengo nada que detectar o escuhar. y se 
  recomiendo que se cree con una funcion tipo flecha (arrow function)  */
self.addEventListener("install", (e) => {
  console.log("Service Worker installing...");
 
    /* aqui lo que digo que e debe esperar hasta tener una respuesta.esto es una promesa  */
    e.waitUntil(
      caches/*es un objeto de javascript  y luego voy accediendo a sus metodos poniendo antes el putno */
        
        /*este metodo puede habrir una memoria chache o crear una memoria cache,en esge caso la cree*/
        .open(CACHE_NAME)

        /*el metodo then dice cuando obtengas una respuesta que es la memoria cache creado por el metodo open 
        entonces , haga algo :    */
        .then((cache) => {
          /*un console log.
          un return que manda a el cache creado todas las urls almacenadas en urlsToCache,recordar que esta es una
          constsante tipo arreglo que cree arriba, y luego  */
          console.log("Caching files...");

          return(
          cache.addAll(urlsToCache)

            /*como caches es una promesa puedo poner N cantidad de then. 
            Este segundo then me da el despleigue en consola de todas la url 
            y cuando ya hizo esto le digo que se salga de aqui y que inice la activacion del
            serviceworking: con el skipwiting,sin tener que abrir la pagina  */
            .then(() => {
                console.log("Archivos agregados al caché:", urlsToCache);
                return self.skipWaiting();
                })
          );  

        })
        .catch((err) => console.log("Falló registro de caché", err))
    );

});


/*aqui escuchamos cuando el evento activate se levanta, e es el evento que lo genera y es una
palbra reservada. Todo etsso lo hago dentro de mi funcion flecha.  */
self.addEventListener("activate", (e) => {
  console.log("Service Worker activating...");
  
  /*aqui creo un cahce limpio que guarda la mi memoria cache la cual deseo conservar */
  const cacheWhiteList = [CACHE_NAME];
  
    /*este metodo espera a que todas las promesas se ejecuten para poder
    activarse */
    e.waitUntil(
      /*este objeto hace referencia a todo lo que esta guardado en 
      la memoria cache. cahes es palabra reservada */
      caches
        /*metodo keys permite obtener las claves o identificadores de 
        cada memoria cache que estan almacenadas en el objeto cache.
        .keys es una promesa */
        .keys()
        /*lo que espera es el parameto caheNames que contiene todos los nombres
        de lo que esta almacenado dentro de la memoria cache.
        en este caso tenemos otra funcion arrow y el  parametro cacheNames es el que se traslada
        caheNames es palabra reservada y este objeto siempre lo devuelve .keys()*/
        .then((cacheNames) => {
            /*podemos usar una promesa dentro de otro el Promise.all permite ejecutar 
            varias promesas en paralelo. Esto nos permite eliminar todas las meomorias
            cache que no sirven y solo conserve la que nos interesa.*/
            return Promise.all(
            
            /*la funcion .map permite recorrer un arreglo, en este caso el arreglo cacheNames */
            cacheNames.map((cacheName) => {
              
              /*verifica que sie el nombre del (cahceName) que recorro es igual a la constante
              cachewhitlist y si no es igual la elimina. Cuando la comparacion da -1 es qe no exite
              El metodo .indexOf sirve para comprar el contenido de de dos arreglos*/

              if (cacheWhiteList.indexOf(cacheName) === -1) {
                /*elimino el cache que no me interesa */
                return caches.delete(cacheName);
              }

            })

            );
        

        })

        /*en las promesas se pueden tener varios then. que se ejecutaran aunque los anteriores
        esen pendienes*/
        .then( () => {
        
          console.log("Service Worker activo y listo para controlar clientes.");
          
          /*este self.clients.claim() toma el control de todas las paginas y se aseguran 
          que la cache este actualizada y se pueda consumir*/
          return self.clients.claim();
        })

    );

});

/*Ahora tenemos que decirle a la aplicacion donde buscar el recurso imagenes u hojas externas
 Tomemos en cuenta que arriba en los listener anteriores solo manejamos la memoria cahche del 
 navegador.
 El evento fetch , que es palabra reservada, tiene como objetivo interceptar la solicitudes de red de la aplicacion
 y a si poder responder con los arachivos en la red o en el cache. Tomar en cuenta que primero busca en cache 
 y luego en la red,esto es para ahorrar tiempo.
 */0
self.addEventListener("fetch", (e) => {
  e.respondWith(
    /*cache es palabra reservada e indica el cache de la maquina. esto es el obejto cache */
    caches

      /*El metodo match, se encarga de verificar si la peticion 
      de el recurso que esta almaenado en e, se encuentra en el la memoria cache  */
      .match(e.request)

      /*como es promesa uso then y si obtengo respuesta se almacena en el parametro res.
      res es palabra reservada.*/
      .then((res) => {
        /*si es verdadero, utilizo los trutys y falsy. en esta caso si es
        verdadero */
        if (res) {
          /*aqui lo que hago en este console es que como request es un objeto
          le puedo poner que me muestre el url */
          console.log(`Sirviendo desde caché: ${e.request.url}`);
          /*cuando entro al if y es verdadero luego returna y sale 
          de la funcion  */
          return res;
        }

        /*cuando no es verdadero entonces muestro que la peticion se va a servir
        desde la red y no desde la memoria cache.
        aqui solo imprimo el nombre de lo que quiero buscar */
        console.log(`Realizando fetch: ${e.request.url}`);

        /*aqui lo que hago es hacer la peticion a la red, ya que 
        no esta en cache. y fetch,que es palabra reservada, es una  promesa */
        return(
           fetch(e.request)
        
        /*Esta palabra reservada me dice si obtengo la respuesta de la red*/ 
          .then((networkResponse) => {

            /*Entendamos que cuando yo obtengo una respuesta de la peticion, la respuesta no 
            puede volverse a utilizar. Esto es como trabaja el internet. Entonces 
            nosotros clonamos y almacenamos la respuesta de la peticion en una variable  */
            let clonedResponse = networkResponse.clone();
            
            /*Este if es sumament importante. ya que me dice que solo quiero obtener
            respuetas cuyo metodo de envio sea metodo "GET" es decir solicitudes a la 
            red. */
            if (
                /*&& es el and */
                e.request.method === "GET" &&

                /*recordamos que ! es negacion. y le digo que extencionse chrome no 
                me interesan  */
                !e.request.url.startsWith("chrome-extension://") &&

                /*como esto ||  es un operador o entonces va en parentesis porque es uno 
                o lo otro 
                entonces legi que puede ser https es decir un lugar seguro  o 
                que sea mi protocol handler o protocolo personalizado que lo tengo en 
                el manifest y lo termianmos en el protocl-handler.js,que esta en la carpeta
                contacto*/
                (e.request.url.startsWith("https://") ||
                  
                  e.request.url.startsWith("web+miapp://"))

            ) 

                {
                  /*aqui lo que hago es habrir mi cache cone l 
                  caches.open.
                  el parametro cache es el que tiene la respuesta que es
                  todo lo que tengo en mi CACHE_NAME */
                  caches.open(CACHE_NAME).then((cache) => {

                      /*Aqui agrego a mi memoria cache lo que estoy obteniendo*/
                      cache.put(e.request, clonedResponse);
                  });

                }
               /*Aqui termina el if  */

            return networkResponse;

          }) /*aqui cierro el then */

            /*Esto es cuando no obtengo el recurso del internet o no tengo internet
            me devuelve el error presente*/
          .catch((err) => {
              console.error("Error fetching resource:", err);
          })

        );    

      })

      /*esto es cuando busco un recurso en cache y no es encuentra */
      .catch((err) => {
        console.error("Error matching en caché", err);
      })

  );

});




