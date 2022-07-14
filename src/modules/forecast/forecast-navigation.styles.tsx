import styled from 'styled-components';
import { Button } from '../../components/button';

export const ForecastButton = styled(Button)`
  padding: 5px;
  width: 100px;
  border-radius: 10px;
`;

export const ForecastButtonContainerTitle = styled.h4`
  margin: 20px 0 10px 0;
  text-align: center;
`;

export const ForecastButtonsContainer = styled.div`
  display: grid;
  margin-top: 5px;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  align-items: center;
  align-content: center;
  text-align: center;
`;
