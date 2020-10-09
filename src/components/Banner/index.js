import React from 'react'

import Slider from '../Slider'

import * as S from './styles'

import img1 from '../../assets/img/banner001.png'
import img2 from '../../assets/img/banner002.png'
import img3 from '../../assets/img/banner003.png'
import img4 from '../../assets/img/banner004.png'
import img5 from '../../assets/img/banner005.png'

import imgEat from '../../assets/img/to-eatt_white.png'
import imgDrink from '../../assets/img/to-drink_white.png'

const Banner = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  }

  return (
    <S.Container>
      <S.Fallback>
        <S.Description>
          <S.FigureDescription>
            <S.ImgDescription src={imgEat} />
            <S.Text>TO EAT</S.Text>
          </S.FigureDescription>
          <S.Divider />
          <S.FigureDescription>
            <S.ImgDescription src={imgDrink} />
            <S.Text>TO DRINK</S.Text>
          </S.FigureDescription>
        </S.Description>
      </S.Fallback>

      <Slider settings={settings}>
        <S.Content bg={img1} />
        <S.Content bg={img2} />
        <S.Content bg={img3} />
        <S.Content bg={img4} />
        <S.Content bg={img5} />
      </Slider>
    </S.Container>
  )
}

export default Banner
