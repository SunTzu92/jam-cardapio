import React from 'react'

import shoyu from '../../../assets/icons/icon_jam_usar_shoyu--black.png'
import shoyuWhite from '../../../assets/icons/icon_jam_usar_shoyu--white.png'

import * as S from './styles'

function IconShoyu({ white = false }) {
  const iconSrc = !white ? shoyu : shoyuWhite

  return (
    <S.Container>
      <img src={iconSrc} alt="icone shoyu" />
    </S.Container>
  )
}

export default IconShoyu
