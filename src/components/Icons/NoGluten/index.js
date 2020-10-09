import React from 'react'

import noGluten from '../../../assets/icons/icon-no-gluten.png'
import noGlutenWhite from '../../../assets/icons/icon-no-gluten-white.png'

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
