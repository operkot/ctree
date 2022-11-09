import { Link } from 'react-router-dom'

import { CODES_MOBILE_LAYOUT_BACKGROUND } from 'constants/backgrounds'
import { PATHS } from 'routing/paths'
import { Button, Box, Text } from 'ui/atoms'
import { Pager } from 'ui/molecules'
import { LayoutMobile } from 'ui/layout'
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

export const FinalLottery = () => (
  <LayoutMobile {...CODES_MOBILE_LAYOUT_BACKGROUND}>
    <LayoutMobile.Header>
      <Box
        as="img"
        src="img/raffle_title.svg"
        alt="Розыгрыш"
        mx="auto"
        mb="16px"
      />

      <Box mb="24px">
        <Pager />
      </Box>

      <Text
        mb="20px"
        fontWeight="700"
        lineHeight="18px"
        textAlign="center"
        textTransform="uppercase"
        color="#205A64"
      >
        Мои коды
      </Text>
    </LayoutMobile.Header>

    <LayoutMobile.Content>
      <CodeList codes={FINAL_CODES} />

      <Link to={PATHS.MAPS}>
        <Button variant="primary" w="100%" py="13px">
          Заполнить карту
        </Button>
      </Link>
    </LayoutMobile.Content>
  </LayoutMobile>
)
