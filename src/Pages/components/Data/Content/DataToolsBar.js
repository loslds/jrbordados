import React from 'react'
import PropTypes from 'prop-types'
import { DataToolsBarMain, DataToolsBarMainFlex } from '../styleDatas'
export default function DataToolsBar({ children }) {
  return (
    <DataToolsBarMain>
      <DataToolsBarMainFlex>{children}</DataToolsBarMainFlex>
    </DataToolsBarMain>
  )
}
DataToolsBar.propTypes = {
  children: PropTypes.any
}
DataToolsBar.defaultProps = {
  children: null
}
