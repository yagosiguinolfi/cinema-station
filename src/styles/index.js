import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
`
export const Heading = styled.div``
export const Header = styled.div`
  display:flex;
  flex-direction: column;
  height: 20vh;
  background-color:  ${props => props.theme.colors.background};//#002233;
`
export const Buttons = styled.div``
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`
export const Title = styled.h1``
export const ViewImage = styled.div`
  height: 18vh;
`
