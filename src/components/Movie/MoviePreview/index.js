/* eslint-disable no-unreachable */
/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Link } from 'next/link';
import { Container, Title } from './styles'

function MoviePreview({movie}) {

  // const router = useRouter()
  // const [current, setCurrent] = useState({})

  // useEffect(() => {    
  //   setCurrent({movie})
  // }, [])



  return <Container >
    <img alt="" src={`https://image.tmdb.org/t/p/w185/${movie?.poster_path}`} />
    <Title>{movie?.title}</Title>
    {/* <Link 
      href={{
        pathname: '/details',
        query: { slut : movie },
    }}> */}
      <button onClick={() => router.push('/details', movie.original_title)}>Show details</button>
    {/* </Link> */}
  </Container>
}
  // export async function getStaticProps() {
  //   return {
  //     props: {
  //       movie:current,
  //     },
  //   }
  // }


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
