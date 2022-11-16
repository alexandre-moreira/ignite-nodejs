const { response } = require('express');
const express = require('express');

const app = express();
app.use(express.json())
/**
    * GET  - Buscar uma informação dentro do servidor
    * POST - Inserir uma informação no servidor
    * PUT  - Alterar uma informação no servidor
    * PATCH - Alterar uma informação específica no servidor
    * DELETE - Deletar uma informação no servidor
*/

/*
    * Tipos de parametro
    *
    * Route Params => Identificar um recurso editar|deletar|busacar
    * Query Params => Paginacao | Filtro
    * Body Params  => Os objetos inserção | alteração (JSON)
*/

app.get("/courses", (request, response) => {
    const query = request.query;
    console.log(query)
    return response.json(["Front End", "Back End", "Mobile"])
})

app.post("/courses", (request, response) => {
    const body = request.body;
    console.log(body)
    return response.json(["Front End", "Back End", "Mobile", "Scrum Master"])
})

app.put("/courses/:id", (request, response) => {
    const {id} = request.params;
    console.log(id)
    return response.json(["Front End X", "Back End", "Mobile", "Scrum Master"])
})

app.patch("/courses/:id", (request, response) => {
    return response.json(["Front End X", "Back End Z", "Mobile", "Scrum Master"])
})

app.delete("/courses/:id", (request, response) => {
    return response.json(["Front End X", "Back End Z", "Scrum Master"])
})

app.listen(3333);