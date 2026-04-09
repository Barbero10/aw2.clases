import fsp from 'node:fs/promises'
    import path from 'node:path'

async function prueba (nuevoArray){
    
    try{
    const respuesta=await fetch('https://69d6777f1c120e733cce45b1.mockapi.io/PRODUCTOS')
    const alumnos= await respuesta.json()
    
    const nuevoArray =alumnos.map(alumnos=>({
        id:alumnos.id,
        email: alumnos.email,
        name:  alumnos.name
    }))
    
    const ruta=path.join('./api.json')
    
    const contenido = JSON.stringify(nuevoArray,null,4)
    
    await fsp.writeFile(ruta,contenido)
    //console.log(Productos)
    }catch(e){
        console.log(e)
    }
    
       
    
}






































