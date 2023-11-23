import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  margin: auto;
  padding-top: 100px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
  padding-bottom: 30px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  gap: 5px;
  font-size: 14px;
`;

export const Input = styled.input`
  width: 500px;
  height: 30px;
  border-radius: 5px;
  border: 2px solid #ddd;
`;

export const WarningMessage = styled.span`
  color: red;
  font-size: 12px;
`;

export const Button = styled.button`
  background-color: #373b69;
  color: white;
  width: 100%;
  height: 30px;
  padding: 5px;
  border-radius: 15px;
  border: none;
  margin-top: 5px;
`;
