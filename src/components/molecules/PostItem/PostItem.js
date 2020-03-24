import React from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  Link,
  Tag,
  Info,
  Title,
  Date,
  Description,
} from './PostItem.styles'

const PostItem = ({
  slug,
  background,
  category,
  date,
  timeToRead,
  title,
  description,
}) => (
  <Link to={slug}>
    <Container>
      <Tag background={background}>Misc</Tag>
      <Info>
        <Date>
          {date} • {timeToRead} min de leitura
        </Date>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Info>
    </Container>
  </Link>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default PostItem
