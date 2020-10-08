import React from 'react'
import { WiRaindrop } from 'react-icons/wi'
import { AiFillApple, AiFillStar } from 'react-icons/ai'

import IconNoLactose from '../Icons/NoLactose'
import IconNoGluten from '../Icons/NoGluten'

import * as S from './styles'

const Legenda = () => {
  return (
    <S.Container>
      <S.Item mLeft="0.25rem">
        <AiFillStar size={15} className="icon--ai" />
        <span>Favoritos</span>
      </S.Item>
      <S.Item mLeft="-2px">
        <WiRaindrop size={25} />
        <span>Usar Shoyu</span>
      </S.Item>
      <S.Item mLeft="0.25rem">
        <AiFillApple size={15} className="icon--ai" />
        <span>Vegetariano</span>
      </S.Item>
      <S.Item mLeft="0.25rem">
        <IconNoLactose />
        <span>Sem Lactose</span>
      </S.Item>
      <S.Item mLeft="0.25rem">
        <IconNoGluten />
        <span>Sem Glúten</span>
      </S.Item>
      <S.Item mLeft="0.25rem">
        <span>Meia Porção</span>
      </S.Item>
    </S.Container>
  )
}

export default Legenda
