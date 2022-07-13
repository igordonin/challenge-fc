import { Clock } from '../../components/clock';
import { ButtonText, StyledButton } from './settings-button.styles';
import {
  ActionGroup,
  ClockGroup,
  ConfigGroup,
  ModalOverlay,
  ModalTitle,
  ModalWrapper,
  SettingsModalFlexWrapper,
} from './settings-modal.styles';
import { TimeSettings, UnitSystems } from './settings-store';
import { TimeSettingsButton } from './time-settings-button';
import { UnitSystemButton } from './unit-system-button';

const CancelButton = () => {
  return (
    <StyledButton onClick={() => {}}>
      <ButtonText>Cancel</ButtonText>
    </StyledButton>
  );
};

const SaveButton = () => {
  return (
    <StyledButton onClick={() => {}}>
      <ButtonText>Save</ButtonText>
    </StyledButton>
  );
};

export const SettingsModal = () => {
  return (
    <ModalOverlay>
      <ModalWrapper>
        <SettingsModalFlexWrapper>
          <ModalTitle>Settings</ModalTitle>

          <ConfigGroup>
            <h2>Units</h2>
            <UnitSystemButton unit={UnitSystems.IMPERIAL} />
            <UnitSystemButton unit={UnitSystems.METRIC} />
            <UnitSystemButton unit={UnitSystems.STANDARD} />
          </ConfigGroup>

          <ConfigGroup>
            <h2>Time</h2>
            <TimeSettingsButton timeSetting={TimeSettings.AM_PM} />
            <TimeSettingsButton timeSetting={TimeSettings.CLOCK_24} />
          </ConfigGroup>

          <ActionGroup>
            <CancelButton />
            <SaveButton />
          </ActionGroup>

          <ClockGroup>
            <Clock />
          </ClockGroup>
        </SettingsModalFlexWrapper>
      </ModalWrapper>
    </ModalOverlay>
  );
};
