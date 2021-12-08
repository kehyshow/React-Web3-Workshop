import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    height: 100vh;
  }

  body {
    margin: 0;
    padding: 0;
    position: relative;
    color: #000;
    width: 100vw;
    font-family: 'Quicksand', sans-serif;
    > #root {
      overflow: scroll;
      position: relative;
      height: 100vh;
      width: 100vw;
      display: grid;
      grid-template-columns: auto;
      grid-template-rows: 80px auto 80px;
      gap: 0px 0px;
      grid-template-areas:
        "header"
        "main"
        "footer";
    }
  }

  header {
    align-items: center;
    display: flex;
    align-self: start;
    grid-area: header;
    flex-direction: row;
    height: 80px;
    justify-content: space-between;
    width: 100%;
    padding: 0 2em;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border-bottom: 2px solid #000;
    background-color: #FFE3E3;
    > * { justify-self: end; }
  }

  footer {
    background-color: #FFE3E3;
    height: 80px;
    border-top: 2px solid #000;
    grid-area: footer;
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    align-self: end;
    display: flex;
    padding: 0 2em;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    > * { width: fit-content; }
    > p > a { text-decoration: underline; }
    > div {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }

  main {
    grid-area: main;
    height: 100%;
    width: 75vw;
    justify-self: center;
    align-self: stretch;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #000;
    margin: 0;
  }

  h1 { font-size: 2rem; }

  h2 {font-size: 1.602rem;}

  h3 {font-size: 1.3rem;}

  h4 {font-size: 1.266rem;}

  h5 {font-size: 1.125rem;}

  p {
    padding: 0;
    color: #000;
    margin: 0;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  form {
    height: 490px;
    grid-area: form;
    width: 425px;
    padding: 2em;
    border-radius: 15px;
  }

  legend {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: .25em 0 .5em;
  }

  fieldset {
    border: none;
    margin: 0;
    padding: 0;
    &:disabled {
      user-select: none;
    }
  }

  button {
    color: #fff;
    background-color: #000;
    border-radius: 50%;
    font-size: 1em;
    &:disabled {
      cursor: not-allowed;
      user-select: none;
    }
  }

  label {
    display: flex;
    flex-direction: column;
    padding: 0.25em 0 0;
    margin-top: 0.5em;
    position: relative;
    color: hsla(60, 36%, 96%, 0.6);
  }

  input {
    width: calc(100% - 1em - 60px);
    margin: 1em 0;
    height: 40px;
    box-shadow: rgba(0, 0, 0, 15%) 0px 5px 10px inset;
    border-radius: 5px;
    border: none;
    outline: none;
    margin: 0;
    padding: 0;
    padding-left: .5em;
    font-size: 1.1em;
    line-height: 25px;
    transition: 0.2s;
    color: #000;
    &:disabled { cursor: not-allowed; user-select: none; }
    margin-top: 0.15em;
    padding-top: .05em;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }

  input[type=number] { -moz-appearance: textfield; }

  input[type="date"]::-webkit-calendar-picker-indicator {
    margin-right: 5px;
    margin-top: 3px;
  }
`;

export default GlobalStyles;