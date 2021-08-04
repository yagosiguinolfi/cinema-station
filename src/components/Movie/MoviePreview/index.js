/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-unused-vars */
import { Container, Title } from './styles'

function MoviePreview({ movie, ...props }) {
  return <Container {...props}>
    <img alt="" src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}/>
    <Title>{movie.title}</Title>
    </Container>
}

export default MoviePreview
