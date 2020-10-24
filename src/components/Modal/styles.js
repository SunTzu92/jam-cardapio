import styled from 'styled-components'

export const Container = styled.div`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  position: fixed;
  background-color: rgb(0 0 0 / 54%);
  z-index: 1200;
  width: 100%;
  top: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

export const Content = styled.div`
  display: flex;
  padding: 2rem;
  width: 100%;
  max-width: 500px;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 1rem;
    max-width: ${({ isPortrait }) => (isPortrait ? '350px' : '560px')};
  }
`

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem 0;
  width: 100%;

  button {
    display: flex;
    position: relative;
    border: none;
    background-color: transparent;
    color: #fff;
    font-weight: 700;
    font-family: arial !important;
    align-items: center;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    svg {
      margin-left: 0.25rem;
    }

    path {
      stroke: #fff;
    }
  }
`

export const Card = styled.div`
  background-color: #1a1a1a;
  color: #fff;
  width: 100%;
  max-width: 450px;
  display: flex;
  border-radius: 10px;
  border: 2px solid #9e9d9d;
  padding: 1rem;
  flex-direction: column;

  @media (max-width: 768px) {
    max-width: ${({ isPortrait }) => (isPortrait ? '350px' : '560px')};
  }
`

export const CardTitle = styled.h3`
  text-align: center;
`

export const OrientationView = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: ${({ isPortrait }) => (isPortrait ? 'column' : 'row')};
  }
`
