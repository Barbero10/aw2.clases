import express from 'express'
//import  {productos} from './productos.mjs'
import {rutaproductos} from './modulos/productos/rutas.productos.mjs'


const PUERTO=3000

const app = express ()


app.use(rutaproductos)


app.listen(PUERTO)

