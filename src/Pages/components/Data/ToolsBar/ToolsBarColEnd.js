import React from 'react'
import PropTypes from 'prop-types'
import { ContainerToolsBarColEnd } from './styleToolsbarData'

export default function ToolsBarColEnd({ children }) {
  return <ContainerToolsBarColEnd>{children}</ContainerToolsBarColEnd>
}
ToolsBarColEnd.propTypes = {
  children: PropTypes.any
}
ToolsBarColEnd.defaultProps = {
  children: null
}
