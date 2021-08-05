import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding: 20px;
`
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width:800px;
  background-color: #303030;
  border-radius: 20px;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  position: relative;
`
export const ViewImage = styled.div`
display: flex;
flex: 0.3;
  padding: 10px;
`
export const ViewDescription = styled.div`
display: flex;
flex: 0.7;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
min-width: 250px;
  padding: 10px;
`
export const Title = styled.h1`
width: 100%;
font-size: 24px;
font-weight:bold;
`
export const Description = styled.p`

`
export const ReleaseDate = styled.p`
  font-size: 16px;
  font-weight: lighter;
  margin: 20px 0;
`

export const Button = styled.button`
  display: flex;
  position: absolute;
  bottom: 10px;
  right: 10px;
  align-items: center;
  justify-content: center;
  padding: 6px;
  height: 40px;
  width: 40px;
  opacity: 0.8;
  border-radius: 20px;
  background-color: #3a3a3a;
  border-color:  ${props => props.theme.colors.text};
  border-width:  2px;
`
