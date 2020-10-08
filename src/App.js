import React from 'react'
import styled from 'styled-components'

import Menu from './components/Menu'
import Banner from './components/Banner'
import Cardapio from './components/Cardapio'
import Legenda from './components/Legenda'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000;
  height: 100%;
`

function App() {
  return (
    <Container>
      <Banner />
      <Menu />
      <Legenda />
      <Cardapio />
    </Container>
  )
}

export default App
