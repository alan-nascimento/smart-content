import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Avatar from '../Avatar/Avatar'

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
          position
          description
        }
      }
    }
  `)

  return (
    <>
      <Avatar />
      <h1>{title}</h1>
      <h2>{position}</h2>
      <p>{description}</p>
    </>
  )
}

export default Profile
