﻿import styled from 'styled-components'
import Img from 'react-cool-img'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 2rem;
  justify-content: center;
  align-items: center;
  width: 100%;

  .slick-prev,
  .slick-next {
    position: absolute;
    visibility: hidden;
  }
`

export const BannerTop = styled.div`
  display: flex;
  max-width: 1224px;
  width: 100%;
`

export const BannerBottom = styled.div`
  display: flex;
  max-width: 1224px;
  width: 100%;
`

export const Content = styled.div`
  position: relative;
  display: flex !important;
  padding: 0;
  height: 83vh;
  border: none;
  background: url(${({ bg }) => bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #000;
  color: white;
  text-align: center;
  align-items: flex-end;
  justify-content: center;

  .slick-dots {
    list-style: none;
    display: flex !important;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;

    li {
      background: red;
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 0.75rem;
      cursor: pointer;

      &.slick-active {
        background: red;
      }
    }

    button {
      opacity: 0;
      width: 1.2rem;
      height: 1.2rem;
      cursor: pointer;
    }
  }
`

export const Fallback = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgb(0 0 0 / 38%);
  z-index: 1;
  display: flex;
  align-items: flex-end;
`

export const Description = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 5rem 2rem;
  height: 50%;
  opacity: 0.8;
`

export const Text = styled.span`
  font-family: 'Cormorant', serif !important;
  font-size: 2rem;
  color: #fff;
  padding: 1rem 0.5rem;
`

export const Divider = styled.div`
  display: inline-block;
  height: 150px;
  width: 2px;
  background-color: #fff;
  margin: 0 1rem;
`

export const FigureDescription = styled.figure`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.2rem;
  cursor: pointer;
`

export const ImgDescription = styled(Img)`
  height: 100px;
  width: 100px;
  object-fit: contain;
`

export const DividerSelected = styled.div`
  width: 100%;
  display: flex;
  height: 2px;
  background-color: #fff;
`

export const ContentSlider = styled.div`
  position: relative;
`

export const BannerImg = styled.img`
  width: 100%;
  height: initial;
  height: min-intrinsic;
  object-fit: contain;
`
