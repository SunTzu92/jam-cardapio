import React from 'react'

import meiaPorcao from '../../../assets/icons/icon_jam_meia_porca--black.png'
import meiaPorcaoWhite from '../../../assets/icons/icon_jam_meia_porca--white.png'

import * as S from './styles'

function IconMeiaPorcao({ white = false }) {
  const iconSrc = !white ? meiaPorcao : meiaPorcaoWhite

  return (
    <S.Container>
      <img src={iconSrc} alt="icone meia porção" />
    </S.Container>
  )
}

export default IconMeiaPorcao
