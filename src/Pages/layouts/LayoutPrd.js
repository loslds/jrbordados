import React from 'react'
import { LayoutContainer } from './styleLayout'
import { NavbarProd } from '../components/NavbarProd'
import { PropTypes } from 'prop-types'

export const LayoutPrd = ({ children }) => {
  return (
    <LayoutContainer>
      <NavbarProd />
      {children}
    </LayoutContainer>
  )
}

LayoutPrd.propTypes = {
  children: PropTypes.any
}
LayoutPrd.defaultProps = {
  children: null
}
