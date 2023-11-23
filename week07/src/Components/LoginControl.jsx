import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContainer, Button, P } from './LoginControl.style.jsx';

function LoginControl() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
    navigate('/login');
  };
  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <LoginContainer>
      {isLoggedIn ? (
        <div>
          <Button onClick={handleLogoutClick}>로그아웃</Button>
          <P>환영합니다!</P>
        </div>
      ) : (
        <div>
          <Button onClick={handleLoginClick}>로그인</Button>
          <P>로그인 해주세요!</P>
        </div>
      )}
    </LoginContainer>
  );
}

export default LoginControl;
