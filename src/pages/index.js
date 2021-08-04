/* eslint-disable no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import DefaultOverlayContent from '../components/DefaultOverlayContent';
import { MoviesWrapper, MovieSection } from '../components/Movie';
import { Container, Content, Title } from './_styles';
import MoviePreview from '../components/Movie/MoviePreview';

function HomePage() {
  const [pageMovies, setPageMovies] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        '3/movie/upcoming?api_key=fe65f8e840e15d06c5c00bf13084da74&language=pt-BR&page=1',
      )
      .then(async (response) => {
        await setPageMovies(response.data.results);
        setData(response.data);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Cinema Station</title>
      </Head>
      <Container>
        <Content>
        {pageMovies.map(movie=>
          <MoviePreview
          key={movie.id}
          movie={movie}
          />)}
          {/* <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt=""
            />
          </div>
          <div style={{ maxWidth: '30%' }}>
            <Title>{movie.title}</Title>
            <div>
              <p>{movie.overview}</p>
            </div>
          </div> */}
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
