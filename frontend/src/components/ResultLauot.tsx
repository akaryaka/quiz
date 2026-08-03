function ResultLayout({result}) {
  return(
    <>
      <div className="text-center text-[23px]">
        <span className="text-[green]">Правильных </span> 
        <span>ответов: {result}</span>
      </div>
      <button>начать сначала</button>
    </>
  )
}

export default ResultLayout