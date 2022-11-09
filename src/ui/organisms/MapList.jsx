import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { PATHS } from 'routing/paths'
import { MAP_STATUS } from 'constants/maps'
import { Text } from 'ui/atoms'

const MapListWrapper = styled.ul`
  max-height: 100%;
  overflow: hidden;
  overflow-y: auto;
  flex-grow: 1;
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
      ? 'linear-gradient(180deg, #68bdae 0%, #4ea898 100%)'
      : 'linear-gradient(180deg, #E42032 0%, #C51E2D 100%)'};
  box-shadow: inset 0px -2px 1px rgba(0, 0, 0, 0.25);
`

export const MapList = ({ maps }) => {
  if (!maps || !maps.length) {
    return null
  }

  return (
    <MapListWrapper>
      {maps.map((unit, idx) => (
        <MapListItem key={idx}>
          <MapsListLink to={PATHS.MAP_VIEW} state={{ mapID: unit.id }} />

          <Text fontWeight="700" fontSize="18px" lineHeight="24px">
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
    </MapListWrapper>
  )
}
