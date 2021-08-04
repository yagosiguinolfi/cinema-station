/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Content, ViewDescription, Title, Description, ReleaseDate } from './styles'

function Details() {

  const [pageMovies, setPageMovies] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
     axios.get(
        '3/movie/upcoming?api_key=fe65f8e840e15d06c5c00bf13084da74&language=pt-BR&page=1',
      )
      .then(async (response) => {
        await setPageMovies(response.data.results)
      })
  }, [])


  return <Container>
      <Content>
        <img alt="" src={`https://image.tmdb.org/t/p/w185/${pageMovies[0]?.poster_path}`} />
        <ViewDescription>
          <Title>{pageMovies[0]?.title}</Title>
          <Description>{pageMovies[0]?.overview}</Description>
          <ReleaseDate>{pageMovies[0]?.release_date}</ReleaseDate>
        </ViewDescription>
      </Content>
  </Container>
}
export default Details