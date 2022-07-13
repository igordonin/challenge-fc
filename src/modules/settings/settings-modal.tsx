import { Clock } from '../../components/clock';
import {
  ConfigGroup,
  ModalOverlay,
  ModalTitle,
  ModalWrapper,
  SettingsModalFlexWrapper,
} from './settings-modal.styles';
import { UnitSystems } from './settings-store';
import { TimeSettingsButton } from './time-settings-button';
import { UnitSystemButton } from './unit-system-button';

export const SettingsModal = () => {
  return (
    <ModalOverlay>
      <ModalWrapper>
        <SettingsModalFlexWrapper>
          <ModalTitle>Settings</ModalTitle>

          <ConfigGroup>
            <h2>Units</h2>
            <div>
              <UnitSystemButton unit={UnitSystems.IMPERIAL} />
              <UnitSystemButton unit={UnitSystems.METRIC} />
              <UnitSystemButton unit={UnitSystems.STANDARD} />
            </div>
          </ConfigGroup>

          <ConfigGroup>
            <h2>Time</h2>
            <div>
              <TimeSettingsButton timeSetting="AM/PM" />
              <TimeSettingsButton timeSetting="24h" />
            </div>
          </ConfigGroup>

          <div>Cancel | Save</div>

          <Clock />
        </SettingsModalFlexWrapper>
      </ModalWrapper>
    </ModalOverlay>
  );
};
