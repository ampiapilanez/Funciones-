/*Ejercicio 1: Saludo personalizado
Crea una función llamada saludar que acepte un nombre como argumento y devuelva un mensaje de saludo como: "¡Hola, [nombre]!".*/

function saludar(nombre) {
   return `Hola, ${nombre}`
  }

console.log(saludar ('Oscar'));
console.log(saludar ('Sofia'));
console.log(saludar ('Pepe'));


/*Ejercicio 2: Suma de dos números
Crea una función llamada suma que acepte dos números y devuelva la suma de estos.*/

function sumar(a, b) {
    return a + b;
}
console.log(sumar(5, 5))

/*Ejercicio 3: Números pares Escribe una función llamada esPar que reciba un número y devuelva true si el número es par o false si es impar.*/
function esPar (numero) {
    if (numero % 2 === 0){
        return true
    } else {
        return false
    }
}
console.log(esPar(8))

/*Ejercicio 4: Mayor de tres números Escribe una función llamada mayorDeTres que reciba tres números como argumentos y devuelva el número mayor.*/
function mayorDeTres(a, b, c){
    if (a < b && b < c) {
        return  c;
    }
    else if (a < b && b > c) {
        return b;
    }
    else {
        return a;
    }
}
console.log(mayorDeTres(5, 2, 3))

/*Ejercicio 5: Conversión de grados Celsius a Fahrenheit
Crea una función llamada celsiusAFahrenheit que convierta una temperatura de grados Celsius a Fahrenheit usando la fórmula: F = (C * 9/5) + 32.*/
 function celsiusAFahrenheit(temp) {
    return (temp * 9/5) + 32.;    
 }
 console.log(celsiusAFahrenheit(25))