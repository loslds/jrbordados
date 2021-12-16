import React from 'react'
import PropTypes from 'prop-types'
import { LayoutMainPage } from './stylesLayouts'

export const LayoutMain = ({ children }) => {
  return <LayoutMainPage>{children}</LayoutMainPage>
}
LayoutMain.prototype = {
  children: PropTypes.string
}
LayoutMain.default = {
  children: null
}
