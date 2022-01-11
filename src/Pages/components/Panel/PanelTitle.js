import React from 'react'
import PropTypes from 'prop-types'
import { ContainerPanelTitleFlex } from './stylePanel'

export default function PanelTitle({ title }) {
  return (
    <ContainerPanelTitleFlex>
      <h4>{title}</h4>
    </ContainerPanelTitleFlex>
  )
}
PanelTitle.propTypes = {
  title: PropTypes.string.isRequired
}
