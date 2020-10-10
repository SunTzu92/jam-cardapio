import React from 'react'
import ReactSlider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import * as S from './styles'

function Slider({ className, children, settings }) {
  return (
    <S.Container className={className}>
      <ReactSlider {...settings}>{children}</ReactSlider>
    </S.Container>
  )
}

export default Slider

export const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }) => (
  <span {...props}>{children}</span>
)
