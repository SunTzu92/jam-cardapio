import React, { useState, useCallback, useImperativeHandle, forwardRef } from 'react'
import { GrClose } from 'react-icons/gr'

import Portal from '../Portal'
import IconFavoritos from '../Icons/Favoritos'
import IconShoyu from '../Icons/Shoyu'
// import IconVegano from '../Icons/Vegano'
// import IconNoLactose from '../Icons/NoLactose'
// import IconNoGluten from '../Icons/NoGluten'
import IconMeiaPorcao from '../Icons/MeiaPorcao'

import * as S from './styles'

const settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true,
  speed: 1000,
  initialSlide: 0,
}

const Modal = ({ children, images = [] }, ref) => {
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
        <S.Content onClick={(event) => event.stopPropagation()}>
          <S.Actions>
            <button type="button" onClick={handlerCloseModal}>
              Fechar
              <GrClose color="#fff" />
            </button>
          </S.Actions>

          <S.Card>
            <S.CardTitle>USSUZUKURI ESPECIAL</S.CardTitle>

            <S.Slider settings={settings}>
              {images.map((img, index) => (
                <S.Image key={index} src={img} />
              ))}
            </S.Slider>

            <S.CardDescription>
              <span>
              <strong>DESCRIÇÃO: {' '}</strong>
                Finas fatias de peixes em forma de flor.
              </span>
            </S.CardDescription>

            <S.Divider />

            <S.Opcoes>
              <h4>OPÇÕES</h4>
              {[
                { tipo: 'salmão', preco: 'R$ 49, 99' },
                { tipo: 'Atum', preco: 'R$ 49, 99' },
                { tipo: 'Peixe Branco', preco: 'R$ 49, 99' }
              ].map((opc, idx) => (
                <S.OpcoesContent key={idx}>
                  <S.Tipo>{opc.tipo}</S.Tipo>
                  <S.Preco>{opc.preco}</S.Preco>
                </S.OpcoesContent>
              ))}
            </S.Opcoes>

            <S.Divider />

            <S.Classificacao>
              <S.ClassificacaoDescription>OBSERVAÇÕES: polvo sujeito a alteração</S.ClassificacaoDescription>

              <S.Icons>
                <IconFavoritos white />
                <IconShoyu white />
                <IconMeiaPorcao white />
              </S.Icons>
            </S.Classificacao>
          </S.Card>
        </S.Content>
      </S.Container>
    </Portal>
  )
}

export default forwardRef(Modal)
