import React from 'react'
import PropTypes from 'prop-types'
import { ContainerToolsBarMainFlex } from './styleToolsbarData'

export default function ToolsBarMainFlex({ children }) {
  return <ContainerToolsBarMainFlex>{children}</ContainerToolsBarMainFlex>
}
ToolsBarMainFlex.propTypes = {
  children: PropTypes.any
}
ToolsBarMainFlex.defaultProps = {
  children: null
}
