import React from 'react'
import PropTypes from 'prop-types'
import { ContainerPanelMain, ContainerPanelMainFlex } from './stylePanel'

export default function PanelForm({ children }) {
  return (
    <ContainerPanelMain>
      <ContainerPanelMainFlex>{children}</ContainerPanelMainFlex>
    </ContainerPanelMain>
  )
}
PanelForm.propTypes = {
  children: PropTypes.any
}
