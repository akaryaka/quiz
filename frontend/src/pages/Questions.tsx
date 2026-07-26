import { StyledForm } from "../components/StyledForm"
import { StyledTitle } from "../components/StyledTitle"

function Questions() {
  
  // const [res, newRes] = useState(Object);

  // const handleSubmit = async (event: SubmitEvent) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.target);
  //   const data = Object.fromEntries(formData.entries());
  //   try {
  //     const response = await fetch('http://localhost:8000/api/submit', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     })
  //     const result = await response.json();

  //     if (response.ok) {
  //       console.log(result);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // // заменить на axios
  // useEffect(() => {
  //   fetch('http://localhost:8000/api/questions')
  //     .then(res => res.json())
  //     .then(data => {

  //       newData(data)
  //     })
  //     .catch(err => console.error(err));
  // }, []);
  
  return (
    <>
      <StyledForm>
        <StyledTitle>page Questions</StyledTitle>
      </StyledForm>
    </>
  )
}

export default Questions