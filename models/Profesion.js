class Profesion{
    constructor(nombre, descripcion, id){
        this.id = id
        this.nombre = nombre
        this.descripcion = descripcion
        this.fechaProfesionalizacion = new Date()
    }
}

module.exports = Profesion