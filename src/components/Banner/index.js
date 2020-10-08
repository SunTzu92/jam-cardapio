import React from 'react'

import Slider from '../Slider'

import * as S from './styles'

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
          <S.Text>TO EAT</S.Text>
          <S.Divider />
          <S.Text>TO DRINK</S.Text>
        </S.Description>
      </S.Fallback>

      <Slider settings={settings}>
        <S.Content bg="https://cutt.ly/ygruIlL" />
        <S.Content bg="https://cutt.ly/JgruOu0" />
        <S.Content bg="https://cutt.ly/9gruOFv" />
      </Slider>
    </S.Container>
  )
}

export default Banner
