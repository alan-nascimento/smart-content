import React from 'react'

import { Home } from '@styled-icons/boxicons-solid/Home'
import { SearchAlt2 as Search } from '@styled-icons/boxicons-regular/SearchAlt2'
import { UpArrowAlt as Arrow } from '@styled-icons/boxicons-regular/UpArrowAlt'
import { LightBulb as Light } from '@styled-icons/octicons/LightBulb'
import { Grid } from '@styled-icons/boxicons-solid/Grid'

import { Container, Link, Item, Group } from './Menubar.styles'

const MenuBar = () => (
  <Container>
    <Group>
      <Link to="/" title="Voltar para Home">
        <Item>
          <Home />
        </Item>
      </Link>
      <Link to="/search/" title="Pesquisar">
        <Item>
          <Search />
        </Item>
      </Link>
    </Group>
    <Group>
      <Item title="Mudar o tema">
        <Light />
      </Item>
      <Item title="Mudar visualização">
        <Grid />
      </Item>
      <Item title="Ir para o Topo">
        <Arrow />
      </Item>
    </Group>
  </Container>
)

export default MenuBar
