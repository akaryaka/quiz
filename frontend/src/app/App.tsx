import { useState } from 'react';
import { pages } from './pages';
import LayoutPage from '../components/LayoutPage';
import Question from '../components/Question';
import ResultLayout from '../components/ResultLauot';


function App() {
  const [index, setIndex] = useState(0);
  const page = pages[index];
  const [btnView, setBtnView] = useState(true);
  
  function handleClick() {
    console.log(index, btnView);

    if (index < pages.length-1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  return (
    <>
      <div className="wrapper flex justify-center items-center w-screen h-screen bg-[linear-gradient(to_right,#faf0cd,#fab397)]">
        <div className='container p-[30px] w-[530px] h-[400px] flex flex-col justify-center rounded-[10px] bg-white'>
          <LayoutPage title={page.title} content={page.component === 'Questions' ? <Question /> : (page.component === 'Result' ? <ResultLayout />: '')} text={page.text} />
          {btnView ? <button className='border border-[#fab397] w-50 uppercase cursor-pointer rounded-[10px] p-1 mt-0 mb-0 ml-auto mr-auto transition-all hover:text-white hover:bg-[#fab397]' onClick={handleClick}>{index == (pages.length - 1) ? 'сброс' : 'далее'}</button> : null}
        </div>
      </div>
    </>
  )
}

export default App