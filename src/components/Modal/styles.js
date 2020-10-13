import styled from 'styled-components'

import SliderBase from '../Slider'

export const Container = styled.div`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  position: fixed;
  background-color: rgb(0 0 0 / 54%);
  z-index: 1200;
  width: 100%;
  top: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

export const Content = styled.div`
  display: flex;
  padding: 2rem;
  width: 100%;
  max-width: 500px;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 1rem;
    max-width: 350px;
  }
`

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem 0;
  width: 100%;

  button {
    display: flex;
    position: relative;
    border: none;
    background-color: transparent;
    color: #fff;
    font-weight: 700;
    font-family: arial !important;
    align-items: center;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    svg {
      margin-left: 0.25rem;
    }

    path {
      stroke: #fff;
    }
  }
`

export const Card = styled.div`
  background-color: #1a1a1a;
  color: #fff;
  width: 100%;
  max-width: 450px;
  display: flex;
  border-radius: 10px;
  border: 2px solid #9e9d9d;
  padding: 1rem;
  flex-direction: column;

  @media (max-width: 768px) {
    max-width: 300px;
  }
`

export const CardTitle = styled.h3`
  text-align: center;
`

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
`

export const Slider = styled(SliderBase)`
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

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #9e9d9d;
  margin: 0.75rem 0;
`

export const Opcoes = styled.div`
  h4 {
    margin: 0;
    margin-bottom: 1rem;
  }
`

export const OpcoesContent = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`

export const Tipo = styled.div`
  padding-right: 1rem;
`

export const Preco = styled.div`
  flex: 1;
`

export const Classificacao = styled.div`
  display: flex;
  flex-direction: column;

  & figure {
    margin-right: 0.5rem;
  }

  & > span {
    margin-right: 1rem;
  }
`

export const ClassificacaoDescription = styled.div`
  margin-bottom: 0.5rem;
`

export const Icons = styled.div`
  display: flex;
  width: 100%;
`

export const CardPreco = styled.div``
