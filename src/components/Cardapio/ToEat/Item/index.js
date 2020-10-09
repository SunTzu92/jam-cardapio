import React, { memo } from 'react'
import { WiRaindrop } from 'react-icons/wi'
import { AiFillApple, AiFillStar } from 'react-icons/ai'

import IconNoLactose from '../../../Icons/NoLactose'
import IconNoGluten from '../../../Icons/NoGluten'

import * as S from './styles'

const Item = ({ title, src }) => {
  return (
    <S.Container>
      <S.Image src={src} decode={true} cache={true} debounce={1000} />

      <S.Description>
        <S.Title>{title}</S.Title>
        <S.Icons>
          <AiFillStar size={15} className="icon--ai" />
          <WiRaindrop size={25} />
          <AiFillApple size={15} className="icon--ai" />
          <IconNoLactose white />
          <IconNoGluten white />
        </S.Icons>
      </S.Description>
    </S.Container>
  )
}

export default memo(Item)
