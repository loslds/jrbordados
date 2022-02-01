import React from 'react'
import PropTypes from 'prop-types'
import { ContainerCarrosel, ContainerCarroselFlex } from './stylesCarrosel'

export default function CarroselMain({ children }) {
  return (
    <ContainerCarrosel>
      <ContainerCarroselFlex>{children}</ContainerCarroselFlex>
    </ContainerCarrosel>
  )
}

CarroselMain.propTypes = {
  children: PropTypes.any
}
