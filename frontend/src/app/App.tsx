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

const BtnNext = styled.button`
  padding: 5px;
  width: 100px;
  cursor: pointer;
  margin: 0 auto;
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
      <GlobalStyles />
      <Container>
        <LayoutPage title={page.title} content={page.component === 'Questions' ? <Question /> : ''} text={page.text} />
        <BtnNext onClick={handleClick}>{index == (pages.length-1) ? 'сброс' : 'далее'}</BtnNext>
      </Container>
    </>
  )
}

export default App