import { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { DndProvider } from 'react-dnd'
import { TouchBackend } from 'react-dnd-touch-backend'
import useMatchMedia from 'react-use-match-media'
import { useNavigate } from 'react-router-dom'

import { PATHS } from 'routing/paths'
import { usePopupState } from 'hooks/usePopupState'
import { useMapsManager } from 'hooks/useMapsManager'
import { useCouponCountManager } from 'hooks/useCouponCountManager'
import { useFinalDrawManager } from 'hooks/useFinalDrawManager'

// import { realizeMapChip } from 'store/slices/mapsSlice'

import { PopupFinalCode, PopupBasicError } from 'ui/organisms'
import { MapViewMobile } from './MapViewMobile'
import { MapViewDesktop } from './MapViewDesktop'

export const MapView = () => {
  const [isBoardLoading, setBoardLoading] = useState(false)
  const isWideViewport = useMatchMedia('(min-width: 1200px)')
  const { chips, fetchCouponCount } = useCouponCountManager()
  const { realizeChip } = useFinalDrawManager()
  const location = useLocation()
  const { maps, fetchMaps } = useMapsManager()
  const { mapID, mapTitle } = location.state
  const navigate = useNavigate()

  const {
    isOpen: isPopupFinalCodeOpen,
    onOpen: onPopupFinalCodeOpen,
    onClose: onPopupFinalCodeClose,
  } = usePopupState()

  const {
    isOpen: isPopupErrorOpen,
    onOpen: onPopupErrorCodeOpen,
    onClose: onPopupErrorCodeClose,
  } = usePopupState()

  const selectedMap = useMemo(() => {
    return maps.filter(map => map.id === Number(mapID))[0]
  }, [maps, mapID])

  const onChipDrop = async () => {
    setBoardLoading(true)

    try {
      // setTimeout(() => {
      //   dispatch(realizeMapChip(mapID))
      //   setBoardLoading(false)
      // }, 2000)

      await realizeChip().unwrap()

      if (selectedMap.chips === 11) {
        onPopupFinalCodeOpen()
      }

      await fetchMaps().unwrap()
      await fetchCouponCount().unwrap()

      setBoardLoading(false)
    } catch (error) {
      setBoardLoading(false)
      onPopupErrorCodeOpen()
    }
  }

  const onPopupFinalCodeSubmit = () => navigate(PATHS.FINAL_DRAW)

  if (!selectedMap) {
    return null
  }

  return (
    <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
      {isWideViewport ? (
        <MapViewDesktop
          mapType={selectedMap.type}
          filledPoints={selectedMap.chips}
          availableChips={chips}
          isBoardLoading={isBoardLoading}
          onChipDrop={onChipDrop}
        />
      ) : (
        <MapViewMobile
          mapTitle={mapTitle}
          mapType={selectedMap.type}
          filledPoints={selectedMap.chips}
          availableChips={chips}
          isBoardLoading={isBoardLoading}
          onChipDrop={onChipDrop}
        />
      )}

      <PopupFinalCode
        isOpened={isPopupFinalCodeOpen}
        onClose={onPopupFinalCodeClose}
        onSubmitClick={onPopupFinalCodeSubmit}
      />
      <PopupBasicError
        isOpened={isPopupErrorOpen}
        onClose={onPopupErrorCodeClose}
      />
    </DndProvider>
  )
}
