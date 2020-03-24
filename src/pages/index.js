import React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/seo'
import { Sidebar } from '../components/organisms'
import GlobalStyles from '../styles/global'

import { DefaultTemplate } from '../templates'

const IndexPage = () => (
  <DefaultTemplate>
    <GlobalStyles />
    <SEO title="Home" />
    <Sidebar />
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </DefaultTemplate>
)

export default IndexPage
