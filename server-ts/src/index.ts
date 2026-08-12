import express, { type Request, type Response } from 'express';
import cors from "cors";
import { Pool } from "pg";
import questions from './assets/questions.json' with {type: 'json'};
import answers from './assets/answers.json' with {type: 'json'};

const app = express();
const port = 8000;
const typeAnswers: typeAnswer[] | any = answers;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'quiz',
  password: 'admin@123',
  port: 5432,
});

interface typeAnswer {
  id: number,
  value: number
}

app.use(cors());
app.use(express.json());

app.get('/api/questions', (req: Request, res: Response) => {
  res.json(questions)
})

app.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT * from questions;');
    res.json({ success: true, time: result.rows[0] });
    console.log(req.body);
    
  } catch (err) {
    console.error(err);
    res.status(500).send('Ошибка подключения к БД');
  }
});

app.post('/api/submit', (req: Request, res: Response) => {
  res.status(200).json(
    {
      idAnswer: Number(Object.keys(req.body)),
      answer: checkAnswer()
    }
  );

  function checkAnswer(): boolean {
    let answerCheck: boolean = false;
    let questionId: number = Number(Object.keys(req.body))-1;
  
    if ((typeAnswers[questionId].value) === Number(Object.values(req.body))) {
      answerCheck = true;
    }

    return answerCheck;
  }
})


app.listen(port);