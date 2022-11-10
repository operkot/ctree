import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import styled from 'styled-components'

import 'swiper/css'

import { Text } from 'ui/atoms'
import { BoardChip } from 'ui/molecules'

const ChipsCarouselWrapper = styled.div`
  display: flex;
  align-items: center;

  .swiper-slide {
    width: auto;
  }
`

const ChipsCarouselControl = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: 30px;
  height: 68px;
  border-radius: 8px;
  background-color: #2a95b8;
  fill: #fff;

  &.carousel-prev {
    margin-right: 12px;
  }

  &.carousel-next {
    margin-left: 12px;
  }

  @media (min-width: 768px) {
    height: 82px;

    &.carousel-prev {
      margin-right: 28px;
    }

    &.carousel-next {
      margin-left: 28px;
    }
  }

  > img {
    opacity: 0.5;
  }

  &:not(.swiper-button-disabled) > img {
    opacity: 1;
  }
`

const CHIPS_CAROUSEL_OPTIONS = {
  modules: [Navigation],
  spaceBetween: 24,
  slidesPerView: 'auto',
  allowTouchMove: false,
  navigation: { nextEl: '.carousel-next', prevEl: '.carousel-prev' },
}

const ChipsCarouselContent = ({ availableChips }) => (
  <Swiper {...CHIPS_CAROUSEL_OPTIONS}>
    {Array.from(Array(availableChips).keys()).map((_, key) => (
      <SwiperSlide key={key}>
        <BoardChip />
      </SwiperSlide>
    ))}
  </Swiper>
)

const ChipsCarouselEmptyMessage = () => (
  <Text
    style={{ flexGrow: 1 }}
    fontSize="18px"
    lineHeight="21px"
    textAlign="center"
    color="#fff"
  >
    Совершай покупки и получай фишки
  </Text>
)

export const ChipsCarousel = ({ availableChips }) => (
  <ChipsCarouselWrapper>
    <ChipsCarouselControl className="carousel-prev">
      <img src="/img/angle-left.svg" alt="" />
    </ChipsCarouselControl>

    {availableChips > 0 ? (
      <ChipsCarouselContent availableChips={availableChips} />
    ) : (
      <ChipsCarouselEmptyMessage />
    )}

    <ChipsCarouselControl className="carousel-next">
      <img src="/img/angle-right.svg" alt="" />
    </ChipsCarouselControl>
  </ChipsCarouselWrapper>
)
