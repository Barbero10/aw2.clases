import express from 'express'
//import  {productos} from './productos.mjs'
import * as controlador from './modulos/productos/controlador.productos.mjs'
const PUERTO=3000

const app = express ()

app.get('/api/v1/productos',controlador.obtenertodos)
app.get('/api/v1/productos/:id',controlador.obtenerUno)


app.listen(PUERTO)

