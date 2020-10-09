import styled from 'styled-components'
import Img from 'react-cool-img'

export const Container = styled.div`
  position: relative;
  height: 250px;
  font-family: 'Roboto', serif;
`

export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`

export const Image = styled(Img)`
  height: 250px;
  width: 100%;
  object-fit: cover;

  background: linear-gradient(254deg, #030303, #7d7d7d);
  background-size: 400% 400%;
  animation: lazyLoading 10s ease infinite;

  @-webkit-keyframes lazyLoading {
      0%{background-position:0% 97%}
      50%{background-position:100% 4%}
      100%{background-position:0% 97%}
  }
  @-moz-keyframes lazyLoading {
      0%{background-position:0% 97%}
      50%{background-position:100% 4%}
      100%{background-position:0% 97%}
  }
  @-o-keyframes lazyLoading {
      0%{background-position:0% 97%}
      50%{background-position:100% 4%}
      100%{background-position:0% 97%}
  }
  @keyframes lazyLoading {
      0%{background-position:0% 97%}
      50%{background-position:100% 4%}
      100%{background-position:0% 97%}
  }
`

export const Description = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgb(0 0 0 / 59%);
`
