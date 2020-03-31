import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../../components/seo'
import { DefaultTemplate } from '../'

import {
  PostHeader,
  PostDate,
  PostTitle,
  PostDescription,
  MainContent,
} from './BlogPost.styles'

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <DefaultTemplate>
      <SEO title={post.frontmatter.title} />
      <PostHeader>
        <PostDate>
          {post.frontmatter.date} • {post.timeToRead} min de leitura
        </PostDate>
        <PostTitle>{post.frontmatter.title}</PostTitle>
        <PostDescription>{post.frontmatter.description}</PostDescription>
      </PostHeader>
      <MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </MainContent>
    </DefaultTemplate>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      }
      html
      timeToRead
    }
  }
`

export default BlogPost
