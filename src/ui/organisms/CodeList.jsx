import { Fragment } from 'react'
import styled from 'styled-components'

import { Text } from 'ui/atoms'

const CodeListWrapper = styled.ul`
  max-height: 100%;
  overflow: hidden;
  flex-grow: 1;
  border: 2px dashed #fff;
  border-radius: 16px;
  background-color: rgba(46, 154, 135, 0.3);

  overflow-y: auto;

  &:not(:last-child) {
    margin-bottom: 24px;
  }
`

const CodeListItem = styled.li`
  padding: 16px;
  border-bottom: 2px dashed #fff;

  &:last-child {
    border-bottom: none;
  }
`

export const CodeList = ({ codes = [] }) => {
  return (
    <CodeListWrapper>
      {codes.map((unit, idx) => (
        <Fragment key={idx}>
          {unit.week && (
            <CodeListItem>
              <Text
                fontSize="20px"
                fontWeight="700"
                lineHeight="28px"
                textAlign="center"
                color="#fff"
              >
                {unit.week}
              </Text>
            </CodeListItem>
          )}
          {unit.coupons.map((coupon, idx) => (
            <CodeListItem key={idx}>
              <Text
                fontSize="18px"
                fontWeight="500"
                lineHeight="24px"
                textAlign="center"
                color="#fff"
              >
                {coupon.code}
              </Text>
            </CodeListItem>
          ))}
        </Fragment>
      ))}
    </CodeListWrapper>
  )
}
