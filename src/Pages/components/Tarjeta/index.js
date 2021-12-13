import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import {
  ContainerTexto,
  DivisionTexto,
  ContainerTextFlex
} from '../../../Pages/stylePages'
import { ButtonsTarjetaHomeBg } from './stylesTageta'
import home from '../../../assets/image/home.png'

export default function Tarjeta({ title }) {
  const { push } = useHistory()
  return (
    <ContainerTexto>
      <DivisionTexto />
      <ContainerTextFlex>
        <h3>{title}</h3>
      </ContainerTextFlex>
      <ContainerTextFlex>
        <ButtonsTarjetaHomeBg img={home} onClick={() => push('/')} />
      </ContainerTextFlex>
      <DivisionTexto />
    </ContainerTexto>
  )
}

Tarjeta.propTypes = {
  title: PropTypes.string.isRequired
}
