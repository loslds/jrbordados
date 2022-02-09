import React from 'react'
import PropTypes from 'prop-types'
import { LayoutColCenterNav } from '../stylesLayoutNav'

export default function LayoutNavColCenter({ children }) {
  return <LayoutColCenterNav>{children}</LayoutColCenterNav>
}
LayoutNavColCenter.propTypes = {
  children: PropTypes.any
}
LayoutNavColCenter.defaultProps = {
  children: null
}
