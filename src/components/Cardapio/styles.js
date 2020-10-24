import styled from 'styled-components'
import SliderBase from '../Slider'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1224px;
  width: 100%;

  color: #fff;
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

export const ContainerItem = styled.div`
  width: 100%;
  font-family: 'Cormorant', serif !important;
`

export const TitleItem = styled.div`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
`
