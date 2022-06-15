import express from "express"

const app = express();

// POST : CADASTRAR
// GET : BUSCAR
// PUT : ATUALIZAR INFORMAÇÕES
// PATCH :  ATUALIZAR UMA INFORMAÇÃO ÚNICA

app.get("/users", (req, res) => {
    return res.send("Olá, mundo")

})

app.listen(3333, () =>{
    console.log("HTTP SERVER RUNNING");
});