import React from 'react'
import PropTypes from 'prop-types'
import { CardBarFilterlLeft } from './stylesCarrosel'

export default function CardBarLeft({ children }) {
  return <CardBarFilterlLeft>{children}</CardBarFilterlLeft>
}

CardBarLeft.propTypes = {
  children: PropTypes.any
}
