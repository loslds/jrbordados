import React from 'react'
import PropTypes from 'prop-types'
import { ContainerLayoutMain } from './stylesLayoutData'

export default function LayoutMain({ children }) {
  return <ContainerLayoutMain>{children}</ContainerLayoutMain>
}
LayoutMain.propTypes = {
  children: PropTypes.any
}
LayoutMain.defaultProps = {
  children: null
}
