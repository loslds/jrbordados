import { NavbarHome } from '../components/NavbarHome'
import { LayoutContainer } from './styleLayout'
// import { FootersBar } from '../components/FootersBar'
import PropTypes from 'prop-types'
import React from 'react'

export const LayoutApp = ({ children }) => {
  return (
    <LayoutContainer>
      <NavbarHome />
      {children}
      {/* <FootersBar /> */}
    </LayoutContainer>
  )
}

LayoutApp.propTypes = {
  children: PropTypes.any
}
LayoutApp.defaultProps = {
  children: null
}
