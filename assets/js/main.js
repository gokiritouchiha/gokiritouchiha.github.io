/**
* Template Name: Mentor - v4.7.0
* Template URL: https://bootstrapmade.com/mentor-free-education-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Testimonials slider
   */
new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
    delay: 5000,
    disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
    },
    breakpoints: {
    320: {
        slidesPerView: 1,
        spaceBetween: 20
    },

    1200: {
        slidesPerView: 2,
        spaceBetween: 20
}
    }
  });

  /**
   * Animation on scroll
   */
window.addEventListener('load', () => {
    AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
    })
});

})()

//Juego de preguntas que salgan al azar y nos de una calificación al final
// Array bidimensional donde se guardarán las preguntas junto a sus respuestas correctas correspondientes...
let lista = [                  //pregunta   //respuesta
    ['¿Cuánto es 3^3?',"27"], //[0] [0]     [0][1]
    ['¿Cuál es el número primo más pequeño?',"2"], //[1][0]  [1][1] 
    ['¿Cuál es el único número que no puede representarse en números romanos?',"0"]  //[2][0]   [2][1]
]
//Crear variables que usaré
let pregunta, respuesta
let formuladas = 0 //cuántas preguntas plantearás
let acertadas = 0 //respuestas acertadas

hazpregunta();

//Creamos el evento a través del ID
document.getElementById("boton").addEventListener("click",function(){
    //Obtener el dato
    let entrada = document.getElementById("respuesta").value

    if(entrada == respuesta){ //Decirnos cuántas acertó
        acertadas++
    }
    if(formuladas < 3){ //Escribo cuántas preguntas le haré
        hazpregunta() //seguir preguntando
    }
    else{
        muestraresultado() //Frase si acertó o no, muestra resultado
    }
})

function hazpregunta(){
    let e //Variable interna
    // se extrae una pregunta/respuesta al azar del array...
    e = lista.splice(numAlet(0,lista.length-1),1);
    // se guardan la pregunta y la respuesta 
    pregunta = e[0][0]; 
    respuesta = e[0][1];

    // se muestra la pregunta
    document.getElementById("pregunta").innerHTML=pregunta;
    // se borra lo escrito anteriormente por el usuario
    document.getElementById("respuesta").value="";
    // contar las preguntas realizadas
    formuladas++
}

//Devuelve un número aleatorio entero entre 'min' y 'max' (ambos inclusive)
function numAlet(max,min){
    return Math.floor( Math.random() * (max - min + 1) ) + min;
}

// Comprueba el número de preguntas acertadas y muestra mensaje en función de este
function muestraresultado(){
    let resultado; //Variable auxiliar

    switch (acertadas) {
        case 0:
            resultado="Estas bajo en Cultura General, a leer y reflexionar"
            break;
        case 1:
            resultado="Aun te falta, esfuerzate mas"
            break;
        case 2:
            resultado="Por poco, sigue esforzandote"
            break;
        case 3:
            resultado="Perfecto, estas para la universidad Harvard"
            break;
    }

    document.getElementById("salida").innerHTML=resultado
}

let lista2 = [
    ['¿Cuál es el elemento químico con menor peso atómico?',"El hidrogeno"],
    ['¿Cómo se llama la capa más externa de un átomo?',"Capa de valencia"],
    ['¿Cual es la formula quimica del agua?',"H2O"],
]

let pregunta2, respuesta2
let formuladas2 = 0 
let acertadas2 = 0 

hazpregunta2();


document.getElementById("boton2").addEventListener("click",function(){
    
    let entrada2 = document.getElementById("respuesta2").value

    if(entrada2 == respuesta2){ 
        acertadas2++
    }
    if(formuladas2 < 3){ 
        hazpregunta2() 
    }
    else{
        muestraresultado2() 
    }
})

function hazpregunta2(){
    let a 
    a = lista2.splice(numAlet(0,lista2.length-1),1);
    
    pregunta2 = a[0][0]; 
    respuesta2 = a[0][1];

    document.getElementById("pregunta2").innerHTML=pregunta2;

    document.getElementById("respuesta2").value="";
    
    formuladas2++
}

function numAlet(max,min){
    return Math.floor( Math.random() * (max - min + 1) ) + min;
}


function muestraresultado2(){
    let resultado2; 

    switch (acertadas2) {
        case 0:
            resultado2="Estas bajo en Cultura General, a leer y reflexionar"
            break;
        case 1:
            resultado2="Aun te falta, esfuerzate mas"
            break;
        case 2:
            resultado2="Por poco, sigue esforzandote"
            break;
        case 3:
            resultado2="Perfecto, estas para la universidad Harvard"
            break;
    }

    document.getElementById("salida2").innerHTML=resultado2
}

let lista3 = [
    ['¿Cual es el rio mas largo del mundo?',"El rio amazonas"],
    ['¿Cuál es la capital de la India?',"Nueva delhi"],
    ['¿Cuál es la capital de Egipto?',"El cairo"],
]

let pregunta3, respuesta3
let formuladas3 = 0 
let acertadas3 = 0 

hazpregunta3();


document.getElementById("boton3").addEventListener("click",function(){
    
    let entrada3 = document.getElementById("respuesta3").value

    if(entrada3 == respuesta3){ 
        acertadas3++
    }
    if(formuladas3 < 3){ 
        hazpregunta3() 
    }
    else{
        muestraresultado3() 
    }
})

function hazpregunta3(){
    let i 
    i = lista3.splice(numAlet(0,lista3.length-1),1);
    
    pregunta3 = i[0][0]; 
    respuesta3 = i[0][1];

    document.getElementById("pregunta3").innerHTML=pregunta3;

    document.getElementById("respuesta3").value="";
    
    formuladas3++
}

function numAlet(max,min){
    return Math.floor( Math.random() * (max - min + 1) ) + min;
}


function muestraresultado3(){
    let resultado3; 

    switch (acertadas3) {
        case 0:
            resultado3="Estas bajo en Cultura General, a leer y reflexionar"
            break;
        case 1:
            resultado3="Aun te falta, esfuerzate mas"
            break;
        case 2:
            resultado3="Por poco, sigue esforzandote"
            break;
        case 3:
            resultado3="Perfecto, estas para la universidad Harvard"
            break;
    }

    document.getElementById("salida3").innerHTML=resultado3
}

let lista4 = [
    ['¿Qué famoso filósofo fue maestro de Alejandro Magno durante cinco años?',"Aristoteles"],
    ['¿Qué inició la Segunda Guerra Mundial?',"Alemania"],
    ['¿Dónde se han encontrado principalmente pinturas del período Paleolítico?',"En cuevas"],
]

let pregunta4, respuesta4
let formuladas4 = 0 
let acertadas4 = 0 

hazpregunta4();


document.getElementById("boton4").addEventListener("click",function(){
    
    let entrada4 = document.getElementById("respuesta4").value

    if(entrada4 == respuesta4){ 
        acertadas4++
    }
    if(formuladas4 < 3){ 
        hazpregunta4() 
    }
    else{
        muestraresultado4() 
    }
})

function hazpregunta4(){
    let o 
    o = lista4.splice(numAlet(0,lista4.length-1),1);
    
    pregunta4 = o[0][0]; 
    respuesta4 = o[0][1];

    document.getElementById("pregunta4").innerHTML=pregunta4;

    document.getElementById("respuesta4").value="";
    
    formuladas4++
}

function numAlet(max,min){
    return Math.floor( Math.random() * (max - min + 1) ) + min;
}


function muestraresultado4(){
    let resultado4; 

    switch (acertadas4) {
        case 0:
            resultado4="Estas bajo en Cultura General, a leer y reflexioanar"
            break;
        case 1:
            resultado4="Aun te falta, esfuerzate mas"
            break;
        case 2:
            resultado4="Por poco, sigue esforzandote"
            break;
        case 3:
            resultado4="Perfecto, estas para la universidad Harvard"
            break;
    }

    document.getElementById("salida4").innerHTML=resultado4
}

let lista5 = [
    ['¿Qué es una proteína?',"Una cadena de aminoacidos"],
    ['¿Cómo se denomina a un grupo de crías de perro?',"Camada"],
    ['¿Qué contienen los cloroplastos de las células vegetales?',"Clorofila"],
]

let pregunta5, respuesta5
let formuladas5 = 0 
let acertadas5 = 0 

hazpregunta5();


document.getElementById("boton5").addEventListener("click",function(){
    
    let entrada5 = document.getElementById("respuesta5").value

    if(entrada5 == respuesta5){ 
        acertadas5++
    }
    if(formuladas5 < 3){ 
        hazpregunta5() 
    }
    else{
        muestraresultado5() 
    }
})

function hazpregunta5(){
    let u 
    u = lista5.splice(numAlet(0,lista5.length-1),1);
    
    pregunta5 = u[0][0]; 
    respuesta5 = u[0][1];

    document.getElementById("pregunta5").innerHTML=pregunta5;

    document.getElementById("respuesta5").value="";
    
    formuladas5++
}

function numAlet(max,min){
    return Math.floor( Math.random() * (max - min + 1) ) + min;
}


function muestraresultado5(){
    let resultado5; 

    switch (acertadas5) {
        case 0:
            resultado5="Estas bajo en Cultura General, a leer y reflexioanar"
            break;
        case 1:
            resultado5="Aun te falta, esfuerzate mas"
            break;
        case 2:
            resultado5="Por poco, sigue esforzandote"
            break;
        case 3:
            resultado5="Perfecto, estas para la universidad Harvard"
            break;
    }

    document.getElementById("salida5").innerHTML=resultado5
}