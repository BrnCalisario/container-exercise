const express = require('express')
const { PrismaClient } = require('@prisma/client')

const PORT = 3000;
const HOST = '0.0.0.0';

const prisma = new PrismaClient();
const app = express();

app.use(express.json())

app.get('/jogo', async (req, res) => {
    const jogos = await prisma.jogo.findMany()
    res.json(jogos)
})

app.post('/jogo', async (req, res) => {
    const { nome, dataLancamento, categoriaId } = req.body

    const jogo = await prisma.jogo.create({
        data: {
            nome,
            dataLancamento,
            categoriaId,
        },
    })
    res.json(jogo)
})


app.get('/categoria', async (req, res) => {
    const categorias = await prisma.categoria.findMany()
    res.json(categorias)
})

app.post('/categoria', async (req, res) => {
    const { categoria } = req.body
    const category = await prisma.categoria.create({
        data: {
            categoria,
        },
    })
    res.json(category)
})



app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, HOST);



// async function main() {
//     const allJogos = await prisma.categoria.findMany()
//     console.log(allJogos)


//     await prisma.categoria.create({
//         data: {
//             categoria: 'Aventura',
//         },
//     })
// }

// main()
//     .then(async () => {
//         await prisma.$disconnect()
//     })
//     .catch(async (e) => {
//         console.error(e)
//         await prisma.$disconnect()
//         process.exit(1)
//     })
