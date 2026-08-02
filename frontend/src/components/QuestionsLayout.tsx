import Select from "./Select"

type QuestionsProps = {
  questionId?: number;
  text: string;
  length: number;
  options?: any;
}

function QuestionsLayout({questionId, text, length, options}: QuestionsProps) {
  return(
    <>
      <div className="flex justify-between mb-[20px]">
        <h2>Вопрос {questionId} из {length}. {text}</h2>
        <Select arr={options} selectId={questionId} name={questionId} id='questions-select'/>
      </div>
    </>
  )
}

  export default QuestionsLayout