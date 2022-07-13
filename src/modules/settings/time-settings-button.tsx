import { ButtonText, StyledButton } from './settings-button.styles';
import { TimeSettings, useSettingsStore } from './settings-store';

interface TimeSettingsButton {
  timeSetting: TimeSettings;
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
