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
  date,
  title,
  category,
  background,
  timeToRead,
  description,
}) => (
  <Link to={slug} cover direction="right" bg="#16202c" duration={0.6}>
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
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
}

export default PostItem
