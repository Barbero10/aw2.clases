import http from 'node:http'
import fsp from 'node:fs/promises'
import path from'node:path'
const app = http.createServer(async(peticion,respuesta)=>{//esa funcion se va ejecutar cuando haya una petición 
//console.log('peticion recibida')
//console.log(peticion.url)

if(peticion.method === 'GET'){


 if (peticion.url === '/')
    respuesta.statusCode= 200
    return respuesta.end('estas en la raiz')
 }

 if(peticion.url ==='/suma'){
     respuesta.statusCode= 200
    const resultado = (5 + 3).toString()
    return respuesta.end(resultado)
 }

if(peticion.method === 'POST'){
    if(peticion.url === '/proceso-formulario'){
    //console.log('post')
       // respuesta.on('data',(datos)=>{

      //  }
 
      //})

      return respuesta.end('se hizo una peticion con verbo post')
}

if (peticion.url === '/guardar-datos'){
    const respuestaApi= await fetch ('https://api.escuelajs.co/api/v1/users')
    const datosApi =await respuestaApi.text()
    try{
    await fsp.writeFile(path.join('./datosApi.txt'),datosApi)
    respuesta.statusCode = 201
    
    return respuesta.end('datos-guardados')
     } catch(e){
        respuesta.statusCode =500
         return respuesta.end ('error al servidor ')
     }

}


}

//fallback
respuesta.statusCode = 404
respuesta.end ('resurso no encontrado')


//respuesta.end('hi servidor')//siempre en ultimom lugar, no se puede ejecutar dos veces en la misma peticion )))))

})

app.listen(3000,()=>{
    console.log('servidor corriendo en http://localhost:3000')
})
