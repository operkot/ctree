import { useMapsManager } from 'hooks/useMapsManager'

import { MAIN_MOBILE_LAYOUT_BACKGROUND } from 'constants/backgrounds'
import { Box, Text } from 'ui/atoms'
import { LayoutMobile } from 'ui/layout'
import { MapList } from 'ui/organisms'

const MAP_LIST = [
  { id: 1, title: 'Карта №1', completed: true },
  { id: 2, title: 'Карта №2', completed: true },
  { id: 3, title: 'Карта №3', completed: false },
  // { id: 4, title: 'Карта №4', completed: false },
  // { id: 5, title: 'Карта №5', completed: false },
  // { id: 6, title: 'Карта №6', completed: false },
]

export const Maps = () => {
  const { maps } = useMapsManager()

  return (
    <LayoutMobile {...MAIN_MOBILE_LAYOUT_BACKGROUND}>
      <LayoutMobile.Header mb="24px">
        <Box
          as="img"
          src="img/my_maps.svg"
          alt="Мои карты"
          mx="auto"
          mb="16px"
        />

        <Box
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
            Доступных фишек: 3
          </Text>
          <Text
            fontSize="18px"
            fontWeight="400"
            lineHeight="24px"
            textAlign="center"
            color="#fff"
          >
            Вклеивай фишки в картах ниже, чтобы получить коды для финального
            розыгрыша
          </Text>
        </Box>
      </LayoutMobile.Header>

      <LayoutMobile.Content>
        <MapList maps={maps} />
      </LayoutMobile.Content>
    </LayoutMobile>
  )
}
