var moment = require('moment')

class Persona{
    //propiedades - atributos    
    constructor(nombre = 'Nombre generico', apellido = 'Apellido generico', edad = 18, direccion){
        this.nombre = nombre
        this.apellido = apellido
        //this.nombreCompleto = this.nombre + ' ' + this.apellido
        this.edad = edad
        this.direccion = direccion
        this.profesiones = []
        this.fechaCreacionRegistro = new Date()
    }
    //metodos - funciones
    get nombreCompleto(){
        return `${this.nombre} ${this.apellido}`
    }
    saludar(){
        console.log('Me llamo ', this.nombreCompleto)
    }
    decirEdad(){
        console.log('Mi edad es', this.edad)
    }
    presentarse(nombreOtraPersona){
        console.log('Hola ', nombreOtraPersona)
        this.saludar()
        this.decirEdad()
    }

    agregarProfesion(profesion){
        console.log(
            "Me he profesionalizado en ",
            profesion.nombre, 
            "el ",
            moment(profesion.fechaProfesionalizacion).format('DD-MM-YYYY'), 
            "y me dedico a ", profesion.descripcion
        )
        this.profesiones.push(profesion)
    }

    get nombreAlrevez(){
        let arregloString = this.nombreCompleto.split('')
        arregloString = arregloString.reverse()
        return arregloString.join('')
    }
}

module.exports = Persona