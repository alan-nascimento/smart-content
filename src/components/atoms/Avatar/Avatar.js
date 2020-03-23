import React from 'react'
import PropTypes from 'prop-types'

import { AvatarBase } from './Avatar.styles'

const Avatar = ({ fixed }) => <AvatarBase fixed={fixed} />

Avatar.propTypes = {
  fixed: PropTypes.object.isRequired,
}

export default Avatar
