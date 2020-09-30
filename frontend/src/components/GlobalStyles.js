import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import '../fonts/NanumGothic/NanumGothic.css';

const globalStyles = createGlobalStyle`
  ${reset}
  html, body {
    height: 100%;
    margin: 0;
    background-color: #fafafa;
    font-family: 'Nanum Gothic', 'Malgun Gothic', dotum !important;
  }
  #app {
    height: 100%;
  }
`;

export default globalStyles;
