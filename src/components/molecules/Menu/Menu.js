import React from 'react'

import getThemeColor from '../../../utils/getThemeColor'

import menuItems from './Menu.links'
import { Container, List, Item, Link } from './Menu.styles'

const Menu = () => (
  <Container>
    <List>
      {menuItems.map(item => (
        <Item key={item.key}>
          <Link
            cover
            direction="left"
            bg={getThemeColor()}
            duration={0.6}
            to={item.url}
            activeClassName="active"
          >
            {item.label}
          </Link>
        </Item>
      ))}
    </List>
  </Container>
)

export default Menu
