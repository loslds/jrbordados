import React from 'react'
import PropTypes from 'prop-types'
import {
  ContainerCarrosel,
  ContainerCarroselFlex,
  CardBarMain
} from './stylesCarrosel'
export default function CarroselMain({ children }) {
  return (
    <ContainerCarrosel>
      <ContainerCarroselFlex>
        <CardBarMain>{children}</CardBarMain>
      </ContainerCarroselFlex>
    </ContainerCarrosel>
  )
}

CarroselMain.propTypes = {
  children: PropTypes.any
}
