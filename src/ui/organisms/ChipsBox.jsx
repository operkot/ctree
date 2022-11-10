import { Box, Flex, Text } from 'ui/atoms'
import { ChipsCarousel } from './ChipsCarousel'

export const ChipsBox = ({ availableChips = 0, ...props }) => {
  return (
    <Box
      {...props}
      backgroundColor="#7abdb1"
      boxShadow={{
        lg: '0.886243px 2.65873px 18.6111px rgba(16, 87, 94, 0.31)',
      }}
      borderRadius={{ lg: '30px' }}
    >
      <Flex
        as="header"
        justifyContent="space-between"
        px={{ _: '20px', lg: '24px' }}
        py={{ _: '16px', lg: '22px' }}
        borderBottom={{ lg: '2px solid rgba(255, 255, 255, 0.4)' }}
      >
        <Text
          fontSize={{ _: '18px', lg: '24px' }}
          fontWeight="700"
          lineHeight={{ _: '24px', lg: '32px' }}
          color="#fff"
        >
          Фишки
        </Text>
        <Text
          fontSize={{ _: '16px', lg: '20px' }}
          fontWeight="400"
          lineHeight={{ _: '22px', lg: '26px' }}
          color="#fff"
        >
          Всего {availableChips}
        </Text>
      </Flex>

      <Box padding={{ _: '0 20px 28px', lg: '26px 22px' }}>
        <ChipsCarousel availableChips={availableChips} />
      </Box>
    </Box>
  )
}
