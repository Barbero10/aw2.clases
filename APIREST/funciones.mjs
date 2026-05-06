import productos from "./productos.mjs" ;

export function obtenerproductos(req,res){
    res.json(productos)
}

export function obtenerproductosPorId(req,res){
    
    
const id_producto=Number(req.params.id)


    productos.filter((producto)=>{
        return id_producto === Number (producto.id)
    })

if(productosFiltrados.length > 0 ){
    res.json(productosFiltrados)
}else {
    const respuesta={
        mensaje:'producto no encontrado'
    }
     res.status(404).json(respuesta)
}

}

export function altaproductos(req,res){
 const nuevoproducto = req.body
 productos.push(nuevoproducto)
const respuesta ={
    mensaje:'producto dado de alta'
}
res.json(respuesta)
}

 export function eliminarproducto(req,res){
    const id_producto= Number(req.params.id)


    const productosFiltrados=productos.filter((producto)=>{
        return id_producto !==Number (producto_id)
    })

    productos.length =0
    productos.push(productosFiltrados)

    const respuesta = {
        mensaje:'producto eliminado '

    }
    res.json(respuesta)
 }
