import React from 'react'
import PropTypes from 'prop-types'
import { ContainerDataMain, ContainerDataMainFlex } from './styleDatas'
export default function DataBordados({ children }) {
  return (
    <ContainerDataMain>
      <ContainerDataMainFlex>
        <h3>estou</h3>
        <p>Em Componente Data Bordados</p>
        {children}
      </ContainerDataMainFlex>
    </ContainerDataMain>
  )
}
DataBordados.propTypes = {
  children: PropTypes.any
}
DataBordados.defaultProps = {
  children: null
}
