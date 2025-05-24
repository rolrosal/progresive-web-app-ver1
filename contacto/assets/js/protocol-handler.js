/*Para poder tener acceso de la pagina fuera de linea, es necesario abrir por lo menos una vez las siguientes 
paginas: 
1.abrir la aplicacion de la progresive-web-app-ver1.
2.cuando y abro la aplicacion, acceder al vinculo de protoco handler 
 
Los protocol handler funcinan para computadoras de escritorios  y laptops.
*/

/* Este programa es invocado desde el index de contacto, no el index principal.

Sin embargo el dato que extraigo si lo voy a traer a el index principal.

Aqui lo que hago es extraigo el parametro que usare como id mas adelante  */

/*
window.location.search:obtiene la parte de la url, a partir del signo de interrogacion
*/

/*new URLSearchParams : crea un objeto que permite manipulas y obtener los parametros de la url*/

/*codigo : */

/*aqui lo que obtuve fue id=%s" que lo me dice es obtnega una direccion como esta que seria ?id=web+micontacto://200/ 
que esta en el index contacto  */
const urlParams = new URLSearchParams(window.location.search);

/*En ese momento me interesa a mi el numeo 200 no todo lo demas
entonces,pero aqui lo que obtuve fue que urlParams: ?id=web+micontacto://200/
el ultimo diagonal lo agrega java.  */

/*el metodo get que es pertence a la calse URLSearchParams extra solamente el valor del parametro id que es lo 
que es : web+micontacto://200/ */
const rawContactoId =urlParams.get("id");
console.log(rawContactoId);

/*si se detecta que hay un contenido se ejecuta el codigo */
/*en llava solo con poner esto se detecta si tien o no contenido es decir  */
if(rawContactoId){
    /*elimino el texto siguiente de la constante*/
    /*lo que esta antes de la coma es lo que quiero quitara y luego despues de la coma lo que se va a meter
    en la variable*/
    const contactoId= rawContactoId.replace("web+micontacto://","")
    
    /*aqui quito el / y agrego un "" */
   /* contactoId=contactoId.replace("/","");*/

   .replace("/","");

    document.getElementById("contact-id").textContent = `ID:${contactoId}` ;
    
    console.log(contactoId);

    /*las condicionales para mandar el contenido correcto al elemento que tiene el id contact-ifo que esta
    en el indice */
        if (contactoId == 100){
            /**se modifica el elemento que tiene el id  */
            console.log("estoy en 100");
            document.getElementById("contact-info").textContent = `Nombre: Jose Rosales Monterroso`;
        } else if (contactoId == 200){
                    console.log("estoy en 200");
                   
                    document.getElementById("contact-info").textContent = `Nombre: Boby Fischer`;
                }         
                          
}