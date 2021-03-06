import React from 'react'
import PropTypes from 'prop-types'
import { LayoutContainerPage } from './stylesLayouts'
import { LayoutHeaderPage } from './LayoutHeaderPage'
import { LayoutMainPage } from './LayoutMainPage'
import { LayoutFooterPage } from './LayoutFooterPage'

export const LayoutPage = ({ children }) => {
  return (
    <LayoutContainerPage>
      <LayoutHeaderPage />
      <LayoutMainPage color="rgba(0, 0, 0, 0.1)"> {children}</LayoutMainPage>
      <LayoutFooterPage />
    </LayoutContainerPage>
  )
}

LayoutPage.propTypes = {
  children: PropTypes.string
}
LayoutPage.default = {
  children: null
}
