import { type Express, type Request, type Response } from 'express';
import { pool } from '../config/db.ts';

export const routes = (app: Express) => {
  let questions;
  let answers: any;

  app.get('/questions-db', async (req: Request, res: Response) => {
    try {
      const result = await pool.query('SELECT * from questions;');
      res.json({ success: true, time: result.rows }); 
      questions = result.rows;
    } catch (err) {
      console.error(err);
      res.status(500).send('Ошибка подключения к БД');
    }
  });

  app.get('/answers-db', async (req: Request, res: Response) => {
    try {
      const result = await pool.query('SELECT * from answers;');
      res.json({ success: true, time: result.rows }); 
      answers = result.rows;
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

    function checkAnswer(){
      let answerCheck: boolean = false;
      let questionId: number = Number(Object.keys(req.body))-1;
    
      if ((answers[questionId].value) === Number(Object.values(req.body))+1) {
        answerCheck = true;
      }

      return answerCheck
    }
  })
}