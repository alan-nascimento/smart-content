import React, { useState, useEffect } from 'react'

import { Home } from '@styled-icons/boxicons-solid/Home'
import { UpArrowAlt as Arrow } from '@styled-icons/boxicons-regular/UpArrowAlt'
import { LightBulb as Light } from '@styled-icons/octicons/LightBulb'
import { Grid } from '@styled-icons/boxicons-solid/Grid'
import { ThList as List } from '@styled-icons/typicons/ThList'

import getThemeColor from '../../../utils/getThemeColor'

import { Container, Link, Item, Group } from './Menubar.styles'

const MenuBar = () => {
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)

  const isDarkMode = theme === 'dark'
  const isListMode = display === 'list'

  useEffect(() => {
    setTheme(window.__theme)
    setDisplay(window.__display)

    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setDisplay(window.__display)
  }, [])

  return (
    <Container>
      <Group>
        <Link
          to="/"
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.6}
          title="Voltar para Home"
        >
          <Item>
            <Home />
          </Item>
        </Link>
      </Group>
      <Group>
        <Item
          title="Mudar o tema"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
          }}
          className={theme}
        >
          <Light />
        </Item>
        <Item
          className="display"
          title="Mudar visualização"
          onClick={() => {
            window.__setPreferredDisplay(isListMode ? 'grid' : 'list')
          }}
        >
          {isListMode ? <Grid /> : <List />}
        </Item>
        <Item title="Ir para o Topo">
          <Arrow />
        </Item>
      </Group>
    </Container>
  )
}

export default MenuBar
