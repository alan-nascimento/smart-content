import React from 'react'

import SEO from '../components/seo'
import { PostItem } from '../components/molecules'
import GlobalStyles from '../styles/global'

import { DefaultTemplate } from '../templates'

const IndexPage = () => (
  <DefaultTemplate>
    <GlobalStyles />
    <SEO title="Home" />
    <PostItem
      slug="/about/"
      category="Misc"
      date="30 de Julho de 2019"
      timeToRead="5"
      title="Diga não ao Medium: tenha sua própria plataforma"
      description="Algumas razões para você ter sua própria plataforma ao invés de soluções como o Medium."
    />

    <PostItem
      slug="/about/"
      category="Misc"
      date="30 de Julho de 2019"
      timeToRead="5"
      title="Diga não ao Medium: tenha sua própria plataforma"
      description="Algumas razões para você ter sua própria plataforma ao invés de soluções como o Medium."
    />
  </DefaultTemplate>
)

export default IndexPage
