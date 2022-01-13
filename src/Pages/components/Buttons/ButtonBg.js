import React from 'react'
import PropTypes from 'prop-types'
import { ContainerButtonImgBg, ButtonsImgBg } from './styleButton'

export default function ButtonBg({ onClick, img }) {
  return (
    <ContainerButtonImgBg>
      <ButtonsImgBg img={img} onClick={onClick} />
    </ContainerButtonImgBg>
  )
}

ButtonBg.propTypes = {
  onClick: PropTypes.func,
  img: PropTypes.string
}
