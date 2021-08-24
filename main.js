

//Crear una funcion mediante declaración 


function saludar() {
    return "Hola Buenos días por declaración";
}
console.log(saludar)
console.log(saludar());

//Función por medio de expresiones: Variable con datos 

const saludar1 = function (){
    return "Hola Buenos días por Expresión";
}
console.log(saludar1());
console.log(saludar1);

//Funciones por Objetos 

let saludar2 = new Function(
    `return "Buenos Días por Objetos";`
);
console.log(saludar2);
console.log(saludar2())

//Función autoejecutada

// (function (){
//     console.log(1+3);
// })

// const block : switch (1+2) {
//     case 3:
//         alert(`la suma es 3`);
//         break;

//     default:
//         console.log(`NO es el resultado esperado`)
//     break;
// }}

let saludarObjeto = new Function ( "return `Construir funciones por Objeto`;");console.log(saludarObjeto);
console.log(saludarObjeto());


//Funciones Anónimas 

function saludar4() {
    return "Buenos días Función Anonima"; 
    
}
console.log(saludar4);
console.log(saludar4());

//Función Callback

const saludar5 = function(){return "Buenos días Callback"
}

const ejecutar = function (callback) {return callback()
    
};

console.log(ejecutar(saludar5));


// Callbacks Ejemplo Practico
const fAfirmativo = function (num) {
    return `El numero ${num} es el correcto de la condicion`;
}
const fError = function (num) {
    return `El numero ${num} no cumple con la condicion`;
}
const fEjecutar = function (callbakA, callbackE) {
    const num = Math.trunc(Math.random() * 10);
    return (num >= 4 && num <=8)
        ?(console.log(callbakA(num)),true)
        :(console.error(callbackE(num)),false);
    
}


console.warn(
        (fEjecutar(fAfirmativo, fError))
        ?`Se ejecuto el callback fAfirmativo`
        :`Se ejecuto el callback fError`
    );