import express from 'express'

const app = express()
const PUERTO = 4000

const codigoCorrecto = 5183

function middlewareCodigo(req, res, next) {
    const codigoParam = Number(req.params.codigo)

    if (codigoParam === codigoCorrecto) {
        return next()
    }

    return res.status(400).json({
        mensaje: "El código es incorrecto"
    })
}

app.get('/:codigo', middlewareCodigo, (req, res) => {
    res.status(200).json({
        mensaje: "El código es correcto"
    })
})

app.listen(PUERTO, () => {
    console.log(`http://localhost:${PUERTO}`)
})