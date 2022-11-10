import { CODES_DESKTOP_LAYOUT_BACKGROUND } from 'constants/backgrounds'
import { Box, Flex, Text } from 'ui/atoms'
import { NoticeItem } from 'ui/molecules'
import { LayoutDesktop } from 'ui/layout'
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

export const WeeklyDrawDesktop = () => (
  <LayoutDesktop {...CODES_DESKTOP_LAYOUT_BACKGROUND}>
    <Flex alignItems="center" justifyContent="center" mb="64px">
      <NoticeItem
        variant="warning"
        size="lg"
        title="27"
        caption="iPhone 14"
        maxWidth="96px"
        mr="62px"
      />

      <Box
        as="img"
        src="img/weekly_draw_title.svg"
        alt="Еженедельный розыгрыш"
        mr="54px"
      />

      <NoticeItem
        variant="success"
        size="lg"
        title="5"
        subtitle="декабря"
        caption="Ближайший розыгрыш"
        maxWidth="108px"
      />
    </Flex>

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
      <CodeList codes={WEEKLY_CODES} />
    </Box>
  </LayoutDesktop>
)
