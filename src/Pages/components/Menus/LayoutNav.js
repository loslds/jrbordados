import React from 'react'
import PropTypes from 'prop-types'
import { ContainerLayout } from './stylesLayoutNav'

export default function LayoutNav({ children }) {
  return <ContainerLayout>{children}</ContainerLayout>
}

LayoutNav.propTypes = {
  children: PropTypes.any
}
LayoutNav.defaultProps = {
  children: null
}
