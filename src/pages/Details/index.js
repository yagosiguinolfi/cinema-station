/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { Container } from '../../styles'
import MovieDetails from '../../components/Movie/MovieDetails'

function Details({data}) {
  const [movie, setMovie] = useState([])
  // const { results } = data
  // console.log(results)
  useEffect(() => {
     axios.get(
        '3/movie/upcoming?api_key=fe65f8e840e15d06c5c00bf13084da74&language=pt-BR&page=1',
      )
      .then(async (response) => {
        await setMovie(response.data.results[4])
      })
  }, [])


  return <Container>
      <MovieDetails movie={movie} />
    </Container>
}
export default Details