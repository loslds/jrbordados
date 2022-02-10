import React from 'react'
import PropTypes from 'prop-types'
import { ContainerToolsBarMain } from './styleToolsbarData'

export default function ToolsBarMain({ children }) {
  return <ContainerToolsBarMain>{children}</ContainerToolsBarMain>
}
ToolsBarMain.propTypes = {
  children: PropTypes.any
}
ToolsBarMain.defaultProps = {
  children: null
}
