import React from 'react'

import { Menu, Profile, SocialMedia } from '../../molecules'

import { Container } from './Sidebar.styles'

const Sidebar = () => (
  <Container>
    <Profile />
    <SocialMedia />
    <Menu />
  </Container>
)

export default Sidebar
