import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 100vh;
  margin: 0 auto;
`;

export const Input = styled.input`
  width: 100%;
  height: 20px;
  border-radius: 5px;
  border: 1px solid black;
  padding: 5px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  width: 100%;
  height: 30px;
  border-radius: 5px;
  border: 1px solid black;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  margin: auto auto;
  background-color: beige;
  font-size: 20px;
  font-weight: 600;
`;
