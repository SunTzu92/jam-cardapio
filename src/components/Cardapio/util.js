import React from 'react'
import { TiChevronLeft, TiChevronRight } from 'react-icons/ti'
import { SlickButtonFix } from '../Slider'

export const settings = {
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  lazyLoad: true,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1
      }
    }
  ],
  nextArrow: (
    <SlickButtonFix>
      <TiChevronRight color={'#fff'} size={20} />
    </SlickButtonFix>
  ),
  prevArrow: (
    <SlickButtonFix>
      <TiChevronLeft color={'#fff'} size={20} />
    </SlickButtonFix>
  )
}
