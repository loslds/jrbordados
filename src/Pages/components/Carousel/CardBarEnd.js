import React from 'react'
import PropTypes from 'prop-types'
import { CardBarFilterEnd } from './stylesCarrosel'

export default function CardBarEnd({ children }) {
  return <CardBarFilterEnd>{children}</CardBarFilterEnd>
}

CardBarEnd.propTypes = {
  children: PropTypes.any
}
CardBarEnd.defaultProps = {
  color: 'transparent'
}
