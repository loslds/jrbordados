import React from 'react'
import PropTypes from 'prop-types'
import { ContainerLayoutMainFlex } from './stylesLayoutData'

export default function LayoutMainFlex({ children }) {
  return <ContainerLayoutMainFlex>{children}</ContainerLayoutMainFlex>
}
LayoutMainFlex.propTypes = {
  children: PropTypes.any
}
LayoutMainFlex.defaultProps = {
  children: null
}
