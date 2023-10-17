import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #22254b;
    font-family: sans-serif;
  }
`;

export const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const movieContainer = styled.div`
  position: relative;
  width: 250px;
  height: 445px;
  margin: 16px;
  background-color: #373b69;
  color: white;
  display: flex;
  flex-direction: column;
`;
export const movieImg = styled.div`
  max-width: 100%;
  height: 375px;
`;
export const movieInfo = styled.div`
  height: 70px;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const movieDetail = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: calc(100% - 32px);
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  overflow: auto;
`;
