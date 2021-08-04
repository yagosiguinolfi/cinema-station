/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useRef, useState } from 'react'
import MovieOverlay from '../MovieOverlay'
import MoviesContext from '../MoviesContext'
import { Container, OverlaysRoot } from './styles'

function MoviesWrapper({ children }) {
  const wrapperRef = useRef(null)
  const [registeredMovies, setRegisteredMovies] = useState([])
  const registerMovie = useCallback(movie => {
    setRegisteredMovies(state => [...state, movie])
  }, [])
  const unregisterMovie = useCallback(movieName => {
    setRegisteredMovies(state =>
      state.filter(movie => movie.movieName !== movieName)
    )
  }, [])

  const getMovieByName = useCallback(
    movieName =>
      registeredMovies.find(movie => movie.movieName === movieName) || null
  )

  return (
    <MoviesContext.Provider
      value={{
        wrapperRef,
        registeredMovies,
        registerMovie,
        unregisterMovie,
        getMovieByName
      }}
    >
      <Container ref={wrapperRef}>
        <h1>Teste</h1>
        <OverlaysRoot>
          {registeredMovies.map(movie =>
            <MovieOverlay key={movie.id}>{movie.title}</MovieOverlay>)}
        </OverlaysRoot>
      </Container>
    </MoviesContext.Provider>
  )
}

export default MoviesWrapper
