import React from 'react'
import PropTypes from 'prop-types'
import {
  ContainerCarroselCard,
  ContainerCarroselCardFlexBrd
} from './stylesCarrosel'

export default function CarroselOpcoes({ children }) {
  return (
    <ContainerCarroselCard>
      <ContainerCarroselCardFlexBrd>{children}</ContainerCarroselCardFlexBrd>
    </ContainerCarroselCard>
  )
}

CarroselOpcoes.propTypes = {
  children: PropTypes.any
}
