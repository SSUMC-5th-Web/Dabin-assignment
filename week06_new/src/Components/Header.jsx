import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer, Nav } from './Header.style.jsx';
import LoginControl from './LoginControl.jsx';

function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <Link to="/">
          <img
            style={{ width: '154px', height: '20px' }}
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="로고"
          />
        </Link>
        <ul>
          <li>
            <Link to="/movies">영화</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/tv">TV 프로그램</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/celebrity">인물</Link>
          </li>
        </ul>
        <LoginControl />
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
