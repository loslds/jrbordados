import React from 'react'
import PropTypes from 'prop-types'
import {
  ContainerCarroselCard,
  ContainerCarroselCardFlex
} from './stylesCarrosel'

export default function CarroselLogo({ children }) {
  return (
    <ContainerCarroselCard>
      <ContainerCarroselCardFlex>{children}</ContainerCarroselCardFlex>
    </ContainerCarroselCard>
  )
}

CarroselLogo.propTypes = {
  children: PropTypes.any
}
