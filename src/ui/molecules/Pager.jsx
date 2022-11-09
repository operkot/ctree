import styled, { css } from 'styled-components'
import { Link, useLocation } from 'react-router-dom'

import { PATHS } from 'routing/paths'

const PagerWrapper = styled.div`
  display: flex;
  width: 100%;
  border: 2px solid #fff;
  border-radius: 999px;

  > * {
    flex: 1;
  }
`

const PagerControl = styled.button`
  width: 100%;
  padding: 10px 14px;
  border-radius: 999px;

  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  color: #fff;

  @media (min-width: 375px) {
    padding: 10px 16px;
    font-size: 18px;
  }

  ${props =>
    props.isActive &&
    css`
      background-color: #fff;
      color: #52aa9a;
    `}
`

export const Pager = () => {
  const { pathname } = useLocation()

  return (
    <PagerWrapper>
      <Link to={PATHS.WEEKLY_LOTTERY}>
        <PagerControl isActive={pathname === PATHS.WEEKLY_LOTTERY}>
          Еженедельный
        </PagerControl>
      </Link>

      <Link to={PATHS.FINAL_LOTTERY}>
        <PagerControl isActive={pathname === PATHS.FINAL_LOTTERY}>
          Финальный
        </PagerControl>
      </Link>
    </PagerWrapper>
  )
}
