import { useState, useEffect } from "react";
import QuestionsLayout from "./QuestionsLayout";

function Question() {
  const [data, newData] = useState([]);
  const [question, setQuestion] = useState('Рейкьявик');
  const [btnView, setBtnView] = useState(true);
  const [index, setIndex] = useState(0);
  const questionArr = data[index];

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
      }
    } catch (error) {
      console.log(error);
    }

    if (index < data.length - 1) {
      setIndex(index + 1);
    } else {
      setBtnView(false);
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
      <form onSubmit={handleSubmit} className="flex flex-col justify-center">
        <QuestionsLayout options={questionArr?.options} questionId={questionArr?.id} length={data.length} key={questionArr?.id} id={questionArr?.id} text={questionArr?.text} />
        {btnView ? <button className="cursor-pointer text-[23px] text-[#fab397] text-center">ответить</button> : null}
      </form>
    </>
  )
}

export default Question