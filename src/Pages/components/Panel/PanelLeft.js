import React from 'react'
import PropTypes from 'prop-types'
import { ContainerPanelLeft } from './stylePanel'

export default function PanelLeft({ children }) {
  return <ContainerPanelLeft>{children}</ContainerPanelLeft>
}

PanelLeft.propTypes = {
  children: PropTypes.any
}
PanelLeft.default = {
  children: null
}
