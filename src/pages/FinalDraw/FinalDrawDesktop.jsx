import { Link } from 'react-router-dom'

import { PATHS } from 'routing/paths'
import { CODES_DESKTOP_LAYOUT_BACKGROUND } from 'constants/backgrounds'
import { Box, Button, Text } from 'ui/atoms'
import { LayoutDesktop } from 'ui/layout'
import { CodeList } from 'ui/organisms'

const FINAL_CODES = [
  {
    coupons: [
      { code: '1234 5678' },
      { code: '1234 5678' },
      { code: '1234 5678' },
      { code: '1234 5678' },
      { code: '1234 5678' },
      { code: '1234 5678' },
      { code: '1234 5678' },
      { code: '1234 5678' },
      { code: '1234 5678' },
      { code: '1234 5678' },
      { code: '1234 5678' },
      { code: '1234 5678' },
      { code: '1234 5678' },
    ],
  },
]

export const FinalDrawDesktop = () => (
  <LayoutDesktop {...CODES_DESKTOP_LAYOUT_BACKGROUND}>
    <Box
      w="100%"
      maxWidth="122px"
      mx="auto"
      padding="8px 12px"
      borderRadius="24px"
      backgroundColor="rgba(255, 255, 255, 0.7)"
    >
      <Text
        fontFamily="earthsmightiest"
        fontWeight="700"
        fontSize="24px"
        lineHeight="18px"
        textAlign="center"
        letterSpacing="0.01em"
        textTransform="uppercase"
        color="#205A64"
      >
        25 декабря
      </Text>
    </Box>

    <Box
      as="img"
      src="img/final_draw_title.svg"
      alt="Финальный розыгрыш"
      w="383px"
      mx="auto"
      mb="56px"
    />

    <Text
      mb="24px"
      fontWeight="700"
      fontSize="24px"
      lineHeight="18px"
      textAlign="center"
      textTransform="uppercase"
      color="#205A64"
    >
      Мои коды
    </Text>

    <Box
      w="100%"
      maxWidth="588px"
      mx="auto"
      minHeight="0"
      minWidth="0"
      style={{ flexGrow: 1 }}
    >
      <CodeList codes={FINAL_CODES} mb="18px" maxHeight="232px" />

      <Link to={PATHS.MAPS}>
        <Button variant="primary" w="100%" py="13px">
          Заполнить карту
        </Button>
      </Link>
    </Box>

    <Box
      as="img"
      src="img/prize_sum.png"
      position="absolute"
      bottom="20px"
      left="50%"
      ml="-188px"
    />
  </LayoutDesktop>
)
