import { Link } from 'react-router-dom'

import { PATHS } from 'routing/paths'
import { MAIN_MOBILE_LAYOUT_BACKGROUND } from 'constants/backgrounds'
import { Box, Button } from 'ui/atoms'
import { Notice } from 'ui/organisms'
import { LayoutMobile } from 'ui/layout'

export const HomeMobile = () => {
  return (
    <LayoutMobile {...MAIN_MOBILE_LAYOUT_BACKGROUND}>
      <LayoutMobile.Content>
        <Notice mb={{ _: '20px', md: '28px' }} />

        <Box
          maxWidth={{ _: '100%', md: '486px' }}
          mb={{ _: '28px', md: '58px' }}
        >
          <Box
            as="img"
            src="img/main_title_img.svg"
            alt="Участвуй в рохыгрышах"
            mx="auto"
            w="100%"
            maxWidth={{ _: '300px', md: 'none' }}
          />
        </Box>

        <Box maxWidth={{ md: '486px' }}>
          <Link to={PATHS.WEEKLY_LOTTERY}>
            <Button
              as="span"
              w="100%"
              px={{ _: '16px', xs: '20px' }}
              py={{ _: '12px', xs: '16px' }}
              mb="16px"
              fontSize={{ _: '16px', xs: '20px' }}
              boxShadow="0px 0px 4px rgba(0, 0, 0, 0.15)"
            >
              Еженедельный розыгрыш
            </Button>
          </Link>

          <Link to={PATHS.FINAL_LOTTERY}>
            <Button
              as="span"
              variant="primary"
              w="100%"
              px={{ _: '16px', xs: '20px' }}
              py={{ _: '12px', xs: '16px' }}
              fontSize={{ _: '16px', xs: '20px' }}
              boxShadow="0px 0px 4px rgba(0, 0, 0, 0.15)"
            >
              Финальный розыгрыш
            </Button>
          </Link>
        </Box>
      </LayoutMobile.Content>
    </LayoutMobile>
  )
}
