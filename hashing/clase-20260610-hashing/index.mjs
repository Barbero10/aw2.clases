import express from 'express';
import pool from './conexion.bd.mjs';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcryptjs';

const PUERTO = 3000;

////////////////

////////////////
const app = express();
app.use(express.json())
app.use(express.urlencoded({extend:true}))

//admin CRUD

app.use( './admin',express.static('./fronts/front-admin'))

//LOGIN
app.use('./login',express.static('./fronts/front-login'))


app.post('/autenticar',(req,res)=>{
    //actividad 5 
    //general el id con nanoid
})

app.post('./registrar', async( req,res)=>{
     console.log(req.body)//<< tanto json y urlencoded se guardan aqui

     //control
    const {usuario,pass}=req.body

    //control
    if(!usuario || !pass){
        return res.status(400).json({
            mensaje:'Datos incompletos'
        })
    }
    //3-Encriptamos clave
    const salt = await bcrypt.genSalt(10);
const hash = await bcrypt.hash(pass,salt);

 //4 guardamos BD

 const resultado =await pool.query(
    `INSERT INTO usuarios
    (username,password_hash)
    VALUES 
    ($1,$2)
    RETURNING
    Id,username`,

     res.json({
        mensaje:'Registro'
     })
)})

app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});