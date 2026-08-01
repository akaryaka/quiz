import { useState, useEffect } from "react";
import QuestionsLayout from "./QuestionsLayout";

function Question() {
  const [data, newData] = useState([]);
  const [question, setQuestion] = useState('Рейкьявик');
  // const [res, newRes] = useState(Object);

  const handleChange = (event: any) => {
    setQuestion(event.target.value);
    
  }

  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault();
    if (index < data.length) {
      setIndex(index + 1);
    } 
   
    // const formData = new FormData(event.target);
    // const data = Object.fromEntries(formData.entries());
    // try {
    //   // заменить на axios
    //   const response = await fetch('http://localhost:8000/api/submit', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    //   })
    //   const result = await response.json();

    //   if (response.ok) {
    //     console.log(result);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  }

  useEffect(() => {
    fetch('http://localhost:8000/api/questions')
      .then(res => res.json())
      .then(data => {
        newData(data)
      })
      .catch(err => console.error(err));
  }, []);


  const [index, setIndex] = useState(0);
  const questionArr = data[index];

  console.log(data[index]?.options);
  

  return(
    <>
      <QuestionsLayout options={questionArr?.options} questionId={questionArr?.id} length={data.length} key={questionArr?.id} id={questionArr?.id} text={questionArr?.text} />
      <button onClick={handleSubmit}>ответить</button>
    </>
  )
}

export default Question