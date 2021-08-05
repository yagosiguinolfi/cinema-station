/* eslint-disable no-console */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-unused-vars */
import React from 'react'
import axios from 'axios'
import Image from 'next/image'
import { Container, Header, ViewImage } from '../../styles'
import MovieDetails from '../../components/Movie/MovieDetails'
import logoCineS from '../../../public/assets/cine-station-logo.png'

// export async function getServerSideProps(context){

//   const movie = await axios.get(
//     `3/movie/${context?.params.movieId}?api_key=fe65f8e840e15d06c5c00bf13084da74&language=pt-BR`
//   )
//   .then((response) => response.data)
//   return {
//     props:{
//       movie
//     }
//   }
// }

export async function getStaticProps({params}) {
  const movie = await axios.get(
    `3/movie/${params?.id}?api_key=fe65f8e840e15d06c5c00bf13084da74&language=pt-BR`)
    .then((response) => response.data)
  return {
    props: {
      movie
    },
    revalidate: 10
  }
}

export async function getStaticPaths() {
  const data = await axios.get(
    `3/movie/upcoming?api_key=fe65f8e840e15d06c5c00bf13084da74&language=pt-BR&page=1`)
    .then((response) => response.data.results)

  const paths = data.map((movie) => ({
    params: { id: String(movie.id) }
  }))
  return { paths, fallback: false }
}

function Details({movie}) {
  return <Container>
        <Header>         
          <ViewImage>
            <Image src={logoCineS} alt="cinema-station-logo" width='180' height='180'/>
          </ViewImage>         
        </Header>
      <MovieDetails movie={movie} />
    </Container>
}
export default Details