import React from 'react'
import { WiRaindrop } from 'react-icons/wi'
import { AiFillApple, AiFillStar } from 'react-icons/ai'

import IconNoLactose from '../Icons/NoLactose'
import IconNoGluten from '../Icons/NoGluten'

import * as S from './styles'

const Legenda = () => {
  return (
    <S.Container>
      <S.Item mLeft="0.25rem" checked={true}>
        <AiFillStar size={15} className="icon--ai" />
        <span>Favoritos</span>
      </S.Item>
      <S.Item mLeft="-2px" checked={true}>
        <WiRaindrop size={25} />
        <span>Usar Shoyu</span>
      </S.Item>
      <S.Item mLeft="0.25rem" checked={false}>
        <AiFillApple size={15} className="icon--ai" />
        <span>Vegetariano</span>
      </S.Item>
      <S.Item mLeft="0.25rem" checked={false}>
        <IconNoLactose />
        <span>Sem Lactose</span>
      </S.Item>
      <S.Item mLeft="0.25rem" checked={false}>
        <IconNoGluten />
        <span>Sem Glúten</span>
      </S.Item>
      <S.Item mLeft="0.25rem" checked={true}>
        <span>Meia Porção</span>
      </S.Item>
    </S.Container>
  )
}

export default Legenda
