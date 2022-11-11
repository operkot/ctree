import { WEEKLY_DRAW_MOBILE_BACKGROUND } from 'constants/backgrounds'
import { Box, Text } from 'ui/atoms'
import { Pager } from 'ui/molecules'
import { LayoutMobile } from 'ui/layout'
import { CodeList } from 'ui/organisms'

const WEEKLY_CODES = [
  {
    week: '31 мая - 6 июня',
    coupons: [
      { code: '1234 5678' },
      { code: '1234 5678' },
      { code: '1234 5678' },
    ],
  },
  {
    week: '24 - 30 мая',
    coupons: [
      { code: '1234 5678' },
      { code: '1234 5678' },
      { code: '1234 5678' },
      { code: '1234 5678' },
      { code: '1234 5678' },
    ],
  },
]

export const WeeklyDrawMobile = ({ weeklyDrawCodes, isLoading, error }) => (
  <LayoutMobile {...WEEKLY_DRAW_MOBILE_BACKGROUND}>
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
      <CodeList
        codes={weeklyDrawCodes}
        isLoading={isLoading}
        hasError={error}
      />
    </LayoutMobile.Content>
  </LayoutMobile>
)
