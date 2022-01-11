import React from 'react'
import PropTypes from 'prop-types'
import { ContainerTextFlex, DivisionText } from '../../stylePages'

export default function TitlePage({ title }) {
  return (
    // <ContainerText>
    <ContainerTextFlex>
      <DivisionText />
      <h5>{title}</h5>
      <DivisionText />
    </ContainerTextFlex>
    // </ContainerText>
  )
}
TitlePage.propTypes = {
  title: PropTypes.string.isRequired
}
