import React from 'react'
import PropTypes from 'prop-types'
import {
  ContainerCarroselCard,
  ContainerCarroselLogoFlex
} from './stylesCarrosel'

export default function CarroselLogo({ children }) {
  return (
    <ContainerCarroselCard>
      <ContainerCarroselLogoFlex>{children}</ContainerCarroselLogoFlex>
    </ContainerCarroselCard>
  )
}

CarroselLogo.propTypes = {
  children: PropTypes.any
}
