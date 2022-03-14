import React from 'react'
import PropTypes from 'prop-types'
import { ContainerButtonImgBg, ButtonToolsBar } from './styleButton'

export default function ButtonBgBar({ title, onClick, img }) {
  return (
    <ContainerButtonImgBg>
      <ButtonToolsBar img={img} onClick={onClick} title={title} />
    </ContainerButtonImgBg>
  )
}

ButtonBgBar.propTypes = {
  onClick: PropTypes.func,
  img: PropTypes.string,
  title: PropTypes.string
}
