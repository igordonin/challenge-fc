import { ButtonText, StyledButton } from './settings-button.styles';
import { UnitSystems, useSettingsStore } from './settings-store';

interface UnitSystemButtonProps {
  unit: UnitSystems;
  currentUnit: UnitSystems;
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
