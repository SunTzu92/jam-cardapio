import styled from 'styled-components'
import Img from 'react-cool-img'

export const Container = styled.div`
  position: relative;
  height: 250px;
  font-family: 'Roboto', serif;
  cursor: pointer;
`

export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  font-size: 1.3rem;
  margin-bottom: 0.1rem;
`

export const Image = styled(Img)`
  height: 250px;
  width: 100%;
  object-fit: cover;

  background: linear-gradient(254deg, #030303, #7d7d7d);
  background-size: 400% 400%;
  animation: lazyLoading 5s ease infinite;

  @-webkit-keyframes lazyLoading {
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
  @-moz-keyframes lazyLoading {
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
  @-o-keyframes lazyLoading {
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

export const Description = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgb(0 0 0 / 59%);
  min-height: 4.38rem;
`

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0.3rem 3rem;
`
