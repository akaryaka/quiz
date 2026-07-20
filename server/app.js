import express, { text } from "express";
import cors from "cors";

const port = 8000;
const app = express();

app.use(cors());
app.use(express.json());

const questions = [
  { id: 1, text: 'Вопрос 1. Столица Норвегии',  options: ['Рейкьявик', 'Осло', 'Лондон']}
]

app.get('/api/questions', (req, res) => {
  res.json(questions)
})

app.listen(port);