import React from 'react'

import * as S from './style'

const settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true,
  speed: 1000,
  initialSlide: 0
}

const SliderWrapper = ({ nome, preco, imagens, baseUrl, opcoes }) => {
  const imgLegendas = [...opcoes] || []

  imgLegendas.unshift({ nome, preco })

  return (
    <S.Slider settings={settings}>
      {imagens.map((img, index) => (
        <S.Figure key={index}>
          <S.Image src={`${baseUrl}${img}`} />

          <S.FigureDescription>
            <S.FigureTitle>{imgLegendas[index]?.nome ?? ''}</S.FigureTitle>
            <S.FigurePreco>{imgLegendas[index]?.preco ?? ''}</S.FigurePreco>
          </S.FigureDescription>
        </S.Figure>
      ))}
    </S.Slider>
  )
}

export default SliderWrapper
