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
import {
  ClockSettings,
  MeasurementSystemSettings,
  useSettingsStore,
} from './settings-store';
import { TimeSettingsButton } from './time-settings-button';
import { UnitSystemButton } from './unit-system-button';

interface ActionButtonProps {
  label: string;
  onClick: () => void;
}

const ActionButton = ({ label, onClick }: ActionButtonProps) => {
  return (
    <StyledButton onClick={() => onClick()}>
      <ButtonText>{label}</ButtonText>
    </StyledButton>
  );
};

export const SettingsModal = () => {
  const {
    isModalOpen,
    clockAmPmOr24h: initialClockSetting,
    measurementSystem: initialMeasurementSetting,
    toggleModal,
    setMeasurementSystem,
    setClockAmPmOr24h,
  } = useSettingsStore();

  const [stateMeasurementSetting, setStateMeasurementSetting] = React.useState(
    initialMeasurementSetting
  );

  const [stateClockSetting, setStateClockSetting] =
    React.useState(initialClockSetting);

  const onSave = () => {
    setMeasurementSystem(stateMeasurementSetting);
    setClockAmPmOr24h(stateClockSetting);
    toggleModal();
  };

  const onCancel = () => {
    setStateMeasurementSetting(initialMeasurementSetting);
    setStateClockSetting(initialClockSetting);
    toggleModal();
  };

  const modalClassName = isModalOpen ? 'open' : '';

  return (
    <ModalOverlay className={modalClassName}>
      <ModalWrapper>
        <SettingsModalFlexWrapper>
          <ModalTitle data-testid="settings-modal-title">Settings</ModalTitle>

          <ConfigGroup>
            <h2>Units</h2>
            <UnitSystemButton
              unit={MeasurementSystemSettings.IMPERIAL}
              onClick={() =>
                setStateMeasurementSetting(MeasurementSystemSettings.IMPERIAL)
              }
              currentUnit={stateMeasurementSetting}
            />
            <UnitSystemButton
              unit={MeasurementSystemSettings.METRIC}
              onClick={() =>
                setStateMeasurementSetting(MeasurementSystemSettings.METRIC)
              }
              currentUnit={stateMeasurementSetting}
            />
            <UnitSystemButton
              unit={MeasurementSystemSettings.STANDARD}
              onClick={() =>
                setStateMeasurementSetting(MeasurementSystemSettings.STANDARD)
              }
              currentUnit={stateMeasurementSetting}
            />
          </ConfigGroup>

          <ConfigGroup>
            <h2>Time</h2>
            <TimeSettingsButton
              timeSetting={ClockSettings.AM_PM}
              onClick={() => setStateClockSetting(ClockSettings.AM_PM)}
              currentTimeSetting={stateClockSetting}
            />
            <TimeSettingsButton
              timeSetting={ClockSettings.CLOCK_24}
              onClick={() => setStateClockSetting(ClockSettings.CLOCK_24)}
              currentTimeSetting={stateClockSetting}
            />
          </ConfigGroup>

          <ActionGroup>
            <ActionButton label={'Cancel'} onClick={onCancel} />
            <ActionButton label={'Save'} onClick={onSave} />
          </ActionGroup>

          <ClockGroup>
            <Clock setting={stateClockSetting} />
          </ClockGroup>
        </SettingsModalFlexWrapper>
      </ModalWrapper>
    </ModalOverlay>
  );
};
