try{
const respuesta=await  fetch('https://69d6777f1c120e733cce45b1.mockapi.io/PRODUCTOS')
const Productos= await respuesta.json()
console.log(Productos)
}catch(e){
    console.log(e)
}