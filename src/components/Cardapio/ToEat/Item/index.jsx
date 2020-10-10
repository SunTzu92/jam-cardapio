import React, { useCallback, useRef } from 'react'

import IconFavoritos from '../../../Icons/Favoritos'
import IconShoyu from '../../../Icons/Shoyu'
import IconVegano from '../../../Icons/Vegano'
import IconNoLactose from '../../../Icons/NoLactose'
import IconNoGluten from '../../../Icons/NoGluten'
import IconMeiaPorcao from '../../../Icons/MeiaPorcao'

import Modal from '../../../Modal'

import * as S from './styles'

const Item = ({ title, src }) => {
  const modalRef = useRef(null)
  const images = [src, src, src];

  const handleOpenModal = useCallback(() => modalRef.current?.openModal(), [modalRef])

  return (
    <>
      <S.Container onClick={handleOpenModal}>
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
      <Modal ref={modalRef} images={[...images]} />
    </>
  )
}

export default Item
