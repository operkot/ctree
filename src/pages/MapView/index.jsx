import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { DndProvider } from 'react-dnd'
import { TouchBackend } from 'react-dnd-touch-backend'
import { useDispatch } from 'react-redux'

import { MAP_VIEW_LAYOUT_BACKGROUND } from 'constants/backgrounds'
import { LayoutMapMobile } from 'ui/layout'
import { Board, ChipsBox } from 'ui/organisms'

import { useMapsManager } from 'hooks/useMapsManager'
import { realizeMapChip } from 'store/slices/mapsSlice'

const AVAIBLE_CHIPS = 12

export const MapView = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const { maps } = useMapsManager()
  const { mapID } = location.state

  const selectedMap = useMemo(() => {
    return maps.filter(map => map.id === Number(mapID))[0]
  }, [maps, mapID])

  const onChipDrop = () => {
    console.log('Chip dropped on the board!')
    dispatch(realizeMapChip(mapID))
  }

  if (!selectedMap) {
    return null
  }

  return (
    <LayoutMapMobile {...MAP_VIEW_LAYOUT_BACKGROUND}>
      <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
        <Board
          mapType={selectedMap.type}
          filledPoints={selectedMap.chips}
          onChipDrop={onChipDrop}
        />

        <ChipsBox avaibleChips={AVAIBLE_CHIPS} />
      </DndProvider>
    </LayoutMapMobile>
  )
}
