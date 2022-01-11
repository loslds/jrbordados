import React from 'react'
import PropTypes from 'prop-types'
import {
  ContainerPanelMain,
  ContainerPanelMainFlex,
  ContainerPanelMainCard
} from './stylePanel'

export default function PanelMain({ children }) {
  return (
    <ContainerPanelMain>
      <ContainerPanelMainFlex>
        <ContainerPanelMainCard>{children}</ContainerPanelMainCard>
      </ContainerPanelMainFlex>
    </ContainerPanelMain>
  )
}
PanelMain.propTypes = {
  children: PropTypes.any
}
