import React from 'react'
import PropTypes from 'prop-types'
import { ContainerPanelEnd } from './stylePanel'

export default function PanelEnd({ children }) {
  return <ContainerPanelEnd>{children}</ContainerPanelEnd>
}

PanelEnd.propTypes = {
  children: PropTypes.any
}
PanelEnd.default = {
  children: null
}
