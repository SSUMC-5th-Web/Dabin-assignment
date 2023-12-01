import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px 100px;
`;
export const P = styled.p`
  font-size: ${props => props.size || '16px'};
  font-weight: ${props => props.weight || 'normal'};
  color: ${props => props.color || 'black'};
`;

function NotFound() {
  const navigate = useNavigate();
  const onClickHome = () => {
    navigate(`/`);
  };

  return (
    <Container>
      <P size="24px" weight="bold">
        해당 페이지를 찾지 못했습니다.
      </P>
      <P>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</P>
      <P onClick={onClickHome} style={{ cursor: 'pointer' }} color="red">
        메인 페이지로 이동
      </P>
    </Container>
  );
}

export default NotFound;
