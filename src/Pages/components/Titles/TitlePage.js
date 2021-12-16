import React from 'react'
import PropTypes from 'prop-types'
import {
  ContainerText,
  ContainerTextFlex,
  DivisionText
} from '../../stylePages'

// import Title from './Title'

export default function TitlePage({ title }) {
  return (
    <ContainerText>
      <ContainerTextFlex>
        <DivisionText />
        <h3>{title}</h3>
        <DivisionText />
      </ContainerTextFlex>
    </ContainerText>
  )
}
TitlePage.propTypes = {
  title: PropTypes.string.isRequired
}
