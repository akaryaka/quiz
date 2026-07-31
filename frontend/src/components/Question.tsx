import { useState, useEffect } from "react";

function Question() {
  const [data, newData] = useState([]);
  const [question, setQuestion] = useState('Рейкьявик');
  const [res, newRes] = useState(Object);

  const handleChange = (event: any, id) => {
    setQuestion(event.target.value)
  }

  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    try {
      // заменить на axios
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
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetch('http://localhost:8000/api/questions')
      .then(res => res.json())
      .then(data => {
        newData(data)
      })
      .catch(err => console.error(err));
  }, []);

  return(
    <>
      {data.map(question => (
        <>
          <div key={question.id}>
            <h2 >{question.text}</h2>
            <select name={question.id} onChange={handleChange} id="questions-select">
              {question.options.map(option => <option key={option.id} value={option.id}>{option.city}</option>)}
            </select>
            <button onClick={handleSubmit}>ответить</button>
          </div>
        </>
      ))}
    </>
  )
}

export default Question