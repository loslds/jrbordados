import React from 'react'
import PropTypes from 'prop-types'
import { ContButtonImgBgDesigProd, ButtonImgBgDesig } from './styleButton'

export default function ButtonBgDesignProd({ title, onClick, img, open }) {
  return (
    <ContButtonImgBgDesigProd open={open}>
      <ButtonImgBgDesig img={img} onClick={onClick} title={title} />
    </ContButtonImgBgDesigProd>
  )
}

ButtonBgDesignProd.propTypes = {
  onClick: PropTypes.func,
  img: PropTypes.string,
  title: PropTypes.string,
  open: PropTypes.bool
}
ButtonBgDesignProd.defaultProps = {
  open: true
}
