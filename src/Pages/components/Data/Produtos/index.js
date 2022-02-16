import React from 'react'
import PropTypes from 'prop-types'
import { ContainerLayoutMain, ContainerLayoutMainFlex } from '../Layout'
export default function PageProdutos({ children }) {
  return (
    <ContainerLayoutMain>
      <ContainerLayoutMainFlex>{children}</ContainerLayoutMainFlex>
    </ContainerLayoutMain>
  )
}
PageProdutos.propTypes = {
  children: PropTypes.any
}
PageProdutos.defaultProps = {
  children: null
}
