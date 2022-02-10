import React from 'react'
import PropTypes from 'prop-types'
import { LayoutColCenterNavFlex } from '../stylesLayoutNav'

export default function LayoutNavColCenterFlex({ children }) {
  return <LayoutColCenterNavFlex>{children}</LayoutColCenterNavFlex>
}
LayoutNavColCenterFlex.propTypes = {
  children: PropTypes.any
}
LayoutNavColCenterFlex.defaultProps = {
  children: null
}
