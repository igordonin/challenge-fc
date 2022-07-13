import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0);
  backdrop-filter: blur(5px);
  z-index: 2;
`;

export const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const SettingsModalFlexWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 700px;
  padding: 20px;
  background-color: #000;
  border: 1px solid #0a84ff;
  border-radius: 20px;
`;

export const ModalTitle = styled.h1`
  margin: 0px;
`;

export const ConfigGroup = styled.div`
  width: 100%;
  text-align: center;
`;

export const ActionGroup = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 60px;
`;

export const ClockGroup = styled.div`
  width: 100%;
  text-align: right;
  margin-top: 20px;
`;
