//el controlador vincula el modelo con la vista
 import * as modelo  from './modeloproductos.mjs'
import * as vista from "./vista.productos.mjs"

 //modelo es un espacio de nombres

 export async function obtenerTodos(req, res) {
    const productosDatos = await modelo.obtenerTodos() // <------ me trae todo
    const vistaProductos = vista.obtenerTodos(productosDatos) // <---- arreglo
    res.json(vistaProductos)
}

export async function obtenerUno(req, res) {
    const idProducto = Number(req.params.id)
    const productosDatos = await modelo.obtenerUno(idProducto) // retorna un arreglo
    const resultado = vista.obtenerUno(productosDatos) 



    if (productosDatos.length > 0) {
        res.json(resultado)
    } else {
        res.status(404).json ({mensaje: `Producto con id ${idProducto} no esta`})
    }
}


export async function eliminarUno(req, res) {
    const idProducto = Number(req.params.id)
    const productosDatos = await modelo.eliminarUno(idProducto) // retorna un arreglo
    const resultado = vista.eliminarUno(productosDatos) 



    if (productosDatos.length > 0) {
        res.json(resultado)
    } else {
        res.status(404).json ({mensaje: `Producto con id ${idProducto} no esta`})
    }
}