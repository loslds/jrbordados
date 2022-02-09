import React from 'react'
import PropTypes from 'prop-types'
import { LayoutColEndNav } from '../stylesLayoutNav'

export default function LayoutNavColEnd({ children }) {
  return <LayoutColEndNav>{children}</LayoutColEndNav>
}
LayoutNavColEnd.propTypes = {
  children: PropTypes.any
}
LayoutNavColEnd.defaultProps = {
  children: null
}
