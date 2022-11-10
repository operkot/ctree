import { Box, Flex, Text } from 'ui/atoms'
import { ChipsCarousel } from './ChipsCarousel'

export const ChipsBox = ({ availableChips = 0 }) => {
  return (
    <Box pt="16px" pb="28px">
      <Flex as="header" justifyContent="space-between" mb="12px" px="12px">
        <Text fontSize="18px" fontWeight="700" lineHeight="24px" color="#fff">
          Фишки
        </Text>
        <Text fontSize="16px" lineHeight="22px" color="#fff">
          Всего {availableChips}
        </Text>
      </Flex>

      <ChipsCarousel availableChips={availableChips} />
    </Box>
  )
}
