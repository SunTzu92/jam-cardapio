import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  height: 250px;
  font-family: 'Roboto', serif;
`

export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`

export const Image = styled.img`
  height: 250px;
  width: 100%;
  object-fit: cover;
`

export const Description = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgb(0 0 0 / 59%);
`
