import React from 'react'
import PropTypes from 'prop-types'
import { ContButtImgBgDesig, ButtImgBgDesig } from './styleButton'

export default function ButtonBgDesignProd({ title, onClick, img, open }) {
  return (
    <ContButtImgBgDesig open={open}>
      <ButtImgBgDesig img={img} onClick={onClick} title={title} />
    </ContButtImgBgDesig>
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
