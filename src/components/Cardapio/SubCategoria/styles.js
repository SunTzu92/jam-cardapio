import styled from 'styled-components'
import SliderBase from '../../Slider'

export const Container = styled.div`
  width: 100%;
  font-family: 'Cormorant', serif !important;
  margin-bottom: 5rem;
`

export const SliderContainer = styled.span`
  .slick-slide {
    & > div {
      padding: 0 1rem;
    }
  }

  .slick-prev,
  .slick-next {
    font-size: inherit;

    &:before {
      content: '';
    }
  }

  .slick-prev.slick-disabled,
  .slick-next.slick-disabled {
    display: none !important;
  }

  .slick-prev {
    left: 4rem;
    top: inherit;
    bottom: -42px;

    @media (max-width: 768px) {
      bottom: -29px;
    }
  }

  .slick-next {
    right: 4rem;
    top: inherit;
    bottom: -42px;

    @media (max-width: 768px) {
      bottom: -29px;
    }
  }
`

export const Slider = styled(SliderBase)`
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
`

export const Divider = styled.hr`
  width: 80%;
  background-color: #fff;
  height: 2px;

  @media (max-width: 768px) {
    width: 60%;
  }

  @media (max-width: 425px) {
    width: 50%;
  }

  @media (max-width: 375px) {
    width: 40%;
  }
`
