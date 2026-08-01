import GlobalStyles from '@/styles/global.style';
import { useState } from 'react';
import styled from 'styled-components';
import { pages } from './pages';
import LayoutPage from '../components/LayoutPage';
import Question from '../components/Question';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Wrapper = styled.div`

`

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
      {/* <GlobalStyles /> */}
      <div className="bg-[rgb(241, 241, 241)]">
        <Container>
          <LayoutPage title={page.title} content={page.component === 'Questions' ? <Question /> : ''} text={page.text} />
          <button className='bg-white w-50 cursor-pointer p-3 hover:bg-sky-700' onClick={handleClick}>{index == (pages.length - 1) ? 'сброс' : (index == 1 ? '' : 'далее')}</button>
        </Container>
      </div>
    </>
  )
}

export default App