import React from 'react'
import PropTypes from 'prop-types'
import { ContainerButtonImgBg, ButtonsImgBg } from './styleButton'

export default function ButtonBg({ title, onClick, img }) {
  return (
    <ContainerButtonImgBg>
      <ButtonsImgBg img={img} onClick={onClick} title={title} />
    </ContainerButtonImgBg>
  )
}

ButtonBg.propTypes = {
  onClick: PropTypes.func,
  img: PropTypes.string,
  title: PropTypes.string
}
