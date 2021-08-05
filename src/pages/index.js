/* eslint-disable no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import DefaultOverlayContent from '../components/DefaultOverlayContent'
import { MoviesWrapper, MovieSection } from '../components/Movie'
import { Container, Content, Title, Header, ViewImage } from '../styles/index'
import MoviePreview from '../components/Movie/MoviePreview'
import iconCineS from '../../public/assets/cine-station-icon.ico'
import logoCineS from '../../public/assets/cine-station-logo.png'

export async function getStaticProps(context) {
    const data = await axios
      .get(
        '3/movie/upcoming?api_key=fe65f8e840e15d06c5c00bf13084da74&language=pt-BR&page=1'
      )
      .then(async (response) => response.data)
  return {
    props: {
      data
    } 
  }
}

function HomePage (props) {
  const {data} = props

  return (
    <>
      <Head>
        {/* <Image src={iconCineS} alt="cinema-station-icon" /> */}
        <link rel="cine-icon" href={iconCineS} type="image/ico" />
        <title>Cinema Station</title>
        <meta name="cinema-station" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        <Header>         
          <ViewImage>
            <Image src={logoCineS} alt="cinema-station-logo" width='160' height='160'/>
          </ViewImage>         
        </Header>
        <Content>
          {data.results.map(movie =>
            <MoviePreview
              key={movie.id}
              movie={movie}
            />)}
        </Content>
        {/* <MoviesWrapper>
          <div>
            {pageMovies.map((movie) => (
              <MovieSection
                key={movie.id}
                backgroundImage={movie.poster_path}
                movieName={movie.title}
                overlayNode={(
                  <DefaultOverlayContent
                    label={movie.title}
                    description={movie.overview}
                  />
                )}
              >
               
              </MovieSection>
            ))}
          </div>
        </MoviesWrapper> */}
      </Container>
    </>
  )
}

export default HomePage
