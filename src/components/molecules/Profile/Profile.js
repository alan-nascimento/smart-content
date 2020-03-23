import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Avatar } from '../../atoms'

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
    <>
      <Avatar fixed={avatarImage.childImageSharp.fixed} />
      <h1>{title}</h1>
      <h2>{position}</h2>
      <p>{description}</p>
    </>
  )
}

export default Profile
