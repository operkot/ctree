import { Fragment } from 'react'
import styled from 'styled-components'

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
  border-top: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid transparent;

  @media (min-width: 1200px) {
    padding-right: 32px;
    padding-left: 32px;
  }

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fff;
    border-radius: 8px;
  }
`

const CodeListItem = styled.li`
  padding: 16px;
  border-bottom: 2px dashed #fff;

  &:last-child {
    border-bottom: none;
  }
`

export const CodeList = ({ codes = [], ...props }) => {
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
      </CodesListBody>
    </CodeListWrapper>
  )
}
