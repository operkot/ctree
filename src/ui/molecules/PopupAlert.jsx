import styled from 'styled-components'

import { Button, Popup } from 'ui/atoms'

const PopupAlertPanel = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw; // vw вместо % предотвращает схлопывание элемента
  max-width: 328px;
  min-height: 182px;
  padding: 24px 16px 16px 16px;
  border-radius: 32px;
  background: linear-gradient(180deg, #a3dcd2 0%, #4eb4a1 100%);
`

const PopupAlertContent = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 16px;

  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  letter-spacing: 0.5px;

  color: ${props => props.theme.colors.white};
`

export const PopupAlert = ({
  message = '',
  btnText = 'Хорошо',
  isOpened,
  onClose,
}) => (
  <Popup isOpened={isOpened} onClose={onClose}>
    <PopupAlertPanel>
      <PopupAlertContent>{message}</PopupAlertContent>

      <Button variant="primary" w="100%" onClick={onClose}>
        {btnText}
      </Button>
    </PopupAlertPanel>
  </Popup>
)
