let Matematica = prompt("Ingrese su nota de matematica");
let Sociales = prompt("Ingrese su nota de sociales");
let Naturales = prompt("Ingrese su nota de naturales")


function calcularPromedio(){
    let Promedio = ((parseInt(Matematica) + parseInt(Sociales) + parseInt(Naturales)) / 3 );
    if (Promedio >= 7) {
        alert("Su promedio esta aprobado con nota " + Promedio);
    } else if (Promedio < 7) {
        alert("Su promedio esta desaprobado con nota " + Promedio);
    }
    return;
}

calcularPromedio();



