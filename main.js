
const todo= document.querySelector(".todo")
const entrada= document.querySelector(".entrada-click")
const plato_fondo= document.querySelector(".plato-fondo")
const postre= document.querySelector(".postre-click")
const bebida= document.querySelector(".bebida-click")
const cards = document.querySelector(".cards")
const card = document.querySelectorAll(".card")

const entradas=document.querySelectorAll('.entrada')

/* entrada.addEventListener('click', evt=>{

    console.log(evt)
    if (entrada){
        console.log('se han seleccionado todas las entradas')
        console.log(entrada_filtrado)
        cards.appendChild(entrada_filtrado)
        cards.append(entrada_filtrado)
    }
}) 
*/


function Plato(id, nombre, descripcion, precio, categoria){
    this.id=id
    this.nombre = nombre,
    this.descripcion = descripcion,
    this.precio = precio,
    this.categoria = categoria
}

const menestron=new Plato (1, "Menestrón", "Una sopa de menestras acompañadas de una buena porción de carne de res, a la que se incorpora la misma salsa de los también famosos tallarines verdes.", 6, "entrada")
const sopa_minuta=new Plato (2, "Sopa a la Minuta", "Una sopa reconfortante a base de carne de res y tomate con papa y fideo cabello de ángel.", 5, "entrada")
const lomo_saltado=new Plato (3, "Lomo Saltado", "Jugosos trozos de lomo al wok, servidos con cebolla, tomate, papas fritas y arroz blanco.", 18, "plato-fondo")
const tallarin_saltado = new Plato (4,"Tallarín Saltado", "Plato típico de la gastronomía peruana, propio de la cocina chifa con pollo, ají amarillo, cebolla china y tomates salteados al wok.", 17, "plato-fondo")
const mazamorra_morada =new Plato(5, "Mazamorra Morada", "Postre típico de nuestra gastronomía elaborado a base de maíz morado concentrado con fécula.", 2, "postre")
const arroz_con_leche =new Plato(6, "Arroz con Leche", "Postre típico de nuestra gastronomía elaborado a base de arroz cocido en leche con azúcar y canela, servido con una pizca de canela en polvo y leche condesada", 3, "postre")

const platos = [menestron, sopa_minuta, lomo_saltado, tallarin_saltado, mazamorra_morada, arroz_con_leche]


cards.innerHTML= `
    <div class="card individual-card ${menestron.categoria}" style="width: 18rem;">
        <img src="images/menestron.jpg" class="card-img-top" alt="${menestron.nombre}">
        <div class="card-body">
            <h5 class="card-title card-titulo">${menestron.nombre}</h5>
            <p class="card-texto">${menestron.descripcion}</p>
            <p class="card-texto"> Precio <span>S/. ${menestron.precio}.00</span> </p>
            <a href="#" class="btn btn-primary boton-anadir">Pedir</a>
        </div>
    </div> 

    <div class="card individual-card ${sopa_minuta.categoria}" style="width: 18rem;">
        <img src="images/sopa_a_la_minuta.PNG" class="card-img-top" alt="${sopa_minuta.nombre}">
        <div class="card-body">
            <h5 class="card-title card-titulo">${sopa_minuta.nombre}</h5>
            <p class="card-texto">${sopa_minuta.descripcion}</p>
            <p class="card-texto"> Precio <span>S/. ${sopa_minuta.precio}.00</span> </p>
            <a href="#" class="btn btn-primary boton-anadir">Pedir</a>
        </div>
    </div> 

    <div class="card individual-card ${lomo_saltado.categoria}" style="width: 18rem;">
        <img src="images/lomo_saltado.jpg" class="card-img-top" alt="${lomo_saltado.nombre}">
        <div class="card-body">
            <h5 class="card-title card-titulo">${lomo_saltado.nombre}</h5>
            <p class="card-texto">${lomo_saltado.descripcion}</p>
            <p class="card-texto"> Precio <span>S/. ${lomo_saltado.precio}.00</span> </p>
            <a href="#" class="btn btn-primary boton-anadir">Pedir</a>
        </div>
    </div> 

    <div class="card individual-card ${tallarin_saltado.categoria}" style="width: 18rem;">
        <img src="images/tallarin_saltado.jpg" class="card-img-top" alt="${tallarin_saltado.nombre}">
        <div class="card-body">
            <h5 class="card-title card-titulo">${tallarin_saltado.nombre}</h5>
            <p class="card-texto">${tallarin_saltado.descripcion}</p>
            <p class="card-texto"> Precio <span>S/. ${tallarin_saltado.precio}.00</span> </p>
            <a href="#" class="btn btn-primary boton-anadir">Pedir</a>
        </div>
    </div> 

    <div class="card individual-card ${mazamorra_morada.categoria}" style="width: 18rem;">
        <img src="images/mazamorra_morada.jpeg" class="card-img-top" alt="${mazamorra_morada.nombre}">
        <div class="card-body">
            <h5 class="card-title card-titulo">${mazamorra_morada.nombre}</h5>
            <p class="card-texto">${mazamorra_morada.descripcion}</p>
            <p class="card-texto"> Precio <span>S/. ${mazamorra_morada.precio}.00</span> </p>
            <a href="#" class="btn btn-primary boton-anadir">Pedir</a>
        </div>
    </div> 

    <div class="card individual-card ${arroz_con_leche.categoria}" style="width: 18rem;">
    <img src="images/arroz_con_leche.jpg" class="card-img-top" alt="${arroz_con_leche.nombre}">
    <div class="card-body">
        <h5 class="card-title card-titulo">${arroz_con_leche.nombre}</h5>
        <p class="card-texto">${arroz_con_leche.descripcion}</p>
        <p class="card-texto"> Precio <span>S/. ${arroz_con_leche.precio}.00</span> </p>
        <a href="#" class="btn btn-primary boton-anadir">Pedir</a>
    </div>
</div> 


`


entrada.addEventListener('click', evt=>{

    console.log(evt.target)

    entrada.classList.add("active-item")


})