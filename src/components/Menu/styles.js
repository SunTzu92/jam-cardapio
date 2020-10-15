import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background-color: #fff;
  height: 100px;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  z-index: 1000;
`

export const Button = styled.button`
  background-color: #fff;
  padding: 0.5rem;
  border: 1px solid transparent;
  margin: 0 1rem;
  color: #455a64;
  text-transform: uppercase;
  transition: all 0.3s ease-in;
  font-size: 1rem;
  cursor: pointer;

  border-color: ${({ active }) => (active ? '#455a64' : 'transparent')};

  &:hover {
    border: 1px solid #455a64;
  }
`

export const Divider = styled.span`
  display: inline-block;
  height: 30%;
  width: 2px;
  background-color: rgb(69 90 100 / 50%);
`
