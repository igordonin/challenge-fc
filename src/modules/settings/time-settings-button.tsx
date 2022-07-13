import { ButtonText, StyledButton } from './settings-button.styles';
import { useSettingsStore } from './settings-store';

interface TimeSettingsButton {
  timeSetting: 'AM/PM' | '24h';
}

export const TimeSettingsButton = ({ timeSetting }: TimeSettingsButton) => {
  const { hour12, toggleHour12 } = useSettingsStore();

  const timeSettingMappings = {
    'AM/PM': true,
    '24h': false,
  };

  const className = timeSettingMappings[timeSetting] === hour12 ? 'active' : '';

  return (
    <StyledButton onClick={() => toggleHour12()} className={className}>
      <ButtonText>{timeSetting}</ButtonText>
    </StyledButton>
  );
};
