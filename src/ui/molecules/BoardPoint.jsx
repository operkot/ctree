import styled, { css } from 'styled-components'
import { useDrop } from 'react-dnd'

const PointWrapper = styled.div`
  position: absolute;
  top: ${props => props.position.mobile.top || '0'};
  left: ${props => props.position.mobile.left || '0'};

  width: 13%;
  border-radius: 9999px;
  background-color: transparent;
  transition: background-color 0.3s ease;

  @media (min-width: 768px) {
    top: ${props => props.position.desktop.top || '0'};
    left: ${props => props.position.desktop.left || '0'};
    width: 4.2%;
  }

  ${props =>
    props.isOver &&
    css`
      background-color: rgba(39, 123, 245, 0.4);
    `}

  ${props =>
    props.isOver &&
    props.isLocked &&
    css`
      background-color: rgba(245, 39, 58, 0.4);
    `}

  &:before {
    content: '';

    display: block;
    padding-top: 100%;
  }

  &:after {
    content: '';

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url(/img/chip.svg);
    background-size: cover;
    opacity: ${props => (props.isFilled ? 1 : 0)};
    transition: opacity 0.3s ease;
  }
`

export const BoardPoint = ({ id, activePoint, dropHandler, ...props }) => {
  const [{ isOver, isLocked }, drop] = useDrop(
    () => ({
      accept: 'chip',
      drop: () => dropHandler(),
      collect: monitor => ({
        isOver: !!monitor.isOver(),
        isLocked: !monitor.canDrop(),
      }),
      canDrop: () => id === activePoint,
    }),
    [activePoint]
  )

  return (
    <PointWrapper ref={drop} {...props} isOver={isOver} isLocked={isLocked} />
  )
}
