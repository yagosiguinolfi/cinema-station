/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-unused-vars */
import { useRouter } from 'next/router'
import React from 'react'
import { Container, Content, ViewDescription, Title, Description, ReleaseDate } from './styles'

function MovieDetails({movie, ...props}) {
const router = useRouter()
  return <Container>
      <Content>
        <img alt="" src={`https://image.tmdb.org/t/p/w185/${movie?.poster_path}`} />
        <ViewDescription>
          <Title>{movie?.title}</Title>
          <Description>{movie?.overview}</Description>
          <ReleaseDate>{movie?.release_date}</ReleaseDate>
          <button onClick={() => router.push('/')}>Back</button>
        </ViewDescription>
      </Content>
  </Container>
}
export default MovieDetails