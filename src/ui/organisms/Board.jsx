import { useEffect, useMemo, useRef, useState } from 'react'
import useMatchMedia from 'react-use-match-media'
import styled from 'styled-components'

import { WINTER_MAPS_POINTS_POSITION } from 'constants/maps'
import { BoardChipPreview, BoardPoint } from 'ui/molecules'

const BoardWrapper = styled.div`
  flex-grow: 1;
  background-color: #fff;
  min-height: 0;
  min-width: 0;
  overflow: auto;

  @media (min-width: 1200px) {
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    &::-webkit-scrollbar-track {
      border-radius: 8px;
      background-color: #fff;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #419787;
      border-radius: 8px;
    }
  }
`

const BoardScene = styled.img`
  @media (min-width: 768px) {
    min-width: 1093px;
    max-width: none;
    min-height: 1080px;
    height: 100vh;
  }

  @media (min-width: 1900px) {
    max-width: 100%;
  }
`

const BoardMap = styled.div`
  position: relative;
  display: inline-block;
  margin: 0;
  vertical-align: top;
`

export const Board = ({
  mapType = 1,
  filledPoints = 0,
  onChipDrop = () => {},
}) => {
  const wrapperRef = useRef(null)
  const [isMapImgLoaded, setIsMapImgLoaded] = useState(false)
  const isWideViewport = useMatchMedia('(min-width: 768px)')

  useEffect(() => {
    renderBoardPoints()
  }, [filledPoints])

  useEffect(() => {
    const offsetBottom = wrapperRef.current.scrollHeight

    wrapperRef.current.scrollTop = offsetBottom
  }, [isMapImgLoaded])

  const mapImage = useMemo(() => {
    return isWideViewport ? `board-${mapType}` : `board-mobile-${mapType}`
  }, [isWideViewport])

  const renderBoardPoints = () => {
    const mapTypePoints = WINTER_MAPS_POINTS_POSITION[mapType]

    if (!mapTypePoints) {
      return null
    }

    return mapTypePoints.map(point => (
      <BoardPoint
        key={point.id}
        {...point}
        isFilled={point.id <= filledPoints}
        dropHandler={onChipDrop}
        activePoint={Number(filledPoints) + 1}
      />
    ))
  }

  return (
    <BoardWrapper ref={wrapperRef}>
      <BoardMap>
        <BoardChipPreview />
        <BoardScene
          src={`img/${mapImage}.jpg`}
          alt=""
          onLoad={() => setIsMapImgLoaded(true)}
        />
        {renderBoardPoints()}
      </BoardMap>
    </BoardWrapper>
  )
}
