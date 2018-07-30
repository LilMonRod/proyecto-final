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
let cont = prompt("¿Desea iniciar? para salir digite Q o q");
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




while ((cont!="q") && (cont!="Q")) {
    nom = prompt("Digite el nombre del cliente");
    
    id = prompt("Digite el ID del cliente");
    
    cat = prompt("Digite le categoria del cliente [1] [2] [3]");
    cat = parseInt(cat);

    cantMath = prompt("¿Cuantos libros de Matemeticas lleva?")
    cantMath = parseInt(cantMath);

    cantSoc = prompt("¿Cuantos libros de Estudios Sociales lleva?");
    cantSoc = parseInt(cantSoc);

    CantFis = prompt("¿Cuantos libros de Fisica lleva?");
    CantFis = parseInt(CantFis);

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
    if (isNaN(cantSoc)){
        cantSoc = 0;
    }

    if (isNaN(CantFis)){
        CantFis = 0;
    }

    if (isNaN(cantMath)){
        cantMath = 0;
    }

    subT = ((mat * cantMath) + (soc * cantSoc) + (fis * CantFis));
    
    desc = (subT * porDes) / 100;

    total = subT - desc;

    cantLibros = cantMath + cantSoc + CantFis;

    /* imprimir nom, cantLibros, subT, desc, total*/
    console.log(`Cliente:               ${nom}`);
    console.log(`ID:                    ${id}`);
    console.log(`Cantidad de libros:    ${cantLibros}`);
    console.log(`Subtotal:              ${subT}`);
    console.log(`Descuento:             ${desc}`);
    console.log(`Total:                 ${total}`);


    /* leer continuar */
    cont = prompt("¿Desea iniciar una nueva factura? para salir digite Q o q");
}



