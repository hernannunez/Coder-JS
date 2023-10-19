let matematica = (prompt("Ingrese su nota de matematica"));
let sociales = (prompt("Ingrese su nota de sociales"));
let naturales = prompt("Ingrese su nota de naturales")

matematica = parseInt(matematica);
sociales = parseInt(sociales);
naturales = parseInt(naturales);

const notas = [];

notas.push(matematica);
notas.push(sociales);
notas.push(naturales);

alert("Su nota de matematica es " + notas[0]);
alert("Su nota de Sociales es " + notas[1]);
alert("Su nota de Naturales es " + notas[2]);

let notaMasBaja = Math.min(notas[0], notas[1], notas[2]);
alert("Su nota mas baja es" + (notaMasBaja));


function calcularPromedio(notas) {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    let promedio = suma / notas.length;
    if (promedio >= 7) {
        alert("Su promedio esta aprobado con nota " + promedio);
    } else if (promedio < 7) {
        alert("Su promedio esta desaprobado con nota " + promedio);
    }
    return;
}

calcularPromedio(notas);

function Persona(nombre , notaMatematicas, notaSociales, notaNaturales){
    this.nombre = nombre;
    this.notaMatematicas = notaMatematicas;
    this.notaSociales = notaSociales;
    this.notaNaturales = notaNaturales;

    this.mostrarDatos = function() {
        console.log("Nombre: " + this.nombre +
                    "Nota matematica: " + this.notaMatematicas +
                    "Nota Sociales: " + this.notaSociales +
                    "Nota Naturales: " + this.notaNaturales
        );  
    }
}

const Persona1 = new Persona("juan" , 7 , 5 , 6);

Persona1.mostrarDatos();
