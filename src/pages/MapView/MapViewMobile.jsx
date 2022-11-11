import { MAP_VIEW_MOBILE_BACKGROUND } from 'constants/backgrounds'
import { LayoutMapMobile } from 'ui/layout'
import { Board, ChipsBox } from 'ui/organisms'

export const MapViewMobile = ({
  mapTitle,
  mapType,
  filledPoints,
  availableChips,
  isBoardLoading,
  onChipDrop,
}) => (
  <LayoutMapMobile navbarTitle={mapTitle} {...MAP_VIEW_MOBILE_BACKGROUND}>
    <Board
      mapType={mapType}
      filledPoints={filledPoints}
      isBoardLoading={isBoardLoading}
      onChipDrop={onChipDrop}
    />

    <ChipsBox availableChips={availableChips} />
  </LayoutMapMobile>
)
