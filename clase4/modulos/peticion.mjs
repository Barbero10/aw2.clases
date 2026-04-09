async function pedirNUEVO()
{
const respuesta=await fetch('https://69d6777f1c120e733cce45b1.mockapi.io/PRODUCTOS')
    const alumnos= await respuesta.json()
    
    return alumnos.alumnosmap(alumnos=>({
        id:alumnos.id,
        email: alumnos.email,
        name:  alumnos.name
    }))
}
export {pedirNUEVO}