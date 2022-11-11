import { Box, Button, Text } from 'ui/atoms'
import { PopupInfo } from 'ui/molecules'

export const PopupCodeRegSuccess = ({
  title = 'Коды успешно зарегистрированы!',
  isOpened,
  onClose,
}) => (
  <PopupInfo isOpened={isOpened} onClose={onClose}>
    <Text
      mb="32px"
      fontSize="20px"
      fontWeight="700"
      lineHeight="130%"
      letterSpacing="0.5px"
      textAlign="center"
      color="white"
    >
      {title}
    </Text>

    <Button w="100%" onClick={onClose}>
      Отлично!
    </Button>
  </PopupInfo>
)
