import { Box, Button, Text } from 'ui/atoms'
import { PopupInfo } from 'ui/molecules'

export const PopupChipsRealize = ({ isOpened, onClose }) => (
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
      Не забудь вклеить фишки!
    </Text>

    <Box mb="20px">
      <Box
        as="img"
        src="img/chips_media.svg"
        alt=""
        w="50px"
        h="50px"
        mx="auto"
        mb="9px"
      />
      <Text
        fontSize="16px"
        fontWeight="500"
        lineHeight="22px"
        textAlign="center"
        color="white"
      >
        Фишки: 10
      </Text>
    </Box>

    <Button w="100%">Вклеить фишки</Button>
  </PopupInfo>
)
