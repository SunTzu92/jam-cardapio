import React from 'react'

import noGluten from '../../../assets/icons/icon_jam_sem_gluten--black.png'
import noGlutenWhite from '../../../assets/icons/icon_jam_sem_gluten--white.png'

import * as S from './styles'

function IconNoGluten({ white = false }) {
  const iconSrc = !white ? noGluten : noGlutenWhite
  return (
    <S.Container>
      <img src={iconSrc} alt="icone sem glúten" />
    </S.Container>
  )
}

export default IconNoGluten
