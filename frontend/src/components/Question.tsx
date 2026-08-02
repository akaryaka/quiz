import { useState, useEffect } from "react";
import QuestionsLayout from "./QuestionsLayout";

function Question() {
  const [data, newData] = useState([]);
  const [question, setQuestion] = useState('Рейкьявик');
  const [length, setLength] = useState(0)
  const [btnView, setBtnView] = useState(true);
  const [index, setIndex] = useState(0);
  const [countAnswer, setCountAnswer] = useState(0);
  const [btnResultView, setBtnResultView] = useState(false);
  const questionArr = data[index];
  const formStyles = 'flex flex-col justify-center';
  const btnStyles = 'cursor-pointer text-[23px] text-[#fab397] text-center';

  const handleChange = (event: any) => {
    setQuestion(event.target.value);
  }

  const handleSubmit = async (event: any) => {
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
        if(result.answer) {
          setCountAnswer(number => number+1);
        }
        
      }
    } catch (error) {
      console.log(error);
    }

    if (index < length-1) {
      setIndex(index + 1);
    } else {
      setBtnView(false)
      event.preventDefault();
      setBtnResultView(true)
    }
  }

  function viewRes() {
    alert(countAnswer)
  }

  useEffect(() => {
    fetch('http://localhost:8000/api/questions')
      .then(res => res.json())
      .then(data => {
        newData(data)
        setLength(data.length)
      })
      .catch(err => console.error(err));
  }, []);
  
  return(
    <>
      <form onSubmit={handleSubmit} className={formStyles}>
        <QuestionsLayout options={questionArr?.options} questionId={questionArr?.id} length={data.length} key={questionArr?.id} id={questionArr?.id} text={questionArr?.text} />
        {btnView ? <button className={btnStyles}>ответить</button> : null}
      </form>
      {btnResultView ? <button onClick={viewRes}>результат</button> : null}
    </>
  )
}

export default Question