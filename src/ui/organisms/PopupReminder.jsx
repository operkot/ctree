import { Box, Button, Flex, Text } from 'ui/atoms'
import { PopupInfo } from 'ui/molecules'

export const PopupReminder = ({ isOpened, onClose }) => (
  <PopupInfo isOpened={isOpened} onClose={onClose}>
    <Text
      mb="16px"
      fontSize="20px"
      fontWeight="700"
      lineHeight="130%"
      letterSpacing="0.5px"
      textAlign="center"
      color="white"
    >
      Не забудь про фишки и коды!
    </Text>

    <Flex mb="32px">
      <Box w="50%">
        <Box
          as="img"
          src="img/codes_media.svg"
          alt=""
          w="97px"
          h="39px"
          mx="auto"
          mb="20px"
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
      <Box w="50%">
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
    </Flex>

    <Button w="100%" onClick={onClose}>
      Хорошо
    </Button>
  </PopupInfo>
)
