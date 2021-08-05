/* eslint-disable no-unused-vars */
import { Container } from './styles'

function MovieSection({ movieName, overlayNode, children, ...props }) {
  return <Container {...props}>{children}</Container>
}

export default MovieSection
