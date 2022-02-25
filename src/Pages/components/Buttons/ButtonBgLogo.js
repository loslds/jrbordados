import React from 'react'
import PropTypes from 'prop-types'
import { ContainerButtonImgBgLogo, ButtonsImgBgLogo } from './styleButton'

export default function ButtonBgLogo({ title, onClick, img, open }) {
  return (
    <ContainerButtonImgBgLogo open={open}>
      <ButtonsImgBgLogo img={img} onClick={onClick} title={title} />
    </ContainerButtonImgBgLogo>
  )
}

ButtonBgLogo.propTypes = {
  onClick: PropTypes.func,
  img: PropTypes.string,
  title: PropTypes.string,
  open: PropTypes.bool
}
ButtonBgLogo.defaultProps = {
  open: true
}
