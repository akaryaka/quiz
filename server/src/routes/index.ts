import { type Express, type Request, type Response } from 'express';
import questions from './../assets/questions.json' with {type: 'json'};
import answers from './../assets/answers.json' with {type: 'json'};
import type { typeAnswer } from '../types/index.ts';
import { pool } from '../config/db.ts';

const typeAnswers: typeAnswer[] | any = answers;

export const routes = (app: Express) => {
  app.get('/api/questions', (req: Request, res: Response) => {
    res.json(questions)
  })

  app.get('/test-db', async (req: Request, res: Response) => {
    try {
      const result = await pool.query('SELECT * from questions;');
      res.json({ success: true, time: result.rows }); 
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
}