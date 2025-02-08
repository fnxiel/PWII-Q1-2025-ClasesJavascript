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

    //INSERT
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

    //UPDATE 
    modificarProfesion(id, nuevaDescripcion){
        const resultado = this.profesiones.find((elemento, i) => elemento.id === id)
        resultado.descripcion = nuevaDescripcion
        console.log("Registro modificado")
        console.log(resultado)
        return resultado
    }
    //Pendiente de modificar con spread

    //DELETE
    eliminarProfesion(id){
        this.profesiones = this.profesiones.filter((elemento) => elemento.id !== id)
        console.log("Registro eliminado")
    }

    //SELECT
    imprimirProfesiones(){
        const resultado = this.profesiones.forEach((elemento, index) => {
            //console.log(elemento)
            const concatenado = index.toString() + " - " + elemento.nombre + " se dedica a " + elemento.descripcion
            console.log(concatenado)
            return concatenado
        })
        return resultado
    }

    //SELECT WHERE
    buscarProfesion(id){
        const resultadoFilter = this.profesiones.filter(elemento => elemento.id === id)
        console.log(resultadoFilter)
        return resultadoFilter
    }


    get nombreAlrevez(){
        let arregloString = this.nombreCompleto.split('')
        arregloString = arregloString.reverse()
        return arregloString.join('')
    }
}

module.exports = Persona