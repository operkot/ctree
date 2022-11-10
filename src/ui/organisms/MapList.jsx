import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { PATHS } from 'routing/paths'
import { MAP_STATUS } from 'constants/maps'
import { Text } from 'ui/atoms'

const MapListWrapper = styled.div`
  max-height: 100%;
  overflow: hidden;
  overflow-y: auto;
  flex-grow: 1;
  min-height: 0;
  min-width: 0;

  &::-webkit-scrollbar {
    width: 20px;
  }

  &::-webkit-scrollbar-track {
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    background-clip: padding-box;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    background-clip: padding-box;
    border-radius: 8px;
    background-color: #fff;
  }
`

const MapListContent = styled.ul``

const MapsListScroller = styled.div`
  height: 0;
  opacity: 0;
`

const MapListItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 56px;
  padding: 8px;
  box-shadow: inset 0px -4px 7px -1px rgba(39, 74, 68, 0.22);
  border-radius: 12px;
  background: #fff;

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  @media (min-width: 1200px) {
    min-height: 80px;
    padding: 12px 14px 12px 20px;
  }
`

const MapsListLink = styled(Link)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const MapsListItemIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 40px;
  border-radius: 12px;
  background-image: ${props =>
    props.isCompleted
      ? 'linear-gradient(180deg, #79CFC0 0%, #459D8E 100%)'
      : 'linear-gradient(180deg, #E63535 0%, #AC2828 100%)'};
  box-shadow: inset 0px -2px 1px rgba(0, 0, 0, 0.25);

  @media (min-width: 1200px) {
    width: 78px;
    height: 56px;
    border-radius: 18px;
  }
`

export const MapList = ({ maps }) => {
  const scrollerRef = useRef()

  useEffect(() => {
    if (!maps || !maps.length) return

    scrollerRef.current.scrollIntoView()
  })

  if (!maps || !maps.length) {
    return null
  }

  return (
    <MapListWrapper>
      <MapListContent>
        {maps.map((unit, idx) => (
          <MapListItem key={idx}>
            <MapsListLink to={PATHS.MAP_VIEW} state={{ mapID: unit.id }} />

            <Text
              fontWeight="700"
              fontSize={{ _: '18px', lg: '24px' }}
              lineHeight={{ _: '24px', lg: '32px' }}
            >
              Карта №{idx + 1}
            </Text>

            <MapsListItemIndicator
              isCompleted={unit.status === MAP_STATUS.COMPLETED}
            >
              {unit.status === MAP_STATUS.COMPLETED ? (
                <img src="img/check.svg" alt="" />
              ) : (
                <img src="img/arrow-right.svg" alt="" />
              )}
            </MapsListItemIndicator>
          </MapListItem>
        ))}
      </MapListContent>
      <MapsListScroller ref={scrollerRef} />
    </MapListWrapper>
  )
}
