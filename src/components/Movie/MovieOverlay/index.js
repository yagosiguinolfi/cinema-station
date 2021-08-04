import React  from 'react'
import { Container } from './styles'

function MovieOverlay({ children }) {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default MovieOverlay
