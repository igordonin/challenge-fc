import * as React from 'react';
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
import { ClockSettings, UnitSystems, useSettingsStore } from './settings-store';
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
  const { setUnitSystem, setClockAmPmOr24h } = useSettingsStore();

  return (
    <StyledButton onClick={() => {}}>
      <ButtonText>Save</ButtonText>
    </StyledButton>
  );
};

export const SettingsModal = () => {
  const {
    clockAmPmOr24h: initialHour12,
    unitSystem: initialUnitSystem,
    setUnitSystem,
    setClockAmPmOr24h,
  } = useSettingsStore();

  const [stateUnitSystem, setStateUnitSystem] =
    React.useState(initialUnitSystem);

  const [stateTimeSetting, setStateTimeSetting] = React.useState(initialHour12);

  const onSave = () => {};

  return (
    <ModalOverlay>
      <ModalWrapper>
        <SettingsModalFlexWrapper>
          <ModalTitle>Settings</ModalTitle>

          <ConfigGroup>
            <h2>Units</h2>
            <UnitSystemButton
              unit={UnitSystems.IMPERIAL}
              onClick={() => setStateUnitSystem(UnitSystems.IMPERIAL)}
              currentUnit={stateUnitSystem}
            />
            <UnitSystemButton
              unit={UnitSystems.METRIC}
              onClick={() => setStateUnitSystem(UnitSystems.METRIC)}
              currentUnit={stateUnitSystem}
            />
            <UnitSystemButton
              unit={UnitSystems.STANDARD}
              onClick={() => setStateUnitSystem(UnitSystems.STANDARD)}
              currentUnit={stateUnitSystem}
            />
          </ConfigGroup>

          <ConfigGroup>
            <h2>Time</h2>
            <TimeSettingsButton
              timeSetting={ClockSettings.AM_PM}
              onClick={() => setStateTimeSetting(ClockSettings.AM_PM)}
              currentTimeSetting={stateTimeSetting}
            />
            <TimeSettingsButton
              timeSetting={ClockSettings.CLOCK_24}
              onClick={() => setStateTimeSetting(ClockSettings.CLOCK_24)}
              currentTimeSetting={stateTimeSetting}
            />
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
