import GlobalStyles from '@/styles/global.style';
import Home from '@/pages/Home';
import styled from 'styled-components';

function App() {
  const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `
  
  return (
    <>
      <GlobalStyles />
      <Container>
        <Home />
      </Container>
    </>
  )
}

export default App