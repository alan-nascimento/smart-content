import React from 'react'
import PropTypes from 'prop-types'

import { Profile } from '../../components/molecules'
import { Layout } from './Default.styles'

const DefaultTemplate = ({ children }) => {
  return (
    <Layout>
      <Profile />
      {children}
    </Layout>
  )
}

DefaultTemplate.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultTemplate
