import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { isMobile, isMobileSafari } from 'react-device-detect'

import * as S from './styles'

import imgEat from '../../assets/img/to-eatt_white.png'
import imgDrink from '../../assets/img/to-drink_white.png'
import imgBannerTop from '../../assets/img/banner.top.jpeg'
import imgBannerBottom from '../../assets/img/banner.bottom.jpeg'
import imgBannerMobileTop from '../../assets/img/banner.mobile.top.jpeg'
import imgBannerMobileBottom from '../../assets/img/banner.mobile.bottom.jpeg'

import { TYPES } from '../../reducers/menuReducer'

const Banner = () => {
  const menu = useSelector((state) => state.menu)
  const dispatch = useDispatch()

  const handleClick = useCallback(
    (selected) => {
      dispatch({ type: TYPES.CHANGE_MENU, payload: { selected } })
      document.querySelector('[name="scroll-to-cardapio"]').scrollIntoView({
        behavior: 'smooth'
      })
    },
    [dispatch]
  )

  const srcBannerTop = isMobile || isMobileSafari ? imgBannerMobileTop : imgBannerTop
  const srcBannerBottom = isMobile || isMobileSafari ? imgBannerMobileBottom : imgBannerBottom

  return (
    <S.Container>
      <S.BannerTop>
        <S.BannerImg src={srcBannerTop} />
      </S.BannerTop>

      <S.Description>
        <S.FigureDescription onClick={(event) => handleClick('comidas')}>
          <S.ImgDescription src={imgEat} />
          <S.Text>TO EAT</S.Text>

          {menu.selected === 'comidas' && <S.DividerSelected />}
        </S.FigureDescription>
        <S.Divider />
        <S.FigureDescription onClick={(event) => handleClick('bebidas')}>
          <S.ImgDescription src={imgDrink} />
          <S.Text>TO DRINK</S.Text>

          {menu.selected === 'bebidas' && <S.DividerSelected />}
        </S.FigureDescription>
      </S.Description>

      <S.BannerBottom>
        <S.BannerImg src={srcBannerBottom} />
      </S.BannerBottom>
    </S.Container>
  )
}

export default Banner
