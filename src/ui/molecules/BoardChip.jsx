import styled from 'styled-components'
import { useDrag } from 'react-dnd'

const ChipWrapper = styled.div`
  width: 13vw;
  border-radius: 9999px;
  transform: translate(0, 0);
  z-index: 10;

  background-image: url(/img/chip.svg);
  background-size: cover;
  cursor: grab;

  opacity: ${props => (props.isDragging ? 0 : 1)};

  &:before {
    content: '';

    display: block;
    padding-top: 100%;
  }

  @media (min-width: 768px) {
    width: 81px;
  }

  @media (min-width: 1903px) {
    width: 4.2vw;
  }
`

export const BoardChip = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'chip',
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return <ChipWrapper ref={drag} isDragging={isDragging} />
}
