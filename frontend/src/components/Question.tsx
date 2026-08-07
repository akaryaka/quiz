import { useState, useEffect } from "react";
import QuestionsLayout from "./QuestionsLayout";

type Props = {
  onClick: any;
  resultCount: any;
}

type Question = {
  options: any;
  id: number;
  text: string;
}

function Question({ onClick, resultCount }: Props) {
  const [data, newData] = useState([]);
  const [length, setLength] = useState(0)
  const [btnView, setBtnView] = useState(true);
  const [index, setIndex] = useState(0);
  const [btnResultView, setBtnResultView] = useState(false);
  const [answerStatic, setAnswerStatic] = useState([]);
  const questionArr: Question = data[index];
  const formStyles = 'flex flex-col justify-center';
  const btnStyles = 'cursor-pointer text-[23px] text-[#fab397] text-center';

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
        if (result.answer) {
          resultCount((number: number) => number + 1);
        }
      }
    } catch (error) {
      console.log(error);
      const responseStatic = await fetch('/questions.json', {
        // нужен get))
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      // const resultStatic = await responseStatic.json();

      const responseStaticAnswer = await fetch('/answers.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      const resultResponseStaticAnswer = await responseStaticAnswer.json();

      if (responseStatic.ok) {
        if (Number(Object.values(data)) == resultResponseStaticAnswer[Number(Object.keys(data)) - 1].value) {
          resultCount((number: number) => number + 1);
        }
      }
    }
    console.log(Number(Object.values(data)));

    if (index < length - 1) {
      setIndex(index + 1);
    } else {
      setBtnView(false)
      event.preventDefault();
      setBtnResultView(true)
    }
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

  useEffect(() => {
    fetch('/questions.json')
      .then(res => res.json())
      .then(data => {
        newData(data)
        setLength(data.length)
      })
      .catch(err => console.error(err));
  }, [])  

  useEffect(() => {
    fetch('/answers.json')
      .then(res => res.json())
      .then(answerStatic => {
        setAnswerStatic(answerStatic)
      })
      .catch(err => console.error(err));
  }, []) 

  console.log(answerStatic);
  

  return (
    <>
      <div className="flex justify-center flex-col">
        <form onSubmit={handleSubmit} className={formStyles}>
          <QuestionsLayout
            options={questionArr?.options}
            questionId={questionArr?.id}
            length={data.length}
            key={questionArr?.id}
            text={questionArr?.text}
          />
          {btnView ? <button className={btnStyles}>ответить</button> : null}
        </form>
        {btnResultView
          ? <button className={btnStyles} onClick={onClick}>результат</button>
          : null
        }
      </div>
    </>
  )
}

export default Question