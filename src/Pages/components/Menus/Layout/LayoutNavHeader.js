import React from 'react'
import PropTypes from 'prop-types'
import { LayoutHeaderNav, LayoutHeaderNavFlex } from '../stylesLayoutNav'

export default function LayoutNavHeader({ children }) {
  return (
    <LayoutHeaderNav>
      <LayoutHeaderNavFlex>{children}</LayoutHeaderNavFlex>
    </LayoutHeaderNav>
  )
}
LayoutNavHeader.propTypes = {
  children: PropTypes.any
}
LayoutNavHeader.defaultProps = {
  children: null
}
