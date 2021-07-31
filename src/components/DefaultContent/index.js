import {Container, Heading, Buttons} from "./styles"

function DefaultContent ({label, description}) {
  return (
  <Container>
    <Heading>
      <h1>{label}</h1>
      <h2>{description}</h2>
    </Heading>

    <Buttons>
      <button>Show details</button>
    </Buttons>
  </Container>
  );
}

export default DefaultContent