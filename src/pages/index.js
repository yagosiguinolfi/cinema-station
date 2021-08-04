import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import DefaultOverlayContent from '../components/DefaultOverlayContent';
import { ModelsWrapper, ModelSection } from '../components/Model';
import { Container, Content, Title } from '../styles/styles';

function HomePage() {
  const [pageMovies, setPageMovies] = useState([]);
  const [, setData] = useState([]);

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
        <ModelsWrapper>
          <div>
            {pageMovies.map((movie) => (
              <ModelSection
                key={movie.id}
                // className={'colored'}
                backgroundImage={movie.poster_path}
                modelName={movie.title}
                overlayNode={(
                  <DefaultOverlayContent
                    label={movie.title}
                    description={movie.overview}
                  />
                )}
              >
                <Content>
                  <div>
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
                  </div>
                </Content>
              </ModelSection>
            ))}
          </div>
        </ModelsWrapper>
      </Container>
    </>
  );
}

export default HomePage;
