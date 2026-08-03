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
  {
    id: 1,
    text: 'Столица Норвегии',
    options: [
      {
        id: 1,
        city: 'Рейкьявик'
      },
      {
        id: 2,
        city: 'Осло'
      },
      {
        id: 3,
        city: 'Лондон'
      },
    ]
  },
  {
    id: 2,
    text: 'Столица Бельгии',
    options: [
      {
        id: 1,
        city: 'Брюссель'
      },
      {
        id: 2,
        city: 'Рейкъявик'
      },
      {
        id: 3,
        city: 'Брюгге'
      },
    ],
  },
  {
    id: 3,
    text: 'Столица Германии',
    options: [
      {
        id: 1,
        city: 'Бостон'
      },
      {
        id: 2,
        city: 'Мюнхен'
      },
      {
        id: 3,
        city: 'Берлин'
      },
    ],
  },
  {
    id: 4,
    text: 'Столица США',
    options: [
      {
        id: 1,
        city: 'Мехико'
      },
      {
        id: 2,
        city: 'Нью-Йорк'
      },
      {
        id: 3,
        city: 'Вашингтон'
      },
    ],
  }
]

const answers = [
  { id: 1, value: '2' },
  { id: 2, value: '1' },
  { id: 3, value: '3' },
  { id: 4, value: '3' },
]

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