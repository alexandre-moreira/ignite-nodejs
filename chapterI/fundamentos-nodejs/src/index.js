const { response } = require('express');
const express = require('express');

const app = express();
/**
    * GET  - Buscar uma informação dentro do servidor
    * POST - Inserir uma informação no servidor
    * PUT  - Alterar uma informação no servidor
    * PATCH - Alterar uma informação específica no servidor
    * DELETE - Deletar uma informação no servidor
*/

app.get("/courses", (request, response) => {
    return response.json(["Front End", "Back End", "Mobile"])
})

app.post("/courses", (request, response) => {
    return response.json(["Front End", "Back End", "Mobile", "Scrum Master"])
})

app.put("/courses/:id", (request, response) => {
    return response.json(["Front End X", "Back End", "Mobile", "Scrum Master"])
})

app.patch("/courses/:id", (request, response) => {
    return response.json(["Front End X", "Back End Z", "Mobile", "Scrum Master"])
})

app.delete("/courses/:id", (request, response) => {
    return response.json(["Front End X", "Back End Z", "Scrum Master"])
})

app.listen(3333);