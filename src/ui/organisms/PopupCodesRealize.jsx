import { Box, Button, Text } from 'ui/atoms'
import { PopupInfo } from 'ui/molecules'

export const PopupCodesRealize = ({ isOpened, onClose }) => (
  <PopupInfo isOpened={isOpened} onClose={onClose} hasCloseBtn>
    <Text
      mb="16px"
      fontSize="20px"
      fontWeight="700"
      lineHeight="130%"
      letterSpacing="0.5px"
      textAlign="center"
      color="white"
    >
      Не забудь зарегистрировать!
    </Text>

    <Box mb="20px">
      <Box
        as="img"
        src="img/codes_media.svg"
        alt=""
        w="97px"
        h="39px"
        mx="auto"
        mb="18px"
      />
      <Text
        fontSize="16px"
        fontWeight="500"
        lineHeight="22px"
        textAlign="center"
        color="white"
      >
        Коды: 2
      </Text>
    </Box>

    <Button w="100%">Зарегистировать</Button>
  </PopupInfo>
)
