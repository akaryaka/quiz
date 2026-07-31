import { styled } from "styled-components"
import { StyledForm } from "./StyledForm"
import { StyledTitle } from "./StyledTitle"

const Text = styled.p`
  margin-bottom: 25px;
`

type PageProps = {
  id?: number;
  title: string;
  text: string;
  content: any;
}

function LayoutPage({title, text, content}: PageProps) {
  return(
    <>
      <StyledForm>
        <StyledTitle>{title}</StyledTitle>
        <Text>{text}</Text>
        {content ? <div>{content}</div> : ''}
      </StyledForm>
    </>
  )
}

export default LayoutPage