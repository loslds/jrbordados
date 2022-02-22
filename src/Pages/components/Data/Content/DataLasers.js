import React from 'react'
import PropTypes from 'prop-types'
import { ContainerDataLaserMain, ContainerDataMainFlex } from './styleDatas'
export default function DataLasers({ open, children }) {
  return (
    <ContainerDataLaserMain open={open}>
      <ContainerDataMainFlex>
        <h3>estou</h3>
        <p>Em Componente Data lasers</p>
        {children}
      </ContainerDataMainFlex>
    </ContainerDataLaserMain>
  )
}

DataLasers.propTypes = {
  children: PropTypes.any,
  open: PropTypes.bool
}

DataLasers.defaultProps = {
  children: null,
  open: null
}
