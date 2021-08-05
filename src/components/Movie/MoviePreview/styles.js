import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  background-image: url(${(props)=>props.backgroundImage});
  background-size: cover;
  height: 42vh;
  width: 28vh;
  border-style: solid;
  border-width: 4px;
  border-color: #414142;
  border-radius: 10px;
  margin: 0 10px 10px;
  padding: 6px;
`
export const Title = styled.h2`
`
export const Text = styled.h2`
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
`
export const Button = styled.button`
  display: flex;
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
