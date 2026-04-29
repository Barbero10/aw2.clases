import express from 'express'

const PUERTO=3000

const app= express()


function middleware1(req,res,next){
    console.log('middleware1')
    const existeusuario=false
    if (existeusuario){
        console.log('usuario existe-> pasa ')
        return next()
    }
  console.log('usuario No existe -> NO pasa')
  res.status(403).send('usuario no registrado')
}


app.get('/',middleware1,  (req,res)=>{
    console.log('ejecucion del callback final')
    res.send('hola')
})

app.listen(PUERTO, ()=>{
    console.log(`http://localhost:${PUERTO}`)
})



