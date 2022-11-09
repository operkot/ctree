import styled from 'styled-components'
import { Popup } from 'ui/atoms'

const PopupInfoPanel = styled.div`
  position: relative;
  width: 100vw; // vw вместо % предотвращает схлопывание элемента
  max-width: 328px;
  padding: 80px 16px 16px 16px;
  margin-top: 85px;
  border-radius: 32px;
  background: linear-gradient(180deg, #a3dcd2 0%, #4eb4a1 100%);
`

const PopupInfoLogo = styled.img`
  position: absolute;
  top: -85px;
  left: 50%;
  margin-left: -96px;
`

const PopupInfoClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

  width: 24px;
  height: 24px;
  padding: 0;
  border: 0;

  background-color: transparent;
  background-image: url(img/close.svg);
  background-repeat: no-repeat;
  background-size: 24px;
  background-position: 50%;
`

export const PopupInfo = ({ children, isOpened, onClose, hasCloseBtn }) => (
  <Popup isOpened={isOpened} onClose={onClose}>
    <PopupInfoPanel>
      <PopupInfoLogo src={'img/popup_logo.png'} />
      {hasCloseBtn && <PopupInfoClose onClick={onClose} />}

      {children}
    </PopupInfoPanel>
  </Popup>
)
