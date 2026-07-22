import express from "express";
import cors from "cors";
import { Pool } from "pg";

const port = 8000;
const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'user',
  host: 'localhost',
  database: 'db',
  password: 'bd-pass',
  port: 5432, // стандартный порт PostgreSQL
});

const questions = [
  { id: 1, text: 'Вопрос 1. Столица Норвегии',  options: ['Рейкьявик', 'Осло', 'Лондон'], status: true},
  // { id: 2, text: 'Вопрос 2. Столица Бельгии',  options: ['Брюссель', 'Рейкъявик', 'Брюгге'], status: false },
  // { id: 3, text: 'Вопрос 3. Столица Германии',  options: ['Бостон', 'Мюнхен', 'Берлин'], status: false}
]

const answers = [
  { id: 1, value: 2}
]

function checkAnswer(questions) {
  
}

app.get('/api/questions', (req, res) => {
  res.json(questions)
})

app.post('/api/submit', (req, res) => {  
  res.status(200).json(
    {
      id: 1,
      questionApi: req.body.question
    }
  );
})

app.listen(port);