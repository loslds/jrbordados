import React from 'react'
import PropTypes from 'prop-types'
import { ContainerDataDesignMain, ContainerDataMainFlex } from './styleDatas'
export default function DataDesigns({ open, children }) {
  return (
    <ContainerDataDesignMain open={open}>
      <ContainerDataMainFlex>{children}</ContainerDataMainFlex>
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
