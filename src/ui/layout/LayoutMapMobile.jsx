import styled from 'styled-components'

import { Box } from 'ui/atoms'
import { NavbarMobile } from 'ui/organisms'

const LayoutMapMobileWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 480px;
`

const LayoutMapMobileContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
  min-width: 0;
`

export const LayoutMapMobile = ({ children, navbarTitle, ...props }) => (
  <LayoutMapMobileWrapper {...props}>
    <NavbarMobile navbarTitle={navbarTitle} />

    <LayoutMapMobileContent>{children}</LayoutMapMobileContent>
  </LayoutMapMobileWrapper>
)
