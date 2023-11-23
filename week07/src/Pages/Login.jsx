import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, FormContainer, Title, Label, Input, WarningMessage, Button } from './Login.style';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = e => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!email.includes('@')) {
      setEmailError('올바른 이메일을 입력해주세요.');
    } else {
      navigate('/');
    }
  };

  return (
    <Container>
      <Title>
        이메일과 비밀번호를
        <br /> 입력해주세요
      </Title>
      <FormContainer onSubmit={handleSubmit}>
        <Label>
          이메일 주소
          <Input type="text" value={email} onChange={handleEmailChange} />
          {emailError && <WarningMessage>{emailError}</WarningMessage>}
        </Label>
        <Label>
          비밀번호
          <Input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
          />
        </Label>
        <Button type="submit">확인</Button>
      </FormContainer>
    </Container>
  );
}

export default Login;
