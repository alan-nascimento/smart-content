import React from 'react'

import { socialItems } from '../../../utils/enums'

import icons from './SocialMedia.icons'
import { Container, List, Item, Link, IconWrapper } from './SocialMedia.styles'

const SocialMedia = () => (
  <Container>
    <List>
      {socialItems.map(item => {
        const Icon = icons[item.label]

        return (
          <Item key={item.key}>
            <Link
              href={item.url}
              title={item.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWrapper>
                <Icon />
              </IconWrapper>
            </Link>
          </Item>
        )
      })}
    </List>
  </Container>
)

export default SocialMedia
