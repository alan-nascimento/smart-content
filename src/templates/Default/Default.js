import React from 'react'
import PropTypes from 'prop-types'

import { Menubar } from '../../components/molecules'
import { Sidebar } from '../../components/organisms'

import { Layout } from './Default.styles'

const DefaultTemplate = ({ children }) => {
  return (
    <Layout>
      <Sidebar />
      {children}
      <Menubar />
    </Layout>
  )
}

DefaultTemplate.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultTemplate
