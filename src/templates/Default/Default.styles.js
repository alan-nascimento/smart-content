import styled from 'styled-components'
import { Layout as LayoutBase } from 'antd'

export const Layout = styled(LayoutBase)`
  && {
    display: flex;
  }
`
export const Main = styled.main`
  background: var(--background);
  min-height: 100vh;
  padding: 0 3.75rem 0 20rem;
  width: 100%;

  body#grid & {
    grid-template-areas:
      'posts'
      'pagination';
  }
`
