import styled from 'styled-components';

export const FlexWrapper = styled.div`
  display: flex;
  flex-flow: column;
  height: 89vh;
`;

export const FlexMain = styled.div`
  display: flex;
  flex: 1;
  overflow: auto;
  align-items: center;
  justify-content: center;
`;

export const FlexFooter = styled.div`
  min-height: 120px;
`;

export const GridContainer = styled.div`
  display: grid;

  grid-column-gap: 1em;
  grid-row-gap: 0.5em;

  @media (min-width: 600px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;
