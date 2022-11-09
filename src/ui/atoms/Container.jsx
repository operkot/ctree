import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 580px;
  min-height: 0;
  margin-right: auto;
  margin-left: auto;
  padding-right: 24px;
  padding-left: 24px;

  @media (min-width: 1200px) {
    max-width: 1728px;
  }
`
