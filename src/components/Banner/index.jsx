import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserView, MobileView } from 'react-device-detect'

import Slider from '../Slider'
import * as S from './styles'

import img1 from '../../assets/img/banner001.png'
import img2 from '../../assets/img/banner002.png'
import img3 from '../../assets/img/banner003.png'
import img4 from '../../assets/img/banner004.png'
import img5 from '../../assets/img/banner005.png'
import imgBanner from '../../assets/img/banner.jpeg'
import imgBannerMobile from '../../assets/img/banner.mobile.jpeg'

import imgEat from '../../assets/img/to-eatt_white.png'
import imgDrink from '../../assets/img/to-drink_white.png'

import { TYPES } from '../../reducers/menuReducer'

const settings = {
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false
}

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

  return (
    <S.Container>
      <BrowserView>
        <S.BannerAviso>
          <S.BannerImg src={imgBanner} />
        </S.BannerAviso>
      </BrowserView>

      <MobileView>
        <S.BannerMobileAviso>
          <S.BannerImg src={imgBannerMobile} />
        </S.BannerMobileAviso>
      </MobileView>

      <S.ContentSlider>
        <S.Fallback>
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
        </S.Fallback>

        <Slider settings={settings}>
          <S.Content bg={img1} />
          <S.Content bg={img2} />
          <S.Content bg={img3} />
          <S.Content bg={img4} />
          <S.Content bg={img5} />
        </Slider>
      </S.ContentSlider>
    </S.Container>
  )
}

export default Banner
