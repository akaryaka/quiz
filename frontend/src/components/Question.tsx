import { useState, useEffect } from "react";
import answers from '@/assets/answers.json';
import questions from '@/assets/questions.json';
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
  const [data, newData] = useState<any>([]);
  const [length, setLength] = useState(0)
  const [btnView, setBtnView] = useState(true);
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
        console.log(result);
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

  // useEffect(() => {
  //   fetch('http://localhost:8000/api/questions')
  //     .then(res => res.json())
  //     .then(data => {
  //       // newData(data)
  //       // setLength(data.length)
  //       setLoad(false)
  //       setCheckServer(true)
  //       console.log(data);
  //     })
  //     .catch(err => {
  //       console.error(err, 'файл с бэка не загружен');
  //       // setLoad(false)
  //       // newData(questions);
  //       // setLength(questions.length)
  //     });
  // }, []); 

  useEffect(() => {
    fetch('http://localhost:8000/test-db')
      .then(res => res.json())
      .then(data => {
        const dataFromDb: any = Object.values(data)[1];
        newData(dataFromDb)
        setLength(dataFromDb.length)
        setLoad(false)
        setCheckServer(true)
        console.log(dataFromDb);
      })
      .catch(err => {
        console.error(err, 'файл с бд не загружен');
        setLoad(false)
        // newData(questions);
        // setLength(questions.length)
      });
  }, [])

  function Form () {
    return(
      <>
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
      </>
    )
  }

  return (
    <>
      <div className="flex justify-center flex-col">
        {load ? 'загрузка...' : <Form />}
      </div>
    </>
  )
}

export default Question