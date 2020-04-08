import React from 'react'
import PropTypes from 'prop-types'
import { TransitionPortal } from 'gatsby-plugin-transition-link'

import GlobalStyles from '../../styles/global'
import { Menubar } from '../../components/molecules'
import { Sidebar } from '../../components/organisms'

import { Layout, Main } from './Default.styles'

const DefaultTemplate = ({ children }) => {
  return (
    <Layout>
      <GlobalStyles />
      <TransitionPortal level="top">
        <Sidebar />
      </TransitionPortal>
      <Main>{children}</Main>
      <TransitionPortal level="top">
        <Menubar />
      </TransitionPortal>
    </Layout>
  )
}

DefaultTemplate.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultTemplate
