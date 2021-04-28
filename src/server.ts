import express, { response } from "express";

const app = express();

/**
 * GET = Buscas
 * POST = Criação
 * PUT = Alteração
 * 
 */

app.get("/", (request, response) => {
    return response.json({
        message: "Olá NLW#5"
    });
});

app.post("/", (request, response) => {
    return response.json({
        message: "Usuário salvo com sucesso!"
    })
});

app.listen(3333, () => console.log("Server is running on port 3333"));


















// yarn add express
// yarn add @types/express -D
// yarn add typescript -D
// yarn tsc --init
// colocar false no strict do tsconfig.json
// yarn add ts-node-dev -D
//
// yarn dev //iniciar servidor
//
// yarn add typeorm reflect-metadata sqlite3