import express, { type Request, type Response } from 'express';
import cors from "cors";
import questions from './assets/questions.json' with {type: 'json'};
import answers from './assets/answers.json' with {type: 'json'};

const app = express();
const port = 8000;
const typeAnswers: typeAnswer[] | any = answers;

app.use(cors());
app.use(express.json());

interface typeAnswer {
  id: number,
  value: number
}

app.get('/api/questions', (req: Request, res: Response) => {
  res.json(questions)
})

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