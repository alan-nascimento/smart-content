import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './PostList.styles'

const PostList = ({ children }) => <Container>{children}</Container>

PostList.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PostList
