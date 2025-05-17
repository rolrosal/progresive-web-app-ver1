/*En esta condicional evaluo si el la appi de serviceWorker, la cual es palabra reservada,
esta instalada en el navegador*/

if ("serviceWorker" in navigator ){
   
    /*Si esta instalada la appi se acede al objeto navigator y al metodo register  y le pongo como 
    parametro el nombre del archivo del service-worker. el sw.js debe de estar en la misma ubicacion del index
    del manifest y del sw-register*/

    /*Porque esta direccion : "/progresive-web-app-ver1./sw.js" si yo la utilizaria en mi dominio principal, 
    que en este caso es godady */
    navigator.serviceWorker.register("/progresive-web-app-ver1./sw.js")

        /* aqui lo que se hace es manejar esto como una promesa y por eso navigator.serviceWorker.register("./sw.js") 
        no tiene punto y coma y el then tiene el punto antes, porque es parte del navigator. 
        lo tengo separado por orden  
        si tiene exito el register hara lo siguiente. el reg el el objeto que devuelve el metodo register si 
        el registro del serviceWorker fue exitoso.
        lo que creo es una arrow function o funciones anonimas(=>) 
        el reg que me devuleve en el console.log es para ver que registre, es para
        informacion mia.*/

        .then((reg) => {console.log("Registro de SW(Service Worker) exitoso", reg)})

        /*Esto es cuando no esta la appi entonces el metodo catch, obtiene el objeto err, que 
        indica error   */
        .catch((err) => {console.error("error al tratar de registrar el SW(Service Worker)" ,err)});
        
}