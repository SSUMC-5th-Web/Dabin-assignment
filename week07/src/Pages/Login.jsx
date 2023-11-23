import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, FormContainer, Title, Label, Input, WarningMessage, Button } from './Login.style';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleEmailBlur = () => {
    if (!email.includes('@')) {
      setEmailError('올바른 이메일을 입력해주세요.');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordBlur = () => {
    if (!/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) {
      setPasswordError('영문, 숫자, 특수문자를 포함하여 8자 이상 입력해주세요.');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!email.includes('@')) {
      setEmailError('올바른 이메일을 입력해주세요.');
    } else if (!/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) {
      setPasswordError('영문, 숫자, 특수문자를 포함하여 8자 이상 입력해주세요.');
    } else {
      onLogin();
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
          <Input type="text" value={email} onChange={handleEmailChange} onBlur={handleEmailBlur} />
          {emailError && <WarningMessage>{emailError}</WarningMessage>}
        </Label>
        <Label>
          비밀번호
          <Input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            onBlur={handlePasswordBlur}
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
          />
          {passwordError && <WarningMessage>{passwordError}</WarningMessage>}
        </Label>
        <Button type="submit" disabled={emailError || passwordError}>
          확인
        </Button>
      </FormContainer>
    </Container>
  );
}

export default Login;
