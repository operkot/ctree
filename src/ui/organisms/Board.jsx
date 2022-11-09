import { useEffect, useMemo, useRef, useState } from 'react'

import styled from 'styled-components'

import { MAPS_POINTS_POSITION } from 'constants/maps'
import { BoardChipPreview, BoardPoint } from 'ui/molecules'

const BoardWrapper = styled.div`
  flex-grow: 1;
  background-color: #fff;
  min-height: 0;
  min-width: 0;
  overflow: auto;
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
`

export const Board = ({
  mapType = 1,
  filledPoints = 0,
  onChipDrop = () => {},
}) => {
  const wrapperRef = useRef(null)
  const [isMapImgLoaded, setIsMapImgLoaded] = useState(false)

  useEffect(() => {
    renderBoardPoints()
  }, [filledPoints])

  useEffect(() => {
    const offsetBottom = wrapperRef.current.scrollHeight

    wrapperRef.current.scrollTop = offsetBottom
  }, [isMapImgLoaded])

  // const mapImage = useMemo(() => {
  //   return isWideViewport ? `board-${type}` : `board-mobile-${type}`
  // }, [isWideViewport])

  const renderBoardPoints = () => {
    const mapTypePoints = MAPS_POINTS_POSITION[mapType]

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
          src={`img/board-mobile-${mapType}.png`}
          alt=""
          onLoad={() => setIsMapImgLoaded(true)}
        />
        {renderBoardPoints()}
      </BoardMap>
    </BoardWrapper>
  )
}
