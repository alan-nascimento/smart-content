import React from 'react'
import PropTypes from 'prop-types'

import { Layout } from './Default.styles'

const DefaultTemplate = ({ children }) => {
  return <Layout>{children}</Layout>
}

DefaultTemplate.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultTemplate
