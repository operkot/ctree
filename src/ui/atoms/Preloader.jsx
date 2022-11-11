import styled, { keyframes } from 'styled-components'

const Spinner = styled.div`
  position: relative;

  display: inline-block;

  width: ${props => props.size || '36px'};
  height: ${props => props.size || '36px'};

  margin: ${props => props.margin || '0'};
`

const scale = keyframes`
  0%, 80%, 100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`

const SpinnerCircle = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  width: 100%;
  height: 100%;

  &:before {
    content: '';

    display: block;

    margin: 0 auto;

    width: ${props => props.dotSize || '5px'};
    height: ${props => props.dotSize || '5px'};

    background: ${props => props.color};

    border-radius: 50%;

    -webkit-animation: ${scale} 1s infinite ease-in-out both;
    animation: ${scale} 1s infinite ease-in-out both;
  }
`

const SpinnerCircle1 = styled(SpinnerCircle)``

const SpinnerCircle2 = styled(SpinnerCircle)`
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);

  &:before {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }
`

const SpinnerCircle3 = styled(SpinnerCircle)`
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);

  &:before {
    -webkit-animation-delay: -0.7s;
    animation-delay: -0.7s;
  }
`

const SpinnerCircle4 = styled(SpinnerCircle)`
  -webkit-transform: rotate(135deg);
  -ms-transform: rotate(135deg);
  transform: rotate(135deg);

  &:before {
    -webkit-animation-delay: -0.6s;
    animation-delay: -0.6s;
  }
`

const SpinnerCircle5 = styled(SpinnerCircle)`
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);

  &:before {
    -webkit-animation-delay: -0.5s;
    animation-delay: -0.5s;
  }
`

const SpinnerCircle6 = styled(SpinnerCircle)`
  -webkit-transform: rotate(225deg);
  -ms-transform: rotate(225deg);
  transform: rotate(225deg);

  &:before {
    -webkit-animation-delay: -0.4s;
    animation-delay: -0.4s;
  }
`

const SpinnerCircle7 = styled(SpinnerCircle)`
  -webkit-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  transform: rotate(270deg);

  &:before {
    -webkit-animation-delay: -0.3s;
    animation-delay: -0.3s;
  }
`

const SpinnerCircle8 = styled(SpinnerCircle)`
  -webkit-transform: rotate(315deg);
  -ms-transform: rotate(315deg);
  transform: rotate(315deg);

  &:before {
    -webkit-animation-delay: -0.2s;
    animation-delay: -0.2s;
  }
`

export const Preloader = ({ color, margin, size, dotSize }) => {
  return (
    <Spinner margin={margin} size={size}>
      <SpinnerCircle1 color={color} dotSize={dotSize} />
      <SpinnerCircle2 color={color} dotSize={dotSize} />
      <SpinnerCircle3 color={color} dotSize={dotSize} />
      <SpinnerCircle4 color={color} dotSize={dotSize} />
      <SpinnerCircle5 color={color} dotSize={dotSize} />
      <SpinnerCircle6 color={color} dotSize={dotSize} />
      <SpinnerCircle7 color={color} dotSize={dotSize} />
      <SpinnerCircle8 color={color} dotSize={dotSize} />
    </Spinner>
  )
}
