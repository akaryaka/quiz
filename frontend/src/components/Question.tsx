import { useState, useEffect } from "react";
import answers from '@/assets/answers.json';
import QuestionsLayout from "./QuestionsLayout";
import type { Props } from "./Question.props";
import type { Question } from "./Question.type";

function Question({ onClick, resultCount }: Props) {
  // массив с бд
  const [data, newData] = useState<any>([]);
  // длина массива вопросов
  const [length, setLength] = useState(0)
  const [btnView, setBtnView] = useState(true);
  // индекс страницы
  const [index, setIndex] = useState(0);
  const [btnResultView, setBtnResultView] = useState(false);
  const [load, setLoad] = useState(true);
  const [checkServer, setCheckServer] = useState(false);

  const questionArr: Question = data[index];
  const formStyles = 'flex flex-col justify-center';
  const btnStyles = 'cursor-pointer text-[23px] text-[#fab397] text-center';

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    if(checkServer) {
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
        if (result.answer) {
          resultCount((number: number) => number + 1);
        }
      }
    } catch (error) {
      console.log(error, ': ошибка при отправке ответа на сервер. Вероятно, сервер недоступен');
    }
    } else {
      if (Number(Object.values(data)) == Number(answers[index].value)) {
        resultCount((number: number) => number + 1);
      }
    }

    if (index < length - 1) {
      setIndex(index + 1);
    } else {
      setBtnView(false)
      event.preventDefault();
      setBtnResultView(true)
    }
  }

  useEffect(() => {
    fetch('http://localhost:8000/questions-db')
      .then(res => res.json())
      .then(data => {
        const dataFromDb: any = Object.values(data)[1];
        newData(dataFromDb)
        setLength(dataFromDb.length)
        setLoad(false)
        setCheckServer(true)
      })
      .catch(err => {
        console.error(err, 'файл с вопросами из бд не загружен');
        setLoad(true)
      });
  }, [])

  useEffect(() => {
    fetch('http://localhost:8000/answers-db')
      .then(res => res.json())
      .then(data => {
        const answersFromDb: any = Object.values(data)[1];
        console.log(answersFromDb);
      })
      .catch(err => {
        console.error(err, 'файл с ответами из бд не загружен');
      });
  }, [])

  return (
    <>
      <div className="flex justify-center flex-col">
        {load 
          ? 'загрузка...' 
          : <>
            <form onSubmit={handleSubmit} className={formStyles}>
          <QuestionsLayout
            options={questionArr.options}
            questionId={questionArr?.id}
            length={data.length}
            key={questionArr.id}
            text={questionArr.text}
          />
          {btnView ? <button className={btnStyles}>ответить</button> : null}
        </form>
        {btnResultView
          ? <button className={btnStyles} onClick={onClick}>результат</button>
          : null
        }
          </>}
      </div>
    </>
  )
}

export default Question