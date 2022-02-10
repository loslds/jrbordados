import React from 'react'
import PropTypes from 'prop-types'
import { LayoutColEndNavFlex } from '../stylesLayoutNavFlex'

export default function LayoutNavColEndFlex({ children }) {
  return <LayoutColEndNavFlex>{children}</LayoutColEndNavFlex>
}
LayoutNavColEndFlex.propTypes = {
  children: PropTypes.any
}
LayoutNavColEndFlex.defaultProps = {
  children: null
}
