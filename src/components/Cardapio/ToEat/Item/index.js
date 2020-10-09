import React from 'react'

import * as S from './styles'

const Item = ({ title, src }) => {
  return (
    <S.Container>
      <S.Image src={src} alt="" />

      <S.Description>

        <S.Title>{title}</S.Title>
      </S.Description>
    </S.Container>
  )
}

export default Item
