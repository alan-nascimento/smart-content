import React from 'react'

import menuItems from './Menu.links'
import { Container, List, Item, Link } from './Menu.styles'

const Menu = () => (
  <Container>
    <List>
      {menuItems.map(item => (
        <Item key={item.key}>
          <Link to={item.url} activeClassName="active">
            {item.label}
          </Link>
        </Item>
      ))}
    </List>
  </Container>
)

export default Menu
