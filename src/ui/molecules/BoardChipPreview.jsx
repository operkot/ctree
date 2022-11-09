import { usePreview } from 'react-dnd-preview'
import styled from 'styled-components'

const BoardChipPreviewWrapper = styled.div`
  position: relative;
  z-index: 20;
  width: 13%;
  border-radius: 9999px;
  transform: translate(0, 0);

  background-image: url(/img/chip.svg);
  background-size: cover;

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

export const BoardChipPreview = () => {
  const { display, style } = usePreview()

  if (!display) {
    return null
  }

  return <BoardChipPreviewWrapper style={style} />
}
