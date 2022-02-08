import React from 'react'
import PropTypes from 'prop-types'
import { ContainerButtonBar, ButtonsBarImgBg } from './stylesCarrosel'

export default function ButtonBarBg({ title, onClick, img }) {
  return (
    <ContainerButtonBar>
      <ButtonsBarImgBg img={img} onClick={onClick} title={title} />
    </ContainerButtonBar>
  )
}

ButtonBarBg.propTypes = {
  onClick: PropTypes.func,
  img: PropTypes.string,
  title: PropTypes.string
}
