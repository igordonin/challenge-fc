import { UnitSystems } from '../../store';
import { Clock } from '../../components/clock';
import {
  ConfigGroup,
  ModalOverlay,
  ModalTitle,
  ModalWrapper,
  SettingsModalFlexWrapper,
} from './settings-modal.styles';
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

          <div>
            <h2>Time</h2>
            AM/PM | 24h
          </div>

          <div>Cancel | Save</div>

          <Clock />
        </SettingsModalFlexWrapper>
      </ModalWrapper>
    </ModalOverlay>
  );
};
