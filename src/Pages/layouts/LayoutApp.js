import React from 'react'
import PropTypes from 'prop-types'
import { LayoutContainer } from './styleLayout'
import { NavbarHome } from '../components/NavbarHome'

export const LayoutApp = ({ children }) => {
  return (
    <LayoutContainer>
      <NavbarHome />
      {children}
    </LayoutContainer>
  )
}

LayoutApp.propTypes = {
  children: PropTypes.any
}
LayoutApp.defaultProps = {
  children: null
}
