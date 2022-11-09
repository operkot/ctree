import { Link } from 'react-router-dom'

import { PATHS } from 'routing/paths'
import { Box, Text } from 'ui/atoms'

const MainMenuLink = ({ children }) => (
  <Text
    as="a"
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

export const MainMenu = () => (
  <Box as="ul" divideX={2} divideColor="#419787" style={{ display: 'flex' }}>
    <Box as="li" px="24px">
      <MainMenuLink>Правила</MainMenuLink>
    </Box>
    <Box as="li" px="24px">
      <MainMenuLink>Победители</MainMenuLink>
    </Box>
  </Box>
)
