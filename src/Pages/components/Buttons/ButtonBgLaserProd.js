import React from 'react'
import PropTypes from 'prop-types'
import { ContButtImgBgDesig, ButtImgBgDesig } from './styleButton'

export default function ButtonBgLaserProd({ title, onClick, img, open }) {
  return (
    <ContButtImgBgDesig open={open}>
      <ButtImgBgDesig img={img} onClick={onClick} title={title} />
    </ContButtImgBgDesig>
  )
}

ButtonBgLaserProd.propTypes = {
  onClick: PropTypes.func,
  img: PropTypes.string,
  title: PropTypes.string,
  open: PropTypes.bool
}
ButtonBgLaserProd.defaultProps = {
  open: true
}
