import styled from 'styled-components'
import { Link, useLocation, matchPath } from 'react-router-dom'

import { PATHS } from 'routing/paths'
import { getNavLinkBasedOnLocation } from 'utils/navigation'
import { Box, Button, Container, Flex } from 'ui/atoms'
import { MainMenu } from 'ui/organisms'

const NavbarDesktopContent = styled(Container)`
  display: flex;
  align-items: center;
`

const NavbarDesktopMenu = styled(MainMenu)`
  margin-left: auto;
`

export const NavbarDesktop = () => {
  const { pathname } = useLocation()
  const isHome = !!matchPath({ path: pathname, exact: true }, PATHS.HOME)
  const isMapView = !!matchPath({ path: pathname, exact: true }, PATHS.MAP_VIEW)

  return (
    <Box py="19px" backgroundColor="rgba(46, 154, 135, 0.5)">
      <NavbarDesktopContent>
        {!isHome && (
          <Link to={getNavLinkBasedOnLocation(pathname)}>
            <Button
              as="div"
              variant="secondary"
              mr="42px"
              px="16px"
              py="6px"
              borderRadius="12px"
            >
              <Box as="img" src="img/nav-left.svg" alt="" mr="12px" />
              Назад
            </Button>
          </Link>
        )}

        {!isMapView && (
          <Flex>
            <Box as="img" src="img/spar_logo.svg" alt="Spar" mr="48px" />
            <Box as="img" src="img/semya_logo.svg" alt="Семья" mr="38px" />
            <Box as="img" src="img/pobeda_logo.svg" alt="Победа" />
          </Flex>
        )}

        <NavbarDesktopMenu />
      </NavbarDesktopContent>
    </Box>
  )
}
