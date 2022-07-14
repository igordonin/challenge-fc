import styled from 'styled-components';

export const Title = styled.h3`
  margin: 0;
  text-transform: capitalize;
`;

export const SingleForecastContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  text-align: center;
`;

export const SingleForecastLeftBox = styled.div`
  grid-column: 2/3;
`;

export const SingleForecastRightBox = styled.div`
  grid-column: 3/3;
  text-align: left;
`;

export const NavigationGridItem = styled.div`
  grid-column: 2/3;
`;
