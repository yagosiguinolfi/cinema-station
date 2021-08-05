/* eslint-disable no-console */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Container, Header, ViewImage } from '../../styles'
import MovieDetails from '../../components/Movie/MovieDetails'
import logoCineS from '../../../public/assets/cine-station-logo.png'

export async function getServerSideProps({params}){
  const movie = await axios.get(
    `3/movie/${params.movieId}?api_key=fe65f8e840e15d06c5c00bf13084da74&language=pt-BR`
  )
  .then((response) => response.data)
  .catch((error) => console.log('ERRO: ', error))  
  return {
    props:{
      movie
    }
  }
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