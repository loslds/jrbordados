import React from 'react'
import PropTypes from 'prop-types'
import { ContainerButtonNavBar, ButtonsNavBarImgBg } from '../stylesLayoutNav'

export default function ButtonNavBar({ title, onClick, img }) {
  return (
    <ContainerButtonNavBar>
      <ButtonsNavBarImgBg img={img} onClick={onClick} title={title} />
    </ContainerButtonNavBar>
  )
}
ButtonNavBar.propTypes = {
  onClick: PropTypes.func,
  img: PropTypes.string,
  title: PropTypes.string
}
