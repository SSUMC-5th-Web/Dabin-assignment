import styled from 'styled-components';

export const LoginContainer = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  & > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
export const Button = styled.button`
  background-color: white;
  border-radius: 15px;
  width: 80px;
  padding: 5px;
  border: none;
`;
export const P = styled.p`
  color: white;
`;
