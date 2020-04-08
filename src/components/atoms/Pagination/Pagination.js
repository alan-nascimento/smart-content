import React from 'react'
import propTypes from 'prop-types'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import getThemeColor from '../../../utils/getThemeColor'

import { Container } from './Pagination.styles'

const Pagination = ({
  isLast,
  isFirst,
  numPages,
  nextPage,
  prevPage,
  currentPage,
}) => (
  <Container>
    {!isFirst && (
      <AniLink
        to={prevPage}
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
      >
        ← página anterior
      </AniLink>
    )}
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLast && (
      <AniLink
        to={nextPage}
        cover
        direction="right"
        bg={getThemeColor()}
        duration={0.6}
      >
        proxima página →
      </AniLink>
    )}
  </Container>
)

Pagination.propTypes = {
  prevPage: propTypes.string,
  nextPage: propTypes.string,
  isLast: propTypes.bool.isRequired,
  isFirst: propTypes.bool.isRequired,
  numPages: propTypes.number.isRequired,
  currentPage: propTypes.number.isRequired,
}

export default Pagination
