import React from 'react'
import PropTypes from 'prop-types'
import { ContainerDataBordadoMain, ContainerDataMainFlex } from './styleDatas'
export default function DataBordados({ open, children }) {
  return (
    <ContainerDataBordadoMain open={open}>
      <ContainerDataMainFlex>
        <h3>estou</h3>
        <p>Em Componente Data Bordados</p>
        {children}
      </ContainerDataMainFlex>
    </ContainerDataBordadoMain>
  )
}
DataBordados.propTypes = {
  children: PropTypes.any,
  open: PropTypes.bool
}
DataBordados.defaultProps = {
  children: null,
  open: null
}
