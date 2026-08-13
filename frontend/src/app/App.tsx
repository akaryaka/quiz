import { useState } from 'react';
import { pages } from './pages';
import LayoutPage from '@/components/LayoutPage';
import Question from '@/components/Question';
import ResultLayout from '@/components/ResultLauot';

const wrapperStyles = 'wrapper flex justify-center items-center w-screen h-screen bg-[linear-gradient(to_right,#faf0cd,#fab397)]'; 
const containerStyles = 'container p-[30px] w-[530px] h-[400px] flex flex-col justify-center rounded-[10px] bg-white';
const btnStyles = 'border border-[#fab397] w-50 uppercase cursor-pointer rounded-[10px] p-1 mt-0 mb-0 ml-auto mr-auto transition-all hover:text-white hover:bg-[#fab397]';

function App() {
  const [indexPage, setIndexPage] = useState(0);
  const [btnView, setBtnView] = useState(true);
  const [resultCount, setResultCount] = useState(0);

  const page = pages[indexPage];
  
  function handleClick() {
    setBtnView(false)
    
    if (indexPage < pages.length-1) {
      setIndexPage(indexPage + 1);
    } else {
      setIndexPage(0);
    }
  } 

  function reset() {
    setIndexPage(0);
    setBtnView(true);
    setResultCount(0);
  }

  return (
    <>
      <div className={wrapperStyles}>
        <div className={containerStyles}>
          <LayoutPage 
            title={page.title} 
            content={page.component === 'Questions' 
              ? <Question resultCount={setResultCount} onClick={handleClick} /> 
              : (page.component === 'Result' 
                ? <ResultLayout onClick={reset} result={resultCount}/>
                : ''
              )
            } 
            text={page.text} />
          {btnView 
            ? <button className={btnStyles} onClick={handleClick}>{indexPage == (pages.length - 1) 
                ? 'сброс' 
                : 'начать'
              }</button> 
            : null}
        </div>
      </div>
    </>
  )
}

export default App