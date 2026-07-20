import { useEffect, useState } from 'react';
// import axios from 'axios';
import './App.css'

function App() {
  const [data, newData] = useState([]);

  const handleSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    console.log('hello');
  }
  // заменить на axios
  useEffect(() => {
    fetch('http://localhost:8000/api/questions')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        
        newData(data)})
      .catch(err => console.error(err));
  }, []);

  
  return (
    <>
      <h1>Квиз</h1>
      <form onSubmit={handleSubmit} action="/">
        <label htmlFor="">Вопрос 1. Столица Норвегии</label>
        <select name="" id="">
          <option value="1">Рейкьявик</option>
          <option value="1">Осло</option>
          <option value="1">Лондон</option>
        </select>
        <input type="submit" value='ответить'/>
        {/* {data} */}
      </form>
    </>
  )
}

export default App