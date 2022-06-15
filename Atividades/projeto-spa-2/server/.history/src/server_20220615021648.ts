import { prisma } from "./prisma";
import express from "express"

const app = express();

// POST : CADASTRAR
// GET : BUSCAR
// PUT : ATUALIZAR INFORMAÇÕES
// PATCH :  ATUALIZAR UMA INFORMAÇÃO ÚNICA
// DELETE 

app.use(express.json());


app.post("/feedbacks", async (req, res) => {
  await prisma.feedback.create({
    data: {
      name: req.body.name,
      email: req.body.email,
      comment: req.body.comment,
      datatual: req.body.datatual,
      screenshot: req.body.screenshot,
    }
  })
  return res.status(201).json;
})

app.listen(3333, () => {
  console.log("HTTP SERVER RUNNING");
});