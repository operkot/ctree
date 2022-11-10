import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { DndProvider } from 'react-dnd'
import { TouchBackend } from 'react-dnd-touch-backend'
import { useDispatch } from 'react-redux'
import useMatchMedia from 'react-use-match-media'

import { useMapsManager } from 'hooks/useMapsManager'
import { realizeMapChip } from 'store/slices/mapsSlice'

import { MapViewMobile } from './MapViewMobile'
import { MapViewDesktop } from './MapViewDesktop'

const AVAILABLE_CHIPS = 12

export const MapView = () => {
  const isWideViewport = useMatchMedia('(min-width: 1200px)')
  const dispatch = useDispatch()
  const location = useLocation()
  const { maps } = useMapsManager()
  const { mapID, mapTitle } = location.state

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
    <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
      {isWideViewport ? (
        <MapViewDesktop
          mapType={selectedMap.type}
          filledPoints={selectedMap.chips}
          availableChips={AVAILABLE_CHIPS}
          onChipDrop={onChipDrop}
        />
      ) : (
        <MapViewMobile
          mapTitle={mapTitle}
          mapType={selectedMap.type}
          filledPoints={selectedMap.chips}
          availableChips={AVAILABLE_CHIPS}
          onChipDrop={onChipDrop}
        />
      )}
    </DndProvider>
  )
}
