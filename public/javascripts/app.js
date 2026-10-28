console.clear();
console.log("App starting...");

//Seguramente no funcione nada porque no lo tengo creado

const offcanvas_link = document.querySelector("#open_offcanvas");
const offcanvas_menu = document.querySelector("aside.off-canvas")

//creamos la funcion, le he puesto el nombre que he querido
function toggle_offcanvas_menu(){
    offcanvas_menu.classList.toggle("hidden")
}
//llamo a la funcion. cuando le doy click a algo, llama a la funcion
offcanvas_link.addEventListener("click", toggle_offcanvas_menu)



//tengo que comprobar si existe el offcanvas porque si no existe no hace nada
if(offcanvas_link){

//asi era el año pasado. ahora pro. es una funcion flecha. se usa cuando solo lo llamamos en un solo sitio
//todos los eventos(addeventlistener) los usamos con funcion flecha
offcanvas_link.addEventListener("click", (ev) => {
    console.log("click");
    console.log(ev.target); //con esto se muestra el evento que hago click
    ev.preventDefault(); //con este hace que haga otra cosa, no lo que hace por defecto
    offcanvas_menu.classList.toggle("hidden");
 })

}

//el if con ? 
//como solo voy a usar una vez, no creo en verdad la constante, así queda todo más compacto. en vez de const = .... no usamos la variable cuando no hace falta
document.querySelector("aside.off-canvas")?.addEventListener("click", (ev) => {
    console.log("click");
    console.log(ev.target); 
    ev.preventDefault(); 
    offcanvas_menu.classList.toggle("hidden");
})