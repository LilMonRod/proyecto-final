/**************
*Si el cliente es tipo 1 se le descuenta el 30% 
Si el cliente es tipo 2 se le descuenta el 20% 
Si el cliente es tipo 3 se le descuenta el 10%

*Solicitar:
  Nombre del cliente
  ID del cliente
  Tipo de cliente (1, 2, o 3)
  Cantidad de libros
  Cantidad de tipos de libros y costo

*Matemáticas 2,000 colones
Sociales 5,000 colones
Física  4,000 colones

*Imprimir
  Nombre del cliente
  Cantidad de libros a comprar
  Subtotal sin descuento 
  Descuento
  Total a pagar


*
*
**************/

let nom;

let id;
let cat;

let mat = 2000;
let cantMath;

let soc = 5000;
let cantSoc;

let fis = 4000;
let CantFis ;

let desc = 0;
let porDes = 0;

let cantLibros;

let subT;
let total; 

let li10 = document.getElementById('item1');
let li20 = document.getElementById('item2');
let li30 = document.getElementById('item3');
let li40 = document.getElementById('item4');
let li50 = document.getElementById('item5');
let li60 = document.getElementById('item6');

let lista = document.getElementById('respuesta');

let salir = document.getElementById('exit');

let iniciar = document.getElementById('start');

let form = document.getElementById('formulario');



function factura(event) {
    // event.preventDefault(): Cancela el comportamiento default del evento.
    event.preventDefault();
    

    nom = event.target.elements[0].value;
    id = event.target.elements[1].value;

    cat = event.target.elements[2].value;
    cat = parseInt(cat);
    
    cantMath = event.target.elements[3].value;
    cantMath = parseInt(cantMath);
    
    cantSoc = event.target.elements[4].value;
    cantSoc = parseInt(cantSoc);
    
    cantFis = event.target.elements[5].value;
    cantFis = parseInt(cantFis);
    
    switch (cat) {
        case 1:
            porDes = 30;
            break;
                
        case 2:
            porDes = 20;
            break;
    
        case 3:
            porDes = 10;
            break;
    
        default: 
            porDes = 0;
    }
    
    let non = isNaN(cantSoc);
    if (non == true){
        cantSoc = 0;
    }
    let non1 = isNaN(cantFis);
    if (non1 == true){
        cantFis = 0;
    }
    let non2 = isNaN(cantMath);
    if (non2 == true){
        cantMath = 0;
    }

    subT = ((mat * cantMath) + (soc * cantSoc) + (fis * cantFis));
        
    desc = (subT * porDes) / 100;
    
    total = subT - desc;
    
    cantLibros = cantMath + cantSoc + cantFis;
    mostrarli();
    addItem();

    ocultarForm();
    mostrarCont();
    

}

function ocultarForm() {
    document.getElementById('container').style.display = 'none';
}

function mostrarForm() {
    document.getElementById('container').style.display = 'block';
}

function ocultarCont() {
    document.getElementById('exit').style.display = 'none';
    document.getElementById('start').style.display = 'none';
}

function mostrarCont() {
    document.getElementById('start').style.display = 'inline';
    document.getElementById('exit').style.display = 'inline';
}

function addItem(lista){
    lista = document.getElementById('respuesta');

    let li1 = document.createElement('li');
    li1.innerHTML = `Cliente:________________${nom}.`;
    lista.replaceChild(li1, li10);
    li10 = li1;
    
    let li2 = document.createElement('li');
    li2.innerHTML = `ID:____________________${id}.`;
    lista.replaceChild(li2, li20);
    li20 = li2;

    let li3 = document.createElement('li');
    li3.innerHTML = `Cantidad de libros:________${cantLibros}.`;
    lista.replaceChild(li3, li30);
    li30 = li3;

    let li4 = document.createElement('li');
    li4.innerHTML = `Subtotal:_______________${subT}.`;
    lista.replaceChild(li4, li40);
    li40 = li4;
    
    let li5 = document.createElement('li');
    li5.innerHTML = `Descuento:_____________${desc}.`;
    lista.replaceChild(li5, li50);
    li50 = li5;
    
    let li6 = document.createElement('li');
    li6.innerHTML = `Total:_________________${total}.`;
    lista.replaceChild(li6, li60);
    li60 = li6;
}
function ocultarli(){
    document.getElementById('respuesta').style.display = 'none';
}
function mostrarli(){
    document.getElementById('respuesta').style.display = 'block';
}

function terminar() {
    event.preventDefault();
    let header = document.getElementById('encabezado');
    let texto = document.createElement('h2');
    texto.innerHTML = "Muchas gracias por su visita";
    header.appendChild(texto);
    ocultarCont();
    ocultarForm();
    ocultarli();

}

function limpiar(){

    nom = "";
    id = "";
    cat = "";

    cantMath = 0;

    cantSoc = 0;

    CantFis = 0 ;

    desc = 0;
    porDes = 0;

    cantLibros = 0;

    subT = 0;
    total = 0; 
    document.getElementById("formulario").reset();
        
}

function reiniciar() {
    event.preventDefault();
    limpiar();
    mostrarForm();
    ocultarCont();
    ocultarli();
    
}

ocultarCont();
ocultarli();

form.addEventListener('submit', factura);

iniciar.onclick = reiniciar;

salir.onclick = terminar;

    

    

