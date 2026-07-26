import GlobalStyles from '@/styles/global.style';
import { BrowserRouter,Route, Routes, Link, Outlet } from "react-router";
import Home from '@/pages/Home';
import Questions from '@/pages/Questions';
import Result from '@/pages/Result';
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
        <BrowserRouter>
          <nav>
            <Link to="/">Главная</Link>
            <Link to="/questions">Вопросы</Link>
            <Link to="/result">Результаты</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </BrowserRouter>
        
      </Container>
    </>
  )
}

export default App