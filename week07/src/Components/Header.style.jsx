import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #373b69;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding-left: 100px;
  gap: 20px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    font-size: 14px;

    a {
      text-decoration: none;
      color: white;
    }
  }
`;
