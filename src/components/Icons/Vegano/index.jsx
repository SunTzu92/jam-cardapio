import React from 'react'

import vegano from '../../../assets/icons/icon_jam_vegano--black.png'
import veganoWhite from '../../../assets/icons/icon_jam_vegano--white.png'

import * as S from './styles'

function IconVegano({ white = false }) {
  const iconSrc = !white ? vegano : veganoWhite

  return (
    <S.Container>
      <img src={iconSrc} alt="icone vegano" />
    </S.Container>
  )
}

export default IconVegano
