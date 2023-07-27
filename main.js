const todo= document.querySelector(".todo")
const entrada= document.querySelector(".entrada-filter")
const plato_fondo= document.querySelector(".plato-filter")
const postre= document.querySelector(".postre-filter")
const bebida= document.querySelector(".bebidas-filter")
const cards = document.querySelector(".cards")
const card = document.querySelectorAll(".card")
const filterBotones =document.querySelectorAll(".filtrado")

const entradas=document.querySelectorAll('.entrada')

function Plato(id, nombre, descripcion, precio, categoria, image){
    this.id=id
    this.nombre = nombre,
    this.descripcion = descripcion,
    this.precio = precio,
    this.categoria = categoria,
    this.image=image
}

const menestron=new Plato (1, "Menestrón", "Una sopa de menestras acompañadas de una buena porción de carne de res, a la que se incorpora la misma salsa de los también famosos tallarines verdes.", 6, "entrada", "images/menestron.jpg")
const sopa_minuta=new Plato (2, "Sopa a la Minuta", "Una sopa reconfortante a base de carne de res y tomate con papa y fideo cabello de ángel.", 5, "entrada", "images/sopa_a_la_minuta.PNG")
const lomo_saltado=new Plato (3, "Lomo Saltado", "Jugosos trozos de lomo al wok, servidos con cebolla, tomate, papas fritas y arroz blanco.", 18, "plato-fondo", "images/lomo_saltado.jpg")
const tallarin_saltado = new Plato (4,"Tallarín Saltado", "Plato típico de la gastronomía peruana, propio de la cocina chifa con pollo, ají amarillo, cebolla china y tomates salteados al wok.", 17, "plato-fondo", "images/tallarin_saltado.jpg")
const mazamorra_morada =new Plato(5, "Mazamorra Morada", "Postre típico de nuestra gastronomía elaborado a base de maíz morado concentrado con fécula.", 2, "postre", "images/mazamorra_morada.jpeg")
const arroz_con_leche =new Plato(6, "Arroz con Leche", "Postre típico de nuestra gastronomía elaborado a base de arroz cocido en leche con azúcar y canela, servido con una pizca de canela en polvo y leche condesada", 3, "postre", "images/arroz_con_leche.jpg")

const platos = [menestron, sopa_minuta, lomo_saltado, tallarin_saltado, mazamorra_morada, arroz_con_leche]

window.addEventListener("DOMContentLoaded", ()=>{
    displayMenuItems(platos)
})

filterBotones.forEach(function(btn){
    btn.addEventListener('click', (evt)=>{
        const categoria=evt.currentTarget.dataset.id;
        const categoriaMenu = platos.filter(function(menuItems){
            if (menuItems.categoria==categoria){
                return menuItems
            }
            
        })
        if (categoria=="todo"){
            displayMenuItems(platos)
        }else{
            displayMenuItems(categoriaMenu)
        }
    })
})

function displayMenuItems(menuItems){
    let displayMenu = menuItems.map (item=>{
        return  `
        <article class="card individual-card ${item.categoria}" style="width: 18rem;">
            <img src="${item.image}" class="card-img-top" alt="${item.nombre}"/>
            <div class="card-body">
                <h5 class="card-title card-titulo">${item.nombre}</h5>
                <p class="card-texto">${item.descripcion}</p>
                <p class="card-texto"> Precio <span>S/. ${item.precio}.00</span> </p>
                <a href="#" class="btn btn-primary boton-anadir">Pedir</a>
            </div>
        </article> `
    })
    displayMenu=displayMenu.join("")
    cards.innerHTML=displayMenu
}