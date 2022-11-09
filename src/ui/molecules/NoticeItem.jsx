import styled, { css } from 'styled-components'

import { Box, Text } from 'ui/atoms'

const NoticeItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 84px;

  &:not(:last-child) {
    margin-right: 24px;
  }
`

const NoticeItemDispaly = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  padding: 4px;
  border-radius: 9999px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 8px;

  &:after {
    content: '';

    position: absolute;
    z-index: -1;
    right: -4px;
    bottom: -4px;
    width: 74px;
    height: 74px;
    border-radius: 9999px;
  }

  @media (min-width: 1200px) {
    width: 80px;
    height: 80px;

    &:before {
      content: '';

      position: absolute;
    }

    &:after {
      width: 84px;
      height: 84px;
    }
  }

  ${props =>
    props.variant === 'danger' &&
    css`
      background-color: #d04f29;

      &:before {
        top: -22px;
        left: 13px;
        width: 26px;
        height: 31px;
        background-image: url(img/ball_ring_1.svg);
      }

      &:after {
        background-color: #b23121;
      }
    `}

  ${props =>
    props.variant === 'warning' &&
    css`
      background-color: #f8b255;

      &:before {
        top: -22px;
        left: 38px;
        width: 18px;
        height: 28px;
        background-image: url(img/ball_ring_2.svg);
      }

      &:after {
        background-color: #dc8930;
      }
    `}

  ${props =>
    props.variant === 'success' &&
    css`
      background-color: #5c885c;

      &:before {
        top: -22px;
        left: 11px;
        width: 27px;
        height: 32px;
        background-image: url(img/ball_ring_3.svg);
      }

      &:after {
        background-color: #3f693e;
      }
    `}
`

export const NoticeItem = ({ variant, title, subtitle, caption, ...props }) => (
  <Box {...props}>
    <NoticeItemDispaly variant={variant}>
      <Text
        fontSize={{ _: '40px', lg: '46px' }}
        fontWeight="700"
        lineHeight="1"
        textAlign="center"
        color="white"
      >
        {title}
      </Text>
      {subtitle && (
        <Text
          mb="4px"
          fontSize="10px"
          fontWeight="700"
          lineHeight="1"
          textAlign="center"
          color="white"
        >
          {subtitle}
        </Text>
      )}
    </NoticeItemDispaly>

    <Text
      fontFamily="earthsmightiest"
      fontSize={{ _: '19px', lg: '22px' }}
      fontWeight="700"
      lineHeight="100%"
      textAlign="center"
      textTransform="uppercase"
      color="#205A64"
      style={{ textShadow: '-1.2px -0.3px 0 rgba(255,255,255,0.4)' }}
    >
      {caption}
    </Text>
  </Box>
)
