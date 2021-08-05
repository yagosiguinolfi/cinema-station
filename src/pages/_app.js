import axios from 'axios'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/global'
import theme from '../styles/theme'


// https://api.themoviedb.org/3/movie/upcoming?api_key=fe65f8e840e15d06c5c00bf13084da74&language=pt-BR&page=1
axios.defaults.baseURL = 'https://api.themoviedb.org'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  )
}
export default MyApp
