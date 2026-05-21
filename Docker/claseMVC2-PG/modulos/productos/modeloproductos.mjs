
import pool from '../../conexion.bd.mjs'

export async function obtenerTodos() {
  const resultado =await pool.query('SELECT * FROM productos')
  console.log(resultado)
  return resultado.rows
  
  //arreglo
}

export async function obtenerUno(id) {
  //filtra el id
 const resultado =pool.query ('SELECT * FROM productos WHERE id=$1',[id])
 return resultado.rows
  
}


export async function eliminarUno(id) {
   const resultado =pool.query ('SELECT * FROM productos WHERE id=$1 RETURNING id,producto,precio',[id])
     console.log(resultado)
 return resultado.rows
}