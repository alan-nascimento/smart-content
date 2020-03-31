import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import SEO from '../components/seo'
import GlobalStyles from '../styles/global'

import { PostItem } from '../components/molecules'
import { DefaultTemplate } from '../templates'

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              background
              category
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              description
              title
            }
            timeToRead
          }
        }
      }
    }
  `)

  const postList = allMarkdownRemark.edges

  return (
    <DefaultTemplate>
      <GlobalStyles />
      <SEO title="Home" />
      {postList.map(
        ({
          node: {
            fields: { slug },
            frontmatter: { background, category, date, description, title },
            timeToRead,
          },
        }) => (
          <PostItem
            slug={slug}
            background={background}
            category={category}
            date={date}
            timeToRead={timeToRead}
            title={title}
            description={description}
          />
        )
      )}
    </DefaultTemplate>
  )
}

export default IndexPage
