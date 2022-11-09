import { Link } from 'react-router-dom'

import { PATHS } from 'routing/paths'
import { HOME_DESKTOP_LAYOUT_BACKGROUND } from 'constants/backgrounds'
import { Box, Button } from 'ui/atoms'
import { LayoutDesktop } from 'ui/layout'
import { Notice } from 'ui/organisms'

export const HomeDesktop = () => (
  <LayoutDesktop {...HOME_DESKTOP_LAYOUT_BACKGROUND}>
    <Notice mb="32px" ml="38px" />

    <Box
      as="img"
      src="img/main_title_img.svg"
      alt="Участвуй в рохыгрышах"
      mb="42px"
    />

    <Box maxWidth="400px">
      <Link to={PATHS.WEEKLY_LOTTERY}>
        <Button w="100%" mb="16px" py="18px" fontSize="24px">
          Еженедельный розыгрыш
        </Button>
      </Link>

      <Link to={PATHS.FINAL_LOTTERY}>
        <Button variant="primary" w="100%" py="18px" fontSize="24px">
          Еженедельный розыгрыш
        </Button>
      </Link>
    </Box>
  </LayoutDesktop>
)
