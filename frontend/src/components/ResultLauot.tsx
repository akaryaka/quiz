function ResultLayout({result, onClick}) {
  return(
    <>
      <div className="flex flex-col items-center text-center text-[23px]">
        <div className="mb-[20px]">
          <span className="text-[green]">Правильных </span>
          <span>ответов: {result}</span>
        </div>
        <button onClick={onClick} className="w-[50%] text-[20px] bg-red-500 text-[white] uppercase cursor-pointer rounded-[10px] p-2">начать сначала</button>
      </div>
    </>
  )
}

export default ResultLayout