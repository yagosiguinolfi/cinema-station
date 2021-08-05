/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-unused-vars */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container, Content, ViewDescription, Title, Description, ReleaseDate, ViewImage, Button } from './styles'
import iconBack from '../../../../public/assets/curve-arrow.png'

function MovieDetails({ movie }) {
  return <Container>
    <Content>
      <ViewImage>
        <img alt="" src={`https://image.tmdb.org/t/p/w185/${movie?.poster_path}`} />
      </ViewImage>
      <ViewDescription>
        <Title>{movie?.title}</Title>
        <ReleaseDate>{`Release date: ${movie?.release_date}`}</ReleaseDate>
        <Description>{movie?.overview}</Description>
        <Link
          href={{
            pathname: '/'
          }} passHref>
          <Button>
            <Image alt="see details" src={iconBack} layout='intrinsic' />
          </Button>
        </Link>
      </ViewDescription>
    </Content>
  </Container>
}
export default MovieDetails