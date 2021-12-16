import React from 'react'
import PropTypes from 'prop-types'
import { ContainerPanel, ContainerPanelFlex } from './stylePanel'

export default function PanelDuo({ children }) {
  return (
    <ContainerPanel>
      <ContainerPanelFlex>{children}</ContainerPanelFlex>
    </ContainerPanel>
  )
}

PanelDuo.propTypes = {
  children: PropTypes.any
}
