import React, { memo } from 'react'
import { TiChevronLeft, TiChevronRight } from 'react-icons/ti'

import { SlickButtonFix } from '../../../Slider'
import Item from '../Item'

import * as S from './styles'

import img1 from '../../../../assets/img/jam001.jpg'
import img2 from '../../../../assets/img/jam003.jpg'
import img3 from '../../../../assets/img/jam004.jpg'
import img4 from '../../../../assets/img/jam006.jpg'
import img5 from '../../../../assets/img/jam008.jpg'
import img6 from '../../../../assets/img/jam009.jpg'

const SubCategoria = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // pauseOnHover: true,
    // autoplaySpeed: 5000,
    speed: 2000,
    initialSlide: 0,
    nextArrow: (
      <SlickButtonFix>
        <TiChevronRight color={'#fff'} size={20} />
      </SlickButtonFix>
    ),
    prevArrow: (
      <SlickButtonFix>
        <TiChevronLeft color={'#fff'}  size={20} />
      </SlickButtonFix>
    )
  }

  return (
    <S.Container>
      <S.Title> TARTAN {'&'} CEVICHE </S.Title>

      <S.Slider settings={settings}>
        <Item title="uramaki uramaki uramaki uramaki" src={img1} />
        <Item title="uramaki" src={img2} />
        <Item title="uramaki" src={img3} />
        <Item title="uramaki" src={img4} />
        <Item title="uramaki" src={img5} />
        <Item title="uramaki" src={img6} />
      </S.Slider>

      <S.Divider />
    </S.Container>
  )
}

export default memo(SubCategoria)
