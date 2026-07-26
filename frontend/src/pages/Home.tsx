import styled from "styled-components"
import { StyledForm } from "../components/StyledForm"
import { StyledTitle } from "../components/StyledTitle"

function Home() {
  const Text = styled.p`
    margin-bottom: 25px;
  `

  const BtnNext = styled.button`
    padding: 5px;
    width: 30%;
    cursor: pointer;
    margin: 0 auto;
  `

  return (
    <>
      <StyledForm>
        <StyledTitle>Квиз</StyledTitle>
        <Text>Привет! Давай проверим, насколько хорошо ты знаешь столицы</Text>
        <BtnNext>Далее</BtnNext>
      </StyledForm>
    </>
  )
}

export default Home