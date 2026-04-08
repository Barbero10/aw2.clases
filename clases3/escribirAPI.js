import fsp from 'node:fs/promises'
import path from 'node:path'

try{
const respuesta=await  fetch('https://69d6777f1c120e733cce45b1.mockapi.io/PRODUCTOS')
const Productos= await respuesta.json()

const ruta=path.join('./api.json')

const contenido = JSON.stringify(Productos,null,4)

await fsp.writeFile(ruta,contenido)
//console.log(Productos)
}catch(e){
    console.log(e)
}