import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px 100px;
  display: flex;
  gap: 50px;
`;
export const P = styled.p`
  font-size: ${props => props.size || '16px'};
  font-weight: ${props => props.weight || 'normal'};
  color: ${props => props.color || 'black'};
`;
export const Img = styled.img`
  height: 400px;
`;
function MovieDetail() {
  const { title } = useParams();
  const { state } = useLocation();

  return (
    <Container>
      <Img src={state.posterPath} alt={title} />
      <div>
        <P size="24px" weight="bold" style={{ marginTop: '0' }}>
          {title}
        </P>
        <P>{`${state.voteAverage} / 10점`}</P>
        <P>{state.overview}</P>
      </div>
    </Container>
  );
}

export default MovieDetail;
