import styled from 'styled-components'
import SliderBase from '../../Slider'

export const Slider = styled(SliderBase)`
  flex: 1;
  margin-bottom: 2rem;

  .slick-prev,
  .slick-next {
    display: none !important;
  }

  .slick-slide {
    & > div {
      padding: 0 0.25rem;
    }
  }
`

export const Figure = styled.figure`
  margin: 0;
  position: relative;
`

export const Image = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;

  background: linear-gradient(254deg, #030303, #7d7d7d);
  background-size: 400% 400%;
  animation: lazyLoading 2s ease infinite;

  @keyframes lazyLoading {
    0% {
      background-position: 0% 97%;
    }

    50% {
      background-position: 100% 4%;
    }

    100% {
      background-position: 0% 97%;
    }
  }
`

export const FigureDescription = styled.div`
  position: absolute;
  bottom: 0;
  height: 5rem;
  background-color: rgb(21 20 20 / 66%);
  width: 100%;
  height: auto;
`

export const FigureTitle = styled.div`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 300;
  padding: 0.25rem;
`

export const FigurePreco = styled.div`
  font-size: 1rem;
  color: #fff;
  padding: 0.25rem;
`
