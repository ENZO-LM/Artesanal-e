import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient({
    log: ["query", "info", "warn"],
});

const app = express();

const PORT = 3333

app.use(express.json());


app.post('/users', async (req, res) => {
    const user = req.body;

    try {
        const result = await prisma.pedidos.create({
            data: {
                nome: user.nome,
                telefone: user.telefone,
                endereco: user.endereco,
                quantidade: parseFloat(user.quantidade),
            },
        });
    
        res.status(201).json(result);
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error?.message);
    }
});

app.delete('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;

        await prisma.pedidos.delete({
            where: {
                id: parseInt(id),
            },
        });

        res.status(204).send().end();
    } catch (error) {
        res.status(500).send(error?.message).end();
    }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})