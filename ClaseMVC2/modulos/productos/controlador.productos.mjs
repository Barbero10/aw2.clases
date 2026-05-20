
import * as modelo from './modelo.productos.mjs'
import * as vista  from './vista.producto.mjs'
// modelo es un espacio de nombrs



export function obtenertodos(req,res){
    const datosproductos = modelo.obtenertodos()
    const vistarespuesta=vista.obtenertodos(datosproductos)
    res.json(vistarespuesta)

}

export function obtenerUno(req,res){
    const idproducto= Number(res.Params.id)
    const datosproductos= modelo.obtenerUno(idproducto)

    // si hay o no productos y responder en consecuencia
     if (datosproductos.length > 0){

    res.json(datosproductos)
     }else{
        res.status(404).json({mensaje :`producto con id ${idproducto}producto no encontrado`})
     }
}