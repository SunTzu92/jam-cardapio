import styled from 'styled-components'
import SliderBase from '../../../Slider'

export const Container = styled.div`
  width: 100%;
  font-family: 'Cormorant', serif;
  margin-bottom: 5rem;

  & .slick-slide {
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
  }

  .slick-next {
    right: 4rem;
    top: inherit;
    bottom: -52px;
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
`
