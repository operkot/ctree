import { FINAL_DRAW_DESKTOP_BACKGROUND } from 'constants/backgrounds'
import { Box, Flex } from 'ui/atoms'
import { ChipsInfo } from 'ui/molecules'
import { LayoutDesktop } from 'ui/layout'
import { MapList } from 'ui/organisms'

export const MapsDesktop = ({ maps }) => (
  <LayoutDesktop {...FINAL_DRAW_DESKTOP_BACKGROUND}>
    <Box
      as="img"
      src="img/maps_title.svg"
      alt="Мои карты"
      w="100%"
      maxWidth="398px"
      mx="auto"
      mb="28px"
    />

    <Flex
      maxWidth="544px"
      mx="auto"
      minHeight="0"
      minWidth="0"
      flexGrow="1"
      flexDirection="column"
    >
      <ChipsInfo mb="30px" />

      <MapList maps={maps} />
    </Flex>
  </LayoutDesktop>
)
