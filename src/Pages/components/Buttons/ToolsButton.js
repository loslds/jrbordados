import React from 'react'
import PropTypes from 'prop-types'
import { CtrlPageCol, CtrlPage } from './styleButton'

export default function ToolsButton({ children }) {
  return (
    <CtrlPageCol>
      <CtrlPage>{children}</CtrlPage>
    </CtrlPageCol>
  )
}

ToolsButton.propTypes = {
  children: PropTypes.any
}

ToolsButton.defaultProps = {
  children: null
}
