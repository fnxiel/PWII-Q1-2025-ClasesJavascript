const Profesion = require('./models/Profesion')

//Sin utilizar clases

let nombre = 'Luke'

//console.log(nombre)

let edad = 30

//console.log(edad)

let persona = {
    nombre: 'Darth',
    edad: 50
}

//console.log(persona)

persona2 = {
    nombre: "R2D2",
    edad: 15
}

persona30000 = {
    nombree: "C3P0",
    edad: 20
}

var texto = ''
var numero = 123
var verdaderofalso = true
var fecha = new Date()
var noDefinido = undefined
var nulo = null
var objeto = {}
var arreglo = []

var listadoPartes = [
    //id
    //Nombre
    //Fabricante
    //TipoPieza //Objeto
        //id
        //Descripcion - P.E. Manija
        //Materiales = []
            //id
            //Descripcion - P.E. Plastico
]

function EliminarRegistro(){
    return 1
}

const EliminarRegistroFF = (id) => {
    1+id
}

const EliminarRegistroFFR = () => 2


console.log(EliminarRegistro())
console.log(EliminarRegistroFF(2))


let profesionSastre = new Profesion("Sastre", "Fabricar ropa", 1)
let profesionDuplicada = new Profesion("Duplicada", "Esto se creo por error", 1)
let profesionCocinero = new Profesion("Cocinero", "Cocinar comida", 2)


const arregloProfesiones = [profesionSastre, profesionCocinero, profesionDuplicada]

//SELECT *
for (let index = 0; index < arregloProfesiones.length; index++) {
    const elementoProfesiones = arregloProfesiones[index];
    console.log(elementoProfesiones)
    const concatenado =index.toString() + " - " + elementoProfesiones.nombre + " se dedica a " + elementoProfesiones.descripcion
    console.log(concatenado)
}

console.log("----FOREACH----")

const resultado = arregloProfesiones.forEach((elemento, index) => {
    console.log(elemento)
    const concatenado = index.toString() + " - " + elemento.nombre + " se dedica a " + elemento.descripcion
    console.log(concatenado)
    return concatenado
})

console.log("----MAP----")

const resultadoMap = arregloProfesiones.map((elemento, index) => {
    console.log(elemento)
    const concatenado = index.toString() + " - " + elemento.nombre + " se dedica a " + elemento.descripcion
    console.log(concatenado)
    return concatenado
})

console.log(resultado)
console.log(resultadoMap)


console.log(1 == "1")
console.log(1 === "1")

const resultadoFind = arregloProfesiones.find(elemento => elemento.id === 1)
const resultadoFilter = arregloProfesiones.filter(elemento => elemento.id !== 1)

console.log(resultadoFind)
console.log(resultadoFilter)
