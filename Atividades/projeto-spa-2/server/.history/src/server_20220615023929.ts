import { prisma } from "./prisma";
import express from "express"
import { type } from "os";

const app = express();
app.use(express.json());

// POST : CADASTRAR
// GET : BUSCAR
// PUT : ATUALIZAR INFORMAÇÕES
// PATCH :  ATUALIZAR UMA INFORMAÇÃO ÚNICA
// DELETE 



app.post("/feedbacks", async (req, res) => {
  prisma.feedback.create({
    data:{
      type: req.body
    }
  })
  return req.body;
})

app.listen(3333, () => {
  console.log("HTTP SERVER RUNNING");
});