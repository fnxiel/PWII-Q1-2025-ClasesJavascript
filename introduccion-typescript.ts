let nombre = "Luke"
console.log(nombre)
//nombre = 1
//nombre = new Date()
//nombre = true
//nombre = null
//nombre = undefined

let apellido: string | null
apellido = "Skywalker"
apellido = null

//Objetos
//Arreglos

interface IPersona{
    nombre: string
    apellido: string
    edad: number
    direccion?: string
    profesiones: []
    fechaCreacionRegistro: Date
    identidad: string
    saludar() : void
}

let persona: IPersona = {
    nombre: "Leia",
    apellido: "",
    edad: 0,
    direccion: "",
    profesiones: [],
    fechaCreacionRegistro: new Date(),
    identidad: "",
    saludar(){
        console.log("Hola")
    }
}

let persona2: IPersona = {
    nombre: "C3P0",
    apellido: "",
    edad: 0,
    direccion: "",
    profesiones: [],
    fechaCreacionRegistro: new Date(),
    identidad: "",
    saludar(){
        console.log("Que tal")
    }
}


let persona3: IPersona = {
    nombre: "R2D2",
    apellido: "",
    edad: 0,
    profesiones: [],
    fechaCreacionRegistro: new Date(),
    identidad: "",
    saludar(){
        console.log("Hey")
    }
}

let listadoAsistencia: IPersona[] = []
listadoAsistencia.push(persona, persona2, persona3, 
    {
        nombre: "",
        apellido: "",
        edad: 0,
        profesiones: [],
        fechaCreacionRegistro: new Date(),
        identidad: "",
        saludar(){
            console.log("Hey")
        }
    })

listadoAsistencia.forEach(persona => console.log(persona.nombre))

class Persona implements IPersona{
nombre: string
apellido: string
edad: number
direccion?: string|undefined
identidad: string
profesiones: []
fechaCreacionRegistro: Date

constructor(){
    this.nombre = ""
    this.apellido = ""
    this.edad = 0
    this.profesiones = []
    this.identidad = ""
    this.fechaCreacionRegistro = new Date()
}
saludar(): void {
throw new Error("Method not implemented.")
}

}