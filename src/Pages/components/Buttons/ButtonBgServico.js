import React from 'react'
import PropTypes from 'prop-types'
import { ContButtImgBgDesig, ButtImgBgDesig } from './styleButton'

export default function ButtonBgServico({ title, onClick, img, open }) {
  return (
    <ContButtImgBgDesig open={open}>
      <ButtImgBgDesig img={img} onClick={onClick} title={title} />
    </ContButtImgBgDesig>
  )
}

ButtonBgServico.propTypes = {
  onClick: PropTypes.func,
  img: PropTypes.string,
  title: PropTypes.string,
  open: PropTypes.bool
}
ButtonBgServico.defaultProps = {
  open: true
}