import React from 'react'
import PropTypes from 'prop-types'
import { ContainerCardBar, FlexCardBar } from './stylesCarrosel'

export default function CarroselBar({ children }) {
  return (
    <ContainerCardBar>
      <FlexCardBar>{children}</FlexCardBar>
    </ContainerCardBar>
  )
}

CarroselBar.propTypes = {
  children: PropTypes.any
}
