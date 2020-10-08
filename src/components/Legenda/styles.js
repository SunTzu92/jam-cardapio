import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background-color: #fff;
  height: 100px;
  justify-content: center;
  align-items: center;
  color: #fff;
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
  font-size: 0.7rem;
  font-weight: 700;

  & span {
    margin-left: ${({ mLeft }) => mLeft};
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
