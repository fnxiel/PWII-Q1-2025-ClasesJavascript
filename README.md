# Gestion de profesionales

Esta aplicacion permite gestionar las profesiones de un grupo de personas

## Requerimientos

Esta aplicacion requiere la version de **node 22** o superior.

## Para ejecutar

```bash
npm i
npm start
```

# Ejemplo de gestion de profesionales

```javascript
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
```

### Tabla de versiones

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |