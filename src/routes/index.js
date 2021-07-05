const express = require("express")
const router = express.Router()

router.get("/", (request,response) => {
    response.status(200).send ({
            "titulo": "To-do Api - Reprograma",
            "version": "1.0.0",
            "mensagem": "Bem vinda API de tarefas"
        })
})

module.exports = router