/* eslint-disable no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import axios from 'axios';
import Head from 'next/head';
import DefaultOverlayContent from '../components/DefaultOverlayContent';
import { MoviesWrapper, MovieSection } from '../components/Movie';
import { Container, Content, Title } from '../styles/index';
import MoviePreview from '../components/Movie/MoviePreview';

export async function getStaticProps(context) {
    const data = await axios
      .get(
        '3/movie/upcoming?api_key=fe65f8e840e15d06c5c00bf13084da74&language=pt-BR&page=1',
      )
      .then(async (response) => response.data);
  return {
    props: {
      data
    }, 
  }
}

function HomePage (props) {
  const {data} = props

  return (
    <>
      <Head>
        <title>Cinema Station</title>
      </Head>
      <Container>
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
  );
}

export default HomePage;
