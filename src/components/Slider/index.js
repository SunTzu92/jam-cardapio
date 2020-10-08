import React from 'react'
import ReactSlider from 'react-slick'

import * as S from './styles'

function Slider({ children, settings }) {
  return (
    <S.Container>
      <ReactSlider {...settings}>{children}</ReactSlider>
    </S.Container>
  )
}

export default Slider

export const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }) => (
  <span {...props}>{children}</span>
)
