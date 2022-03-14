import React from 'react'
import PropTypes from 'prop-types'
import { ContButtonImgBgProd, ButtonImgBgProd } from './styleButton'

export default function ButtonBgProd({ title, onClick, img, open }) {
  return (
    <ContButtonImgBgProd open={open}>
      <ButtonImgBgProd img={img} onClick={onClick} title={title} />
    </ContButtonImgBgProd>
  )
}

ButtonBgProd.propTypes = {
  onClick: PropTypes.func,
  img: PropTypes.string,
  title: PropTypes.string,
  open: PropTypes.bool
}
ButtonBgProd.defaultProps = {
  open: true
}
