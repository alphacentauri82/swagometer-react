import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

export const widen = ({ritmosustancia}) => keyframes`
from {
  width: 0%;
}
to {
  width: ${ritmosustancia}%;
}
`;

export const AppWrapper = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
h1 {
  letter-spacing: 2px;
  font-style: italic;
  text-align: center;
  font-weight: 900;
  margin: 1em 0 1em 0;
  font-family: system-ui;
}
form {
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  > * {
    font-size: 1rem;
  }
  input {
    padding: 0.3em;
  }
  button {
    border: 0;
    outline: 0;
    background: #2165ee;
    color: white;
    border-bottom-left-radius: 0.4em;
    border-bottom-right-radius: 0.4em;
    padding: 0.6em;
    transition: 0.2s ease all;
    &:disabled {
      opacity: 0.5;
    }
  }
}
* {
  box-sizing: border-box;
  margin: 0;
}
`;

export const BarraSustancia = styled.div`
width: 100%;
height: 25px;
border: 2px solid black;
margin: 0.2em 0;
position: relative;
&:before {
  content: "";
  // width: ${props => props.ritmosustancia || 0}%;
  height: 100%;
  background: hsl(${props => props.ritmosustancia || 0}, 100%, 40%);
  animation: ${widen} 1s ease;
  animation-fill-mode: forwards;
  position: absolute;
  top: 0;
  left: 0;
}
`;

export const RitmoSustanciaWrapper = styled.div`
margin: 1em 0;
animation: ${fadeIn} 1s ease;
`;