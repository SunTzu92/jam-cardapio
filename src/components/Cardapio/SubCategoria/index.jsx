import React from 'react'

import Item from '../Item'
import { settings } from '../util'
import * as S from './styles'

const SubCategoria = ({ nome, itens }) => {
  const slidesToShow = itens?.length > 2 ? 3 : 2
  return (
    <S.Container>
      <S.Title> {nome} </S.Title>

      <S.SliderContainer>
        <S.Slider settings={{ ...settings, slidesToShow }}>
          {itens.map((item, index) => (
            <Item key={index} {...item} />
          ))}
        </S.Slider>
        <S.Divider />
      </S.SliderContainer>
    </S.Container>
  )
}

export default SubCategoria
