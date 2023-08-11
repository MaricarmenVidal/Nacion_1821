

const boton_cortesia= document.querySelector("#btn-elegir-cortesia")

boton_cortesia.addEventListener('click', ()=>{
    fetch ('datos/data.json')
        .then((respuesta)=>{
            return respuesta.json();
        })
        .then((respuesta)=>{
            mostrarCortesia(respuesta)
        })
        .catch((error)=>{
            console.log("Error:" + error)
        })
        .finally(()=>{
            console.log("proceso finalizado")
            Swal.fire({
                title: 'Felicitaciones',
                text: 'En breve llegará la cortesía a tu mesa',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
        })
})

function mostrarCortesia(randomCortesia){
    let randomNumber= Math.ceil(Math.random()*15)
    const cortesia = document.querySelector(".cortesia")
    let showCortesia= randomCortesia[randomNumber]
    cortesia.innerHTML=
    `
    <div class="cards">
        <article class="card individual-card " style="width: 18rem;">
            <img src="${showCortesia.image}" class="card-img-top" alt="${showCortesia.name}"/>
            <div class="card-body">
                <h5 class="card-title card-titulo">${showCortesia.name}</h5>
                <p class="card-texto">${showCortesia.description}</p>
            </div>
        </article> 
    </div>    
        `
    desaparecerCortesia()
}

function desaparecerCortesia(){
    divBtnCortesia=document.querySelector(".div-btn-cortesia")
    divBtnCortesia.innerHTML=""
}