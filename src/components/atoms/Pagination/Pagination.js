import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'gatsby'

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
    {!isFirst && <Link to={prevPage}>← página anterior</Link>}
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLast && <Link to={nextPage}>proxima página →</Link>}
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
