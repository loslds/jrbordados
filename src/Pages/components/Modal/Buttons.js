import React from 'react'
import PropTypes from 'prop-types'
import { ContainerButton, ButtonModal } from './stylerModal'
import closebrc from '../../../assets/image/closebrc.svg'
export default function Buttons({ onClick }) {
  return (
    <ContainerButton>
      <ButtonModal img={closebrc} title="Fechar..." onClick={onClick} />
    </ContainerButton>
  )
}

Buttons.defaultProps = {
  onClick: () => {}
}
Buttons.propTypes = {
  onClick: PropTypes.func
}
