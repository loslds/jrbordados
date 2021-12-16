import React from 'react'
import PropTypes from 'prop-types'
import { LayoutContainerPage } from './stylesLayouts'

export const LayoutContainer = ({ children }) => {
  return <LayoutContainerPage>{children}</LayoutContainerPage>
}
LayoutContainer.prototype = {
  children: PropTypes.any
}
LayoutContainer.default = {
  children: null
}
