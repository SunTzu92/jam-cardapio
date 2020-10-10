import React from 'react'

import favoritos from '../../../assets/icons/icon_jam_favoritos--black.png'
import favoritosWhite from '../../../assets/icons/icon_jam_favoritos--white.png'

import * as S from './styles'

function IconFavoritos({ white = false }) {
  const iconSrc = !white ? favoritos : favoritosWhite

  return (
    <S.Container>
      <img src={iconSrc} alt="favoritos" />
    </S.Container>
  )
}

export default IconFavoritos
