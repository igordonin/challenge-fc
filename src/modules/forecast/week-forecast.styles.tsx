import styled from 'styled-components';

export const WeekForecastContainer = styled.div`
  text-align: center;
`;

export const WeekForecastTitle = styled.h3`
  grid-row: 1;
  grid-column: 1;
  margin: 0 0 10px;
  text-transform: capitalize;
`;

export const WeekForecastMiddleRow = styled.div`
  grid-row: 2;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 20px;
  margin-bottom: 10px;
`;

export const WeekNavigationGridItem = styled.div`
  grid-row: 3;
  grid-column: 1;
`;
