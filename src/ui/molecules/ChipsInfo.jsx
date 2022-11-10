import { Box, Text } from 'ui/atoms'

export const ChipsInfo = ({ availableChips = 0, ...props }) => (
  <Box
    {...props}
    padding="24px 16px 28px 16px"
    border="2px solid #fff"
    borderRadius="16px"
    backgroundColor="rgba(46, 154, 135, 0.3)"
  >
    <Text
      as="h2"
      mb="8px"
      fontWeight="700"
      fontSize="20px"
      letterSpacing="0.5px"
      lineHeight="26px"
      textAlign="center"
      color="#fff"
    >
      Доступных фишек: {availableChips}
    </Text>
    <Text
      fontSize="18px"
      fontWeight="400"
      lineHeight="24px"
      textAlign="center"
      color="#fff"
    >
      Вклеивай фишки в картах ниже, чтобы получить коды для финального розыгрыша
    </Text>
  </Box>
)
