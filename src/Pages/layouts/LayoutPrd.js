import React from 'react'
import PropTypes from 'prop-types'
import { LayoutContainer } from './styleLayout'
import { NavbarPrd } from '../components/NavbarProd'
export const LayoutPrd = ({ children }) => {
  return (
    <LayoutContainer>
      <NavbarPrd />
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
