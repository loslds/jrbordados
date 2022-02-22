import React from 'react'
import PropTypes from 'prop-types'
import { ContainerDataDesignMain, ContainerDataMainFlex } from './styleDatas'
export default function DataDesigns({ open, children }) {
  return (
    <ContainerDataDesignMain open={open}>
      <ContainerDataMainFlex>
        <h3>estou</h3>
        <p>Em Componente Data Design.</p>
        {children}
      </ContainerDataMainFlex>
    </ContainerDataDesignMain>
  )
}
DataDesigns.propTypes = {
  children: PropTypes.any,
  open: PropTypes.bool
}
DataDesigns.defaultProps = {
  children: null,
  open: null
}
