import React from 'react'
import PropTypes from 'prop-types'
import Profile from './Profile/Profile'

const Layout = ({ children }) => {
  return (
    <>
      <Profile></Profile>
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
