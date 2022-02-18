import React from 'react'
import PropTypes from 'prop-types'
import { ContainerDataMain, ContainerDataMainFlex } from './styleDatas'
export default function DataDesigns({ children }) {
  return (
    <ContainerDataMain>
      <ContainerDataMainFlex>
        <h3>estou</h3>
        <p>na pagina de design</p>
        {children}
      </ContainerDataMainFlex>
    </ContainerDataMain>
  )
}
DataDesigns.propTypes = {
  children: PropTypes.any
}
DataDesigns.defaultProps = {
  children: null
}
