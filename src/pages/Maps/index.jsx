import useMatchMedia from 'react-use-match-media'

import { useMapsManager } from 'hooks/useMapsManager'
import { MapsMobile } from './MapsMobile'
import { MapsDesktop } from './MapsDesktop'

const MAPS_MOCK = [
  {
    id: 6,
    id_map: null,
    chips: 12,
    type: 1,
    status: 2,
  },
  {
    id: 30,
    id_map: null,
    chips: 12,
    type: 2,
    status: 2,
  },
  {
    id: 38,
    id_map: null,
    chips: 12,
    type: 3,
    status: 2,
  },
  {
    id: 41,
    id_map: null,
    chips: 12,
    type: 1,
    status: 2,
  },
  {
    id: 42,
    id_map: null,
    chips: 12,
    type: 2,
    status: 2,
  },
  {
    id: 53,
    id_map: 1,
    chips: 12,
    type: 3,
    status: 2,
  },
  {
    id: 54,
    id_map: 2,
    chips: 0,
    type: 1,
    status: 1,
  },
]

export const Maps = () => {
  const { maps } = useMapsManager()
  const isWideViewport = useMatchMedia('(min-width: 1200px)')

  return isWideViewport ? (
    <MapsDesktop maps={MAPS_MOCK} />
  ) : (
    <MapsMobile maps={MAPS_MOCK} />
  )
}
