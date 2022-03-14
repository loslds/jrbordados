import React from 'react'
import PropTypes from 'prop-types'
import { ContButtonImgBgDesig, ButtonImgBgDesig } from './styleButton'

export default function ButtonBgDesig({ title, onClick, img, open }) {
  return (
    <ContButtonImgBgDesig open={open}>
      <ButtonImgBgDesig img={img} onClick={onClick} title={title} />
    </ContButtonImgBgDesig>
  )
}

ButtonBgDesig.propTypes = {
  onClick: PropTypes.func,
  img: PropTypes.string,
  title: PropTypes.string,
  open: PropTypes.bool
}
ButtonBgDesig.defaultProps = {
  open: true
}
