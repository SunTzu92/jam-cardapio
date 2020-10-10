import React from 'react'
import { TiChevronLeft, TiChevronRight } from 'react-icons/ti'

import { SlickButtonFix } from '../../../Slider'
import Item from '../Item'

import * as S from './styles'

import img1 from '../../../../assets/img/jam001.jpg'
import img2 from '../../../../assets/img/jam003.jpg'
import img3 from '../../../../assets/img/jam004.jpg'

const SubCategoria = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // pauseOnHover: true,
    // autoplaySpeed: 5000,
    // speed: 2000,
    initialSlide: 0,
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

  return (
    <S.Container>
      <S.Title> TARTAN {'&'} CEVICHE </S.Title>

      <S.Slider settings={settings}>
        <Item title="uramaki" src={img1} />
        <Item title="uramaki" src={img2} />
        <Item title="uramaki" src={img3} />
      </S.Slider>

      <S.Divider />
    </S.Container>
  )
}

export default SubCategoria
