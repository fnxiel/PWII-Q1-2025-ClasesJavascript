const Persona = require('./models/Persona')
const Profesion = require('./models/Profesion')

/// Con clases
let personac = new Persona()
personac.nombre = 'Luke'
personac.apellido = 'Skywalker'
personac.direccion = 'Tatooine'
personac.edad = 25

let personac2 = new Persona()
personac2.nombre = 'Darth'
personac2.direccion = 'Tatooine'
personac2.edad = 50

let personac3 = new Persona('Leia', 'Organa', 25, 'Naboo')

console.log(personac, personac2, personac3)
//personac.saludar()
//personac2.saludar()
//personac3.saludar()

personac3.presentarse(personac.nombreCompleto)

let profesionSastre = new Profesion("Sastre", "Fabricar ropa", 1)
let profesionCocinero = new Profesion("Cocinero", "Cocinar comida", 2)

personac3.agregarProfesion(profesionSastre)
personac3.agregarProfesion(profesionCocinero)

console.log(personac.nombreAlrevez)

console.log("-----Buscar profesion 2----")
personac3.buscarProfesion(2)
console.log("----Imprimir todas las profesiones-----")
personac3.imprimirProfesiones()
let profesionMusico= new Profesion("Musico", "Tocar musica", 3)
console.log("----Agregar nueva profesion-----")
personac3.agregarProfesion(profesionMusico)
console.log("----Modificar la profesion 3-----")
personac3.modificarProfesion(3, "Ejecutar musica")
console.log("----Eliminiar la profesion 2-----")
personac3.eliminarProfesion(2)
console.log("----Imprimir todas las profesiones-----")
personac3.imprimirProfesiones()

//Carlos = Alumnos
    //Curso
    //Matricula
//Estephany = Mobiliario
    //Salon
    //Tipo de mobiliario
//Jessica = Vehiculos
    //Tipos de vehiculo
    //Fabricantes
//Johan = Restaurantes
    //Platillos
    //Empleados
//Paola = Supermercado
//Stephen = Factura
    //Productos
    //Clientes