import React from 'react'
import PropTypes from 'prop-types'
import { LayoutFooterPage } from './stylesLayouts'

export const LayoutFooter = ({ children }) => {
  return <LayoutFooterPage>{children}</LayoutFooterPage>
}
LayoutFooter.prototype = {
  children: PropTypes.any
}
LayoutFooter.default = {
  children: null
}
