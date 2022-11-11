import { Link } from 'react-router-dom'

import { PATHS } from 'routing/paths'
import { Box, Text } from 'ui/atoms'

const MainMenuLinkContent = ({ children }) => (
  <Text
    href="#"
    fontWeight="700"
    fontSize="18px"
    lineHeight="24px"
    textTransform="uppercase"
    color={{ _: '#fff', hover: 'red.0' }}
    style={{ transition: 'color 0.3s ease' }}
  >
    {children}
  </Text>
)

export const MainMenu = props => (
  <Box
    as="ul"
    divideX={2}
    divideColor="#419787"
    style={{ display: 'flex' }}
    {...props}
  >
    <Box as="li" px="24px">
      <Link to={PATHS.RULES}>
        <MainMenuLinkContent>Правила</MainMenuLinkContent>
      </Link>
    </Box>
    <Box as="li" px="24px">
      <a href="#">
        <MainMenuLinkContent>Победители</MainMenuLinkContent>
      </a>
    </Box>
  </Box>
)
