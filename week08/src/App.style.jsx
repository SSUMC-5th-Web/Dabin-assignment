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
  height: 35px;
  border-radius: 10px;
  border: 1px solid black;
  padding: 5px;
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 5px;
  border: 1px solid black;
  padding: 5px;
  margin-top: 20px;
`;

export const Text = styled.p`
  margin: 5px;
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}` : "18px")};
`;
