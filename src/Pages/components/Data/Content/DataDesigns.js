import React from 'react'
import PropTypes from 'prop-types'
import { ContainerDataDesignMain, ContainerDataMainFlex } from '../styleDatas'
export default function DataDesigns({ children }) {
  return (
    <ContainerDataDesignMain open={open}>
      <ContainerDataMainFlex>{children}</ContainerDataMainFlex>
    </ContainerDataDesignMain>
  )
}
DataDesigns.propTypes = {
  children: PropTypes.any
}
DataDesigns.defaultProps = {
  children: null
}
