import React from 'react'
import PropTypes from 'prop-types'
import {
  ContButtonImgBgBordadosProd,
  ButtonImgBgBordadosProd
} from './styleButton'

export default function ButtonBgBordadoProd({ title, onClick, img, open }) {
  return (
    <ContButtonImgBgBordadosProd open={open}>
      <ButtonImgBgBordadosProd img={img} onClick={onClick} title={title} />
    </ContButtonImgBgBordadosProd>
  )
}

ButtonBgBordadoProd.propTypes = {
  onClick: PropTypes.func,
  img: PropTypes.string,
  title: PropTypes.string,
  open: PropTypes.bool
}
ButtonBgBordadoProd.defaultProps = {
  open: true
}
