/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-unused-vars */
import { useRouter } from 'next/router';
import { Container, Title } from './styles'

function MoviePreview({ movie, ...props }) {

  const router = useRouter()
  // function openDetails() {
  //   console.log('clicou router')
  //   router.push('/details', movie.title, { getInitialProps: { movie } })
  // }



  return <Container {...props}>
    <img alt="" src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} />
    <Title>{movie.title}</Title>
    {/* <Link href="/details"> */}
    <button onClick={() => router.push('/details')}>Show details</button>
    {/* </Link> */}
  </Container>
}

// const Link = ({ children, href }) => {
//   
//   return <a
//     href="#"
//     onClick={(e) => {
//       e.preventDefault()
//       router.push(href)
//     }}
//   >
//     {children}
//     <style jsx>{`
//         a {
//           margin-right: 10px;
//         }
//       `}</style>
//   </a>
// }

export default MoviePreview
