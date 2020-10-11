import styled from 'styled-components'
import SliderBase from '../../Slider'

export const Container = styled.div`
  width: 100%;
  font-family: 'Cormorant', serif;
`

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
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

  .slick-prev {
    left: 4rem;
    top: inherit;
    bottom: -52px;

    @media (max-width: 768px) {
      bottom: -41px;
    }
  }

  .slick-next {
    right: 4rem;
    top: inherit;
    bottom: -52px;

    @media (max-width: 768px) {
      bottom: -41px;
    }
  }
`

export const Slider = styled(SliderBase)`
  margin-bottom: 2rem;
`

export const Divider = styled.hr`
  width: 80%;
  background-color: #fff;
  height: 2px;

  @media (max-width: 768px) {
    width: 70%;
  }

  @media (max-width: 425px) {
    width: 50%;
  }

  @media (max-width: 375px) {
    width: 40%;
  }
`
