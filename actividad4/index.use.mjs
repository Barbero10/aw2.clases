import express from 'express'

const PUERTO=3000

const app= express()


function middleware1(req,res,next){
    console.log('middleware1')

       next()
    }

app.use(middleware1)


app.get('/',  (req,res)=>{
    console.log('ejecucion del callback final')
    res.send('hola ruta')
})
app.get('/saludo',  (req,res)=>{
    console.log('ejecucion del callback final')
    res.send('hola /saludo')
})

app.listen(PUERTO, ()=>{
    console.log(`http://localhost:${PUERTO}`)
})



