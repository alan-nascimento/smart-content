import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Avatar } from '../../atoms'

import {
  Container,
  Link,
  Position,
  Author,
  Description,
} from './Profile.styles'

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
    avatarImage,
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          position
          description
        }
      }
      avatarImage: file(relativePath: { eq: "profile.png" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Container>
      <Link>
        <Avatar fixed={avatarImage.childImageSharp.fixed} />
        <Author>
          {title}
          <Position>{position}</Position>
        </Author>
      </Link>
      <Description>{description}</Description>
    </Container>
  )
}

export default Profile
