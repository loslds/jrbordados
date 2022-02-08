import React from 'react'
import PropTypes from 'prop-types'
import { LayoutContainerPage, LayoutCenterPage } from './styleLayout'

export const LayoutPages = ({ children }) => {
  return (
    <LayoutContainerPage>
      <LayoutCenterPage>{children}</LayoutCenterPage>
    </LayoutContainerPage>
  )
}

LayoutPages.propTypes = {
  children: PropTypes.any
}
LayoutPages.defaultProps = {
  children: null
}
