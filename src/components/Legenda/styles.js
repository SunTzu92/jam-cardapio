import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background-color: #fff;
  height: 100px;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    height: auto;
    padding: 1rem 0;
  }
`

export const Item = styled.button`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 0.5rem;
  border: 1px solid transparent;
  margin: 0 1rem;
  color: #455a64;
  text-transform: uppercase;
  transition: all 0.3s ease-in;
  min-width: 110px;

  cursor: pointer;
  font-weight: 700;
  font-size: 1rem;
  font-family: 'Cormorant', serif !important;

  border-color: ${({ active }) => (active ? '#455a64' : 'transparent')};

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

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

  text-decoration: 'none';
`
