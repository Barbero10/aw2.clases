import {Router} from 'express'
import * as controlador from './controlador.productos.mjs'
 const rutaproductos = new Router()


 rutaproductos.get('/api/v1/productos',controlador.obtenertodos)
  rutaproductos.get('/api/v1/productos',controlador.obtenerUno)

  export {rutaproductos}