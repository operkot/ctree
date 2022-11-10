import styled from 'styled-components'

import { Box } from 'ui/atoms'
import { NavbarDesktop } from 'ui/organisms'

const LayoutMapDesktopWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 480px;
`

const LayoutMapDesktopContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
  min-width: 0;
`

export const LayoutMapDesktop = ({ children, ...props }) => (
  <LayoutMapDesktopWrapper {...props}>
    <NavbarDesktop />

    <LayoutMapDesktopContent>{children}</LayoutMapDesktopContent>
  </LayoutMapDesktopWrapper>
)
