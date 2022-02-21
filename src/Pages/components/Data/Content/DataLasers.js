import React from 'react'
import PropTypes from 'prop-types'
import { ContainerDataMain, ContainerDataMainFlex } from './styleDatas'
export default function DataLasers({ children }) {
  return (
    <ContainerDataMain>
      <ContainerDataMainFlex>
        <h3>estou</h3>
        <p>Em Componente Data lasers</p>
        {children}
      </ContainerDataMainFlex>
    </ContainerDataMain>
  )
}

DataLasers.propTypes = {
  children: PropTypes.any
}
DataLasers.defaultProps = {
  children: null
}
