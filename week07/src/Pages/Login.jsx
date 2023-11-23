import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, FormContainer, Title, Label, Input, WarningMessage, Button } from './Login.style';

function Login({ onLogin }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newErrors = {
      email: !form.email.includes('@') ? '올바른 이메일을 입력해주세요.' : '',
      password: !/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(form.password)
        ? '영문, 숫자, 특수문자를 포함하여 8자 이상 입력해주세요.'
        : '',
    };

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password) {
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
          <Input type="text" name="email" value={form.email} onChange={handleChange} />
          {errors.email && <WarningMessage>{errors.email}</WarningMessage>}
        </Label>
        <Label>
          비밀번호
          <Input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
          />
          {errors.password && <WarningMessage>{errors.password}</WarningMessage>}
        </Label>
        <Button type="submit" disabled={errors.email || errors.password}>
          확인
        </Button>
      </FormContainer>
    </Container>
  );
}

export default Login;
