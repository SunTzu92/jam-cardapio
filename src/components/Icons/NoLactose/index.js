import React from 'react'

import noLactose from '../../../assets/icons/icon_jam_sem_lactose--black.png'
import noLactoseWhite from '../../../assets/icons/icon_jam_sem_lactose--white.png'

import * as S from './styles'

function IconNoLactose({ white = false }) {
  const iconSrc = !white ? noLactose : noLactoseWhite

  return (
    <S.Container>
      <img src={iconSrc} alt="icone não lactose" />
    </S.Container>
  )
}

export default IconNoLactose
