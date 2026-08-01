
type QuestionsProps = {
  questionId?: number;
  text: string;
  length: number;
  options?: any;
}

function QuestionsLayout({questionId, text, length, options}: QuestionsProps) {
  return(
    <>
      <div>{questionId} из {length}</div>
      <h2>{text}</h2>
      {/* <div>{options}</div> */}
     {(option of options) {
      
     }}
      {/* <select name={questionId} id="questions-select"> */}
        {/* {options.map((option:any) => <option key={option.id} value={option.id}>{option.city}</option>)} */}
      {/* </select> */}
    </>
  )
}

  export default QuestionsLayout