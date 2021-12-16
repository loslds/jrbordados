import React from 'react'
import PropTypes from 'prop-types'
import { CardTitleFlex } from './styleTitles'

export default function Title({ title }) {
  return (
    <CardTitleFlex>
      <h3>{title}</h3>
    </CardTitleFlex>
  )
}
Title.propTypes = {
  title: PropTypes.string.isRequired
}
