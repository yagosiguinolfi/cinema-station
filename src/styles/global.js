import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *, input, button {
        font-family: Roboto, Ubuntu, sans-serif;
    }

    body {
      background: ${props => props.theme.colors.background};
      color: ${props => props.theme.colors.text};
      font: 400 16px Roboto, sans-serif;
    }

    
  .colored:nth-child(1) {
    background: #f1ffe7;
  }
  .colored:nth-child(2) {
    background: #dfffd9;
  }
  .colored:nth-child(3) {
    background: #cdfeca;
  }
  .colored:nth-child(4) {
    background: #bbfebb;
  }
  .colored:nth-child(5) {
    background: #a9fdac;
  }
  .colored:nth-child(6) {
    background: #90f29c;
  }
  .colored:nth-child(7) {
    background: #77e68c;
  }

`
