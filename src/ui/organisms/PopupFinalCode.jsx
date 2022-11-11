import { Button, Confetti, Text } from 'ui/atoms'
import { PopupInfo } from 'ui/molecules'

export const PopupFinalCode = ({ isOpened, onClose, onSubmitClick }) => (
  <PopupInfo isOpened={isOpened} onClose={onClose}>
    <Confetti />

    <Text
      mb="32px"
      fontSize="20px"
      fontWeight="700"
      lineHeight="130%"
      letterSpacing="0.5px"
      textAlign="center"
      color="white"
    >
      Ты получил код для финального розыгрыша!
    </Text>

    <Button w="100%" onClick={onSubmitClick}>
      Отлично!
    </Button>
  </PopupInfo>
)
