import styled from 'styled-components'

import { Box, Container } from 'ui/atoms'
import { NavbarDesktop } from 'ui/organisms'

const LayoutDesktopWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const LayoutDesktopContent = styled(Container)`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-width: 0;
  min-height: 0;
  padding-top: 52px;
  padding-bottom: 170px;
`

export const LayoutDesktop = ({ children, ...props }) => (
  <LayoutDesktopWrapper {...props}>
    <NavbarDesktop />

    <LayoutDesktopContent>{children}</LayoutDesktopContent>
  </LayoutDesktopWrapper>
)
