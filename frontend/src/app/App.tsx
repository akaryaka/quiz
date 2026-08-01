import { useState } from 'react';
import { pages } from './pages';
import LayoutPage from '../components/LayoutPage';
import Question from '../components/Question';


function App() {
  const [index, setIndex] = useState(0);
  const page = pages[index];
  
  function handleClick() {
    if (index < pages.length-1) {
      setIndex(index + 1);
    } else {
      setIndex(0)
    }
  }

  return (
    <>
      <div className="wrapper flex justify-center items-center w-screen h-screen bg-[linear-gradient(to_right,#faf0cd,#fab397)]">
        <div className='container p-[30px] w-[530px] h-[400px] d-flex justify-center items-center rounded-[10px] bg-white'>
          <LayoutPage title={page.title} content={page.component === 'Questions' ? <Question /> : ''} text={page.text} />
          <button className='border-green-700 w-50 cursor-pointer p-3 hover:text-white hover:bg-sky-700' onClick={handleClick}>{index == (pages.length - 1) ? 'сброс' : (index == 1 ? '' : 'далее')}</button>
        </div>
      </div>
    </>
  )
}

export default App