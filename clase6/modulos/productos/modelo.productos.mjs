import  {productos} from "../../productos.mjs";

export function obtenertodos(){
    //haria una consulta en una BD

    return productos.datos
}

export function obtenerUno(id){
    const productosFiltrados=productos.datos.filter((producto)=>{
        return Number (producto.id)=== id
    })
    return productosFiltrados
}