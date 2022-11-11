import { PATHS } from 'routing/paths'

export const getNavLinkBasedOnLocation = location => {
  switch (location) {
    case PATHS.MAP_VIEW:
      return PATHS.MAPS
    case PATHS.MAPS:
      return PATHS.FINAL_DRAW
    default:
      return PATHS.HOME
  }
}
