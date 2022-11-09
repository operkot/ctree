import { Button, LinkWithQuery, Text } from 'ui/atoms'
import { PopupInfo } from 'ui/molecules'

import { PATHS } from 'routing/paths'

export const PopupRules = ({ isOpened, onClose }) => (
  <PopupInfo isOpened={isOpened} onClose={onClose}>
    <Text
      mb="42px"
      fontSize="20px"
      fontWeight="700"
      lineHeight="130%"
      textAlign="center"
      color="white"
    >
      Прежде чем начать игру, ознакомься с{' '}
      <LinkWithQuery to={PATHS.RULES}>
        <Text as="span" textDecoration={{ _: 'underline', hover: 'none' }}>
          правилами акции
        </Text>
      </LinkWithQuery>
      .
    </Text>
    <Button w="100%" onClick={onClose}>
      Продолжить
    </Button>
  </PopupInfo>
)
