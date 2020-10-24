import React, { useState, useCallback, useImperativeHandle, forwardRef, useContext } from 'react'
import { GrClose } from 'react-icons/gr'

import Portal from '../Portal'
import { OrientationContext } from '../../context/orientation'

import Slider from './Slider'
import Information from './Information'
import * as S from './styles'

const Modal = (props, ref) => {
  const { imagens, descricao, legenda, nome, observacoes, opcoes, preco, baseUrl } = props
  const { isPortrait } = useContext(OrientationContext)
  const [visible, setVisible] = useState(false)

  const openModal = useCallback(() => {
    setVisible(true)
  }, [])

  useImperativeHandle(ref, () => ({
    openModal
  }))

  const handlerCloseModal = useCallback(() => {
    setVisible(false)
  }, [])

  return (
    <Portal open={visible}>
      <S.Container visible={visible} ref={ref} onClick={handlerCloseModal}>
        <S.Content isPortrait={isPortrait} onClick={(event) => event.stopPropagation()}>
          <S.Actions>
            <button type="button" onClick={handlerCloseModal}>
              Fechar
              <GrClose color="#fff" />
            </button>
          </S.Actions>

          <S.Card>
            <S.CardTitle>{nome}</S.CardTitle>

            <S.OrientationView isPortrait={isPortrait}>
              <Slider
                nome={nome}
                preco={preco}
                imagens={imagens}
                baseUrl={baseUrl}
                opcoes={opcoes}
              />

              <Information
                descricao={descricao}
                opcoes={opcoes}
                preco={preco}
                observacoes={observacoes}
                legenda={legenda}
              />
            </S.OrientationView>
          </S.Card>
        </S.Content>
      </S.Container>
    </Portal>
  )
}

export default forwardRef(Modal)
