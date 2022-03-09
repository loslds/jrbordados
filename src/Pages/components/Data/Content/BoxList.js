import React from 'react'
import PropTypes from 'prop-types'
import { ContainerMainList, ContainerMainFlexList } from './stylePageDatas'

export default function BoxList({ children }) {
  return (
    <ContainerMainList>
      <ContainerMainFlexList>{children}</ContainerMainFlexList>
    </ContainerMainList>
  )
}

BoxList.propTypes = {
  children: PropTypes.any
}

BoxList.defaultProps = {
  children: null
}
