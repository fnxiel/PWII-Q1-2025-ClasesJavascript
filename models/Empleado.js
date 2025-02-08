const Persona = require("./Persona");

class Empleado extends Persona{
    constructor(salario = 10000){
        super()
        this.salario = 10000
        this.puesto = "Programador"
        this.horasTrabajadas = 0
    }

    trabajar(cantidadHorasTrabajadas){
        this.horasTrabajadas = this.horasTrabajadas + cantidadHorasTrabajadas
        console.log(`He trabajado en total ${this.horasTrabajadas}`)
    }
}

module.exports = Empleado