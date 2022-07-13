import { ButtonText, StyledButton } from './settings-button.styles';
import { MeasurementSystemSettings } from './settings-store';

interface UnitSystemButtonProps {
  unit: MeasurementSystemSettings;
  currentUnit: MeasurementSystemSettings;
  onClick: () => void;
}

export const UnitSystemButton = ({
  unit,
  currentUnit,
  onClick,
}: UnitSystemButtonProps) => {
  const className = currentUnit === unit ? 'active' : '';

  return (
    <StyledButton onClick={onClick} className={className}>
      <ButtonText>{unit}</ButtonText>
    </StyledButton>
  );
};
