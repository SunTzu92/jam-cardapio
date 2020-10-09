import styled from 'styled-components'

export const Container = styled.div`

  display: flex;
  background-color: #fff;
  height: 100px;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin-bottom: 3rem;
`

export const Item = styled.button`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 0.5rem;
  border: none;
  margin: 0 1rem;
  color: #455a64;
  text-transform: uppercase;
  transition: all 0.3s ease-in;
  cursor: pointer;
  font-weight: 700;
  font-family: 'Cormorant', serif;

  & span {
    margin-left: 0.25rem;
  }

  & .icon--gr {
    position: relative;
    top: -1px;
  }

  & .icon--ai {
    position: relative;
    top: -1px;
  }

  text-decoration: ${({ checked }) => (checked ? 'none' : 'line-through')};
`
