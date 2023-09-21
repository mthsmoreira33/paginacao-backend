import express from "express";
let id = 0;
const memos = [];

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        sucess: true,
        message: "GET com sucesso"
    });
});

app.post('/memo', (req, res) => {
    const { title, description } = req.body;
    const newMemo = {
        memoId: id + 1,
        title,
        description
    }

    memos.push(newMemo);

    id++;

    res.status(201).json({
        data: newMemo,
        sucess: true,
        message: "Memo created successfully"
    })
});

app.get('/memo', (req,res) => {
    const { page, limit } = req.query;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const resultMemos = memos.slice(startIndex, endIndex);


    res.status(200).json({
        data: resultMemos,
        sucess: true,
        message: "GET ok"
    })
});

app.listen(3000, () => {
    console.log('Aplicação rodando na porta 3000');
});
