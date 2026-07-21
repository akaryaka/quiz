import { useEffect, useState } from 'react';
// import axios from 'axios';
import './App.css'

function App() {
  const [data, newData] = useState([]);
  const [question, setQuestion] = useState('Рейкьявик');

  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault();
    const dataSubmit = {
      question: question,
    };
    try {
      const response = await fetch('http://localhost:8000/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataSubmit), 
      })  
      const result = await response.json();

      if (response.ok) {
        console.log(result);
      }
    } catch(error) {
      console.log(error);
    }
  }

  const handleChange = (event: any) => {
    setQuestion(event.target.value)
  }

  // заменить на axios
  useEffect(() => {
    fetch('http://localhost:8000/api/questions')
      .then(res => res.json())
      .then(data => {
    
        newData(data)})
      .catch(err => console.error(err));
  }, []);
  
  
  return (
    <>
      <h1>Квиз</h1>
      <form onSubmit={handleSubmit} action="/api/submit" method='post'>
        {/* {data.map(question => (
          <>
            <h2 key={question.id}>{question.text}</h2>
            <select name="" id="">
              {question.options.map((option, key) => <option key={key}>{option}</option>)}
            </select>
          </>
          )
          )} */}
        <h2>Вопрос 1. Столица Норвегии</h2>
        <select name="questionsSelect" value={question} onChange={handleChange} id="questions-select">
          <option value="val1">Рейкьявик</option>
          <option value="val2">Осло</option>
          <option value="val3">Лондон</option>
        </select>
        <input type="submit" value='ответить'/>
      </form>
    </>
  )
}

export default App