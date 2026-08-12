import express from "express";
import cors from "cors";
import { Pool } from "pg";
import questions from './assets/questions.json' with {type: 'json'};
import answers from './assets/answers.json' with {type: 'json'};

const port = 8000;
const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'quiz',
  password: 'admin@123',
  port: 5432,
});

let count = 0

app.get('/api/questions', (req, res) => {
  res.json(questions)
})

app.post('/api/submit', (req, res) => {
  res.status(200).json(
    {
      idAnswer: Number(Object.keys(req.body)),
      answer: checkAnswer()
    }
  );

  function checkAnswer() {
    let answerCheck = false;

    if (answers[String(Object.keys(req.body) - 1)].value == String(Object.values(req.body))) {
      answerCheck = true;
    }

    return answerCheck;
  }
})

app.listen(port);