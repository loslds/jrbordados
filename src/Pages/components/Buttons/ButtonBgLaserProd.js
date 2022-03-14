import React from 'react'
import PropTypes from 'prop-types'
import { ContButtonImgBgLaserProd, ButtonImgBgLaserProd } from './styleButton'

export default function ButtonBgLaserProd({ title, onClick, img, open }) {
  return (
    <ContButtonImgBgLaserProd open={open}>
      <ButtonImgBgLaserProd img={img} onClick={onClick} title={title} />
    </ContButtonImgBgLaserProd>
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
