import { ButtonText, StyledButton } from './settings-button.styles';
import { ClockSettings } from './settings-store';

interface TimeSettingsButton {
  timeSetting: ClockSettings;
  currentTimeSetting: ClockSettings;
  onClick: () => void;
}

export const TimeSettingsButton = ({
  timeSetting,
  currentTimeSetting,
  onClick,
}: TimeSettingsButton) => {
  const className = timeSetting === currentTimeSetting ? 'active' : '';

  return (
    <StyledButton onClick={onClick} className={className}>
      <ButtonText>{timeSetting}</ButtonText>
    </StyledButton>
  );
};
