import styled from "styled-components"
import { StyledForm } from "../components/StyledForm"
import { StyledTitle } from "../components/StyledTitle"

const Text = styled.p`
  margin-bottom: 25px;
`

function Home() {
  return (
    <>
      <StyledForm>
        <StyledTitle>Квиз</StyledTitle>
        <Text>Привет! Давай проверим, насколько хорошо ты знаешь столицы</Text>
      </StyledForm>
    </>
  )
}

export default Home