import { MAP_VIEW_DESKTOP_BACKGROUND } from 'constants/backgrounds'
import { LayoutMapDesktop } from 'ui/layout'
import { Board, ChipsBox } from 'ui/organisms'

export const MapViewDesktop = ({
  mapType,
  filledPoints,
  availableChips,
  onChipDrop,
}) => (
  <LayoutMapDesktop {...MAP_VIEW_DESKTOP_BACKGROUND}>
    <Board
      mapType={mapType}
      filledPoints={filledPoints}
      onChipDrop={onChipDrop}
    />

    <ChipsBox
      availableChips={availableChips}
      position="absolute"
      top="24px"
      right="84px"
      maxWidth={{ lg: '560px' }}
    />
  </LayoutMapDesktop>
)
