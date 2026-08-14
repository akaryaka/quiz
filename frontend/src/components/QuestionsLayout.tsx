import Select from "./Select"

type QuestionsProps = {
  questionId: number;
  text: string;
  length: number;
  options: string[];
}

const titleStyles = 'bg-[#faf0cd] p-3 font-bold rounded-[5px]';
const wrapperStyles = 'flex justify-between mb-[20px]'

function QuestionsLayout({ questionId, text, length, options }: QuestionsProps) {
  return (
    <>
      <div className={wrapperStyles}>
        <h2 className={titleStyles}>Вопрос {questionId} из {length}. {text}</h2>
        <Select arr={options} selectId={questionId} name={questionId} />
      </div>
    </>
  )
}

export default QuestionsLayout