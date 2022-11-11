import { Fragment } from 'react'
import styled from 'styled-components'

import { weekDatesRange } from 'utils/date'
import { Box, Text } from 'ui/atoms'

const CodeListWrapper = styled(Box)`
  display: flex;
  overflow: hidden;
  border: 2px dashed #fff;
  border-radius: 16px;
  background-color: rgba(46, 154, 135, 0.3);
`

CodeListWrapper.defaultProps = {
  maxHeight: '100%',
}

const CodesListBody = styled.ul`
  flex-grow: 1;
  max-height: 100%;
  overflow: hidden;
  padding-right: 16px;
  padding-left: 16px;
  overflow-y: auto;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;

  @media (min-width: 1200px) {
    padding-right: 32px;
    padding-left: 32px;
  }

  &:not(:last-child) {
    margin-bottom: 24px;
  }

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

const CodeListItem = styled.li`
  padding: 16px;
  border-bottom: 2px dashed #fff;

  &:last-child {
    border-bottom: none;
  }
`

export const CodeList = ({ codes = [], isLoading, hasError, ...props }) => {
  if (isLoading || !codes || !codes.length) {
    return null
  }

  return (
    <CodeListWrapper {...props}>
      <CodesListBody>
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
                  {weekDatesRange(unit.week)}
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
      </CodesListBody>
    </CodeListWrapper>
  )
}
