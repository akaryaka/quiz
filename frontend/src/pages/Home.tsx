import styled from "styled-components"

function Home() {
  const Form = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
    border: 1px solid #000;
    padding: 20px;
    border-radius: 10px;
  `

  const Title = styled.h1`
    margin-bottom: 25px;
  `

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
      <Form>
        <Title>Квиз</Title>
        <Text>Привет! Давай проверим, насколько хорошо ты знаешь столицы</Text>
        <BtnNext>Далее</BtnNext>
      </Form>
    </>
  )
}

export default Home