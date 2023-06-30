/*console.log('Hola mundo!');

let num1 = 50;
let num2 = 10;
let saludo = '¡Hola!';
let nombreCurso = 'Código LATAM';
let resultadoSuma = num1 + num2;
let resultadoResta = num1 - num2;
let resultadoMultiplicacion = num1 * num2;

console.log(resultadoSuma);
console.log(resultadoResta);
console.log(resultadoMultiplicacion);
console.log(saludo + 'Esto es ' + nombreCurso);*/

const num = prompt('Ingrese un numero', '');

if(num > 0) {
    despegue();
}

function despegue(){
    while (num > 0){
        console.log(num);
        num = num - 1;
    }
    if(num === 0){
        console.log('Despegamos');
    }
    return;
}




console.log(frutas[0]); 'manzana'
console.log(frutas[1]); 'pera'
console.log(frutas[2]); 'banana'
console.log(frutas[3]); 'naranja'


document.URL;
document.write( 'Hola JS!!');