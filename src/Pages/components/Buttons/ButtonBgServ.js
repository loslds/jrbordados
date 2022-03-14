import React from 'react'
import PropTypes from 'prop-types'
import { ContButtonImgBgServ, ButtonImgBgServ } from './styleButton'

export default function ButtonBgServ({ title, onClick, img, open }) {
  return (
    <ContButtonImgBgServ open={open}>
      <ButtonImgBgServ img={img} onClick={onClick} title={title} />
    </ContButtonImgBgServ>
  )
}

ButtonBgServ.propTypes = {
  onClick: PropTypes.func,
  img: PropTypes.string,
  title: PropTypes.string,
  open: PropTypes.bool
}
ButtonBgServ.defaultProps = {
  open: true
}
