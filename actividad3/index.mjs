import http from 'node:http'
import fsp from 'node:fs/promises'
import path from 'node:path'
const PORT = 3000
const filePath = path.join('./usuarios.json')

const app = http.createServer(async (peticion, respuesta) => {

  try {

    if (peticion.method === 'GET') {

     if (peticion.url === '/usuarios') {

  const resFetch = await fetch('https://api.escuelajs.co/api/v1/users')
  const datos = await resFetch.json()

  await fsp.writeFile(filePath, JSON.stringify(datos, null, 2))

  const archivo = await fsp.readFile(filePath, 'utf-8')

  respuesta.statusCode = 200
  respuesta.setHeader('Content-Type', 'application/json')
  return respuesta.end(archivo)
}
      
    if (peticion.url === '/usuarios/filtrados') {
  try {
    const archivo = await fsp.readFile(filePath, 'utf-8')
    const usuarios = JSON.parse(archivo)

    const filtrados = usuarios.filter(u => u.id < 10)

    respuesta.statusCode = 200
    respuesta.setHeader('Content-Type', 'application/json')

    return respuesta.end(JSON.stringify(filtrados, null, 2))

  } catch (error) {
    respuesta.statusCode = 400
    return respuesta.end('Primero ejecutar /usuarios')
  }
}
}

    // fallback
    respuesta.statusCode = 404
    respuesta.end('Recurso no encontrado')

  } catch (error) {
    respuesta.statusCode = 500
    respuesta.end('Error interno del servidor')
  }

})

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`)
})