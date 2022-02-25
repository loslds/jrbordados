import React from 'react'
import PropTypes from 'prop-types'
import { DataCardImgTitle, DataCardImgTitleFlex } from './styleDatas'
export default function DataCarImgTitle({ children }) {
  return (
    <DataCardImgTitle>
      <DataCardImgTitleFlex>{children}</DataCardImgTitleFlex>
    </DataCardImgTitle>
  )
}
DataCarImgTitle.propTypes = {
  children: PropTypes.any
}
DataCarImgTitle.defaultProps = {
  children: null
}
