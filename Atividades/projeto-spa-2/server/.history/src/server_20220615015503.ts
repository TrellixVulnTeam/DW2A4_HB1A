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
  const { type, comment, screenshot } = req.body;

  const await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    }
  })
  return res.status(201)
});

app.listen(3333, () => {
  console.log("HTTP SERVER RUNNING");
});