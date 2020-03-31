import React from 'react'
import PropTypes from 'prop-types'
import ReactDisqusComments from 'react-disqus-comments'

import { Container, CommentsTitle } from './Comments.styles'

const Comments = ({ url, title }) => {
  const completeURL = `https://alan-nascimento.com.br${url}`

  return (
    <Container>
      <CommentsTitle>Comentários</CommentsTitle>
      <ReactDisqusComments
        shortname="alannascimento"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </Container>
  )
}

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Comments
