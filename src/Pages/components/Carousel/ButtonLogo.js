import React from 'react'
import PropTypes from 'prop-types'
import { ContainerCarroselLogo, ButtonsImgBgLogo } from './stylesCarrosel'

export default function ButtonLogo({ img, onClick, title }) {
  return (
    <ContainerCarroselLogo>
      <ButtonsImgBgLogo img={img} onClick={onClick} title={title} />
    </ContainerCarroselLogo>
  )
}

ButtonLogo.propTypes = {
  img: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string
}
