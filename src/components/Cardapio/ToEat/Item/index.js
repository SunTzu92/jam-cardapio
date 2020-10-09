import React, { memo } from 'react'

import IconFavoritos from '../../../Icons/Favoritos'
import IconShoyu from '../../../Icons/Shoyu'
import IconVegano from '../../../Icons/Vegano'
import IconNoLactose from '../../../Icons/NoLactose'
import IconNoGluten from '../../../Icons/NoGluten'
import IconMeiaPorcao from '../../../Icons/MeiaPorcao'

import * as S from './styles'

const Item = ({ title, src }) => {
  return (
    <S.Container>
      <S.Image src={src} decode={true} cache={true} debounce={1000} />

      <S.Description>
        <S.Title>{title}</S.Title>
        <S.Icons>
          <IconFavoritos white />
          <IconShoyu white />
          <IconVegano white />
          <IconNoLactose white />
          <IconNoGluten white />
          <IconMeiaPorcao white />
        </S.Icons>
      </S.Description>
    </S.Container>
  )
}

export default memo(Item)
