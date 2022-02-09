import React from 'react'
import PropTypes from 'prop-types'
import { ContainerLayout, LayoutContainerNavFlex } from '../stylesLayoutNav'

export default function LayoutNav({ children }) {
  return (
    <ContainerLayout>
      <LayoutContainerNavFlex>{children}</LayoutContainerNavFlex>
    </ContainerLayout>
  )
}
LayoutNav.propTypes = {
  children: PropTypes.any
}
LayoutNav.defaultProps = {
  children: null
}
