import express from "express";

const porta = process.env.APP_PORT;
const app = express();

function listarTemas(req,res){
    res.send("oie");
}

app.get("/teste", listarTemas);

function resposta(){
    console.log(`Rodando em http://localhost:${porta}`);
}

app.listen(porta, resposta);
