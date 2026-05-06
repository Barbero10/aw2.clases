import express from'express'
import {eliminarproducto, obtenerproductos, obtenerproductosPorId}from './funciones.mjs'

const PUERTO =3000

const app=express()

app.get('/api/v1/productos',obtenerproductos)

app.get('/api/v1/productos/:id',obtenerproductosPorId)


app.delete('/api/v1/productos/:id',eliminarproducto)

app.post('/api/v1/productos',altaproductos)


app.listen(PUERTO)


