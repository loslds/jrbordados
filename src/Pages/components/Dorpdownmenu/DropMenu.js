import React from 'react'
import PropTypes from 'prop-types'
import {
  ContentMenu,
  ContainerMenuFlex,
  ContainerMenuCard,
  ContainerMenuCardFlex
} from './stlyleDorpMenu'
export default function DropMenu({ open }) {
  return (
    <ContentMenu open={open}>
      <ContainerMenuFlex>
        <nav>
          <ContainerMenuCard>
            <ContainerMenuCardFlex>
              <h3>Opções.</h3>
            </ContainerMenuCardFlex>
          </ContainerMenuCard>
          <ul>
            <li>Designs.</li>
            <li>
              Bordados.
              <ul>
                <li>Bonés.</li>
                <li>Vestuários.</li>
                <li>Cama/Mesa/Banho.</li>
              </ul>
            </li>
            <li>
              Laser.
              <ul>
                <li>Cortes.</li>
                <li>Gravações.</li>
              </ul>
            </li>
          </ul>
        </nav>
      </ContainerMenuFlex>
    </ContentMenu>
  )
}
DropMenu.propTypes = {
  open: PropTypes.bool
}
DropMenu.defaultProps = {
  open: null
}
