import styled from 'styled-components'

export const Container = styled.figure`
  margin: 0 0.2rem 0 0;

  & img {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    & img {
      width: 15px;
      height: 15px;
    }
  }
`
