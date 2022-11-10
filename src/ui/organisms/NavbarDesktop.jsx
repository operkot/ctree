import styled from 'styled-components'
import { useLocation, matchPath } from 'react-router-dom'

import { PATHS } from 'routing/paths'
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
  const isHome = !!matchPath({ path: pathname, exact: true }, '/')

  return (
    <Box py="19px" backgroundColor="rgba(46, 154, 135, 0.5)">
      <NavbarDesktopContent>
        {!isHome && (
          <Button
            variant="secondary"
            mr="42px"
            px="16px"
            py="6px"
            borderRadius="12px"
          >
            <Box as="img" src="img/nav-left.svg" alt="" mr="12px" />
            Назад
          </Button>
        )}

        <Flex>
          <Box as="img" src="img/spar-logo.svg" alt="Spar" mr="48px" />
          <Box as="img" src="img/semya-logo.svg" alt="Семья" />
        </Flex>

        <NavbarDesktopMenu />
      </NavbarDesktopContent>
    </Box>
  )
}
