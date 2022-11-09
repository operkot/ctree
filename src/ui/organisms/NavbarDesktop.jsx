import styled from 'styled-components'
import { Box, Container, Flex } from 'ui/atoms'
import { MainMenu } from 'ui/organisms'

const NavbarDesktopContent = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavbarDesktop = () => (
  <Box py="19px" backgroundColor="rgba(46, 154, 135, 0.5)">
    <NavbarDesktopContent>
      <Flex>
        <Box as="img" src="img/spar-logo.svg" alt="Spar" mr="48px" />
        <Box as="img" src="img/semya-logo.svg" alt="Семья" />
      </Flex>

      <MainMenu />
    </NavbarDesktopContent>
  </Box>
)
