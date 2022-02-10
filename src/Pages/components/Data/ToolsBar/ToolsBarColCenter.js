import React from 'react'
import PropTypes from 'prop-types'
import { ContainerToolsBarColCenter } from './styleToolsbarData'

export default function ToolsBarColCenter({ children }) {
  return <ContainerToolsBarColCenter>{children}</ContainerToolsBarColCenter>
}
ToolsBarColCenter.propTypes = {
  children: PropTypes.any
}
ToolsBarColCenter.defaultProps = {
  children: null
}
