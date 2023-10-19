let Matematica = (prompt("Ingrese su nota de matematica"));
let Sociales = (prompt("Ingrese su nota de sociales"));
let Naturales = prompt("Ingrese su nota de naturales")

Matematica = parseInt(Matematica);
Sociales = parseInt(Sociales);
Naturales = parseInt(Naturales);

const notas = [];

notas.push(Matematica);
notas.push(Sociales);
notas.push(Naturales);

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

