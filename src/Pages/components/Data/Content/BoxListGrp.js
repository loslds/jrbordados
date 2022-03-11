import React from 'react'
import PropTypes from 'prop-types'
import { ContainerMainList, ContainerMainFlexList } from '../styleDatas'

export default function BoxListGrp({ children }) {
  return (
    <ContainerMainList>
      <ContainerMainFlexList>{children}</ContainerMainFlexList>
    </ContainerMainList>
  )
}

BoxListGrp.propTypes = {
  children: PropTypes.any
}

BoxListGrp.defaultProps = {
  children: null
}
