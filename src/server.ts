import express from "express";

const app = express();

app.listen(3333, () => console.log("Server is running on port 3333"));

// yarn add express
// yarn add @types/express -D
// yarn add typescript -D
// yarn tsc --init
// colocar false no strict do tsconfig.json
// yarn add ts-node-dev -D
// yarn dev