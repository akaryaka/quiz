import express, { text } from "express";
import cors from "cors";

const port = 8000;
const app = express();

app.use(cors());
app.use(express.json());

const questions = [
  { id: 1, text: 'Вопрос 1. Столица Норвегии',  options: ['Рейкьявик', 'Осло', 'Лондон'], status: true},
  { id: 2, text: 'Вопрос 2. Столица Бельгии',  options: ['Брюссель', 'Рейкъявик', 'Брюгге'], status: false },
  { id: 3, text: 'Вопрос 3. Столица Германии',  options: ['Бостон', 'Мюнхен', 'Берлин'], status: false}
]

app.get('/api/questions', (req, res) => {
  res.json(questions)
})

app.post('/api/submit', (req, res) => {
  // console.log(req.body);
   res.status(200).json({ 
      success: true, 
      message: 'Данные успешно сохранены!',
      receivedData: req.body 
  });
})

app.listen(port);