import styled from 'styled-components'

import { Box, Container } from 'ui/atoms'
import { NavbarMobile } from 'ui/organisms'

const LayoutMobileWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 480px;
`

const LayoutMobileBody = styled(Container)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-top: 10px;
  padding-bottom: 24px;
`

const LayoutMobileHeader = styled(Box)``

const LayoutMobileContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
  min-width: 0;
`

export const LayoutMobile = ({ children, ...props }) => (
  <LayoutMobileWrapper {...props}>
    <NavbarMobile />

    <LayoutMobileBody>{children}</LayoutMobileBody>
  </LayoutMobileWrapper>
)

LayoutMobile.Header = LayoutMobileHeader
LayoutMobile.Content = LayoutMobileContent
