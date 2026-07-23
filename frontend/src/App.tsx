import { useEffect, useState } from 'react';
import Question from './components/Question';


function App() {
  const [data, newData] = useState([]);
  const [res, newRes] = useState(Object);
  const [question, setQuestion] = useState('Рейкьявик');

  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries()); 
    try {
      const response = await fetch('http://localhost:8000/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), 
      })  
      const result = await response.json();

      if (response.ok) {
        console.log(result);
      }
    } catch(error) {
      console.log(error);
    }
  }

  const handleChange = (event: any, id) => {
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
        {data.map(question => (
          <>
            <h2 key={question.id}>{question.text}</h2>
            <select name={question.id} onChange={handleChange} id="questions-select">
              {question.options.map((option, key) => <option key={key} value={key}>{option}</option>)}
            </select>
          </>
        ))}
        <Question />
        <input type="submit" value='ответить'/>
      </form>
    </>
  )
}

export default App