import { MAIN_MOBILE_LAYOUT_BACKGROUND } from 'constants/backgrounds'
import { Box, Text } from 'ui/atoms'
import { ChipsInfo } from 'ui/molecules'
import { LayoutMobile } from 'ui/layout'
import { MapList } from 'ui/organisms'

export const MapsMobile = ({ maps }) => {
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

        <ChipsInfo />
      </LayoutMobile.Header>

      <LayoutMobile.Content>
        <MapList maps={maps} />
      </LayoutMobile.Content>
    </LayoutMobile>
  )
}
