import React, { useCallback, useRef } from 'react'

import IconFavoritos from '../../Icons/Favoritos'
import IconShoyu from '../../Icons/Shoyu'
import IconVegano from '../../Icons/Vegano'
import IconNoLactose from '../../Icons/NoLactose'
import IconNoGluten from '../../Icons/NoGluten'
import IconMeiaPorcao from '../../Icons/MeiaPorcao'

import Modal from '../../Modal'

import * as S from './styles'

const Item = ({ nome, legenda, ...rest }) => {
  const modalRef = useRef(null)

  const handleOpenModal = useCallback(() => modalRef.current?.openModal(), [modalRef])

  return (
    <>
      <S.Container onClick={handleOpenModal}>
        <S.Image src={''} decode={true} cache={true} debounce={1000} />

        <S.Description>
          <S.Title>{nome}</S.Title>
          <S.Icons>
            {legenda.favorito && <IconFavoritos white />}
            {legenda.usarShoyu && <IconShoyu white />}
            {legenda.vegano && <IconVegano white />}
            {legenda.semLactose && <IconNoLactose white />}
            {legenda.semGluten && <IconNoGluten white />}
            {legenda.meiaPorcao && <IconMeiaPorcao white />}
          </S.Icons>
        </S.Description>
      </S.Container>
      <Modal ref={modalRef} {...rest} nome={nome} legenda={legenda} />
    </>
  )
}

export default Item
