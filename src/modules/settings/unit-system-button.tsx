import { ButtonText, StyledButton } from './settings-button.styles';
import { UnitSystems, useSettingsStore } from './settings-store';

interface UnitSystemButtonProps {
  unit: UnitSystems;
}

export const UnitSystemButton = ({ unit }: UnitSystemButtonProps) => {
  const { unitSystem, setUnitSystem } = useSettingsStore();

  const className = unitSystem === unit ? 'active' : '';

  return (
    <StyledButton onClick={() => setUnitSystem(unit)} className={className}>
      <ButtonText>{unit}</ButtonText>
    </StyledButton>
  );
};
