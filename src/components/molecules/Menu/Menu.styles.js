import styled from 'styled-components'
import { Link as LinkBase } from 'gatsby'

export const Container = styled.nav``

export const List = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
`

export const Item = styled.li`
  padding: 0.5rem 0;

  .active {
    color: var(--highlight);
  }
`

export const Link = styled(LinkBase)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--highlight);
  }
`
