import React from 'react'

import { Profile, SocialMedia } from '../../molecules'

import { Container } from './Sidebar.styles'

const Sidebar = () => (
  <Container>
    <Profile />
    <SocialMedia />
  </Container>
)

export default Sidebar
