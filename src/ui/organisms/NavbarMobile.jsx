import qs from 'query-string'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { PATHS } from 'routing/paths'
import { getNavLinkBasedOnLocation } from 'utils/navigation'
import { Box, Flex, Text } from 'ui/atoms'

export const NavbarMobile = ({ goBackURL = PATHS.HOME, navbarTitle }) => {
  const location = useLocation()
  const navigate = useNavigate()

  const onBackClick = () => {
    const isHome = location.pathname === '/'

    if (isHome) {
      const { closeUrl } = qs.parse(window.location.href)

      if (!closeUrl) return

      window.location.href = closeUrl
    }

    if (!isHome) {
      navigate({ pathname: getNavLinkBasedOnLocation(location.pathname) })
    }
  }

  return (
    <Flex justifyContent="space-between" minHeight="44px" padding="10px 12px">
      <Box as="button" w="24px" h="24px" onClick={onBackClick}>
        <img src="img/arrow_back.svg" alt="" />
      </Box>

      {navbarTitle && (
        <Text
          fontSize="15px"
          lineHeight="24px"
          textAlign="center"
          letterSpacing="-0.3px"
          color="#fff"
        >
          {navbarTitle}
        </Text>
      )}

      <Flex>
        <Box as="button" w="24px" h="24px" mr="16px">
          <img src="img/vk.svg" alt="" />
        </Box>
        <Box as="span" w="24px" h="24px">
          <Link to={PATHS.RULES}>
            <img src="img/info.svg" alt="" />
          </Link>
        </Box>
      </Flex>
    </Flex>
  )
}
