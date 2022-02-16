import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { ContentMenu, ButtonMenuDropdown } from './stlyleDropMenu'

function FechaDivMenus(props) {
  const { sinal } = props
  if (sinal) {
    return <div>Verdadeiro</div>
  }
  return <div>Falso</div>
}
FechaDivMenus.defaultProps = {
  sinal: false
}
FechaDivMenus.propTypes = {
  sinal: PropTypes.bool
}

export default function DropMenu({ open, menuprd }) {
  const handleClick = useCallback(
    e => {
      const nm = e && e.target ? e.target.name || null : ''
      console.log('nm : ', nm)
      menuprd = nm
    },
    [menuprd]
  )

  return (
    <ContentMenu open={open}>
      <nav>
        <ul>
          <li>
            <ButtonMenuDropdown
              name="Designs"
              title="Designs."
              onClick={handleClick}
            >
              Design.
            </ButtonMenuDropdown>
          </li>
          <li>
            <ButtonMenuDropdown
              name="Bordados"
              title="Bordados."
              onClick={handleClick}
            >
              Bordado.
            </ButtonMenuDropdown>
          </li>
          <li>
            <ButtonMenuDropdown
              name="Laser"
              title="Laser."
              onClick={handleClick}
            >
              Laser.
            </ButtonMenuDropdown>
          </li>
        </ul>
      </nav>
    </ContentMenu>
  )
}
DropMenu.propTypes = {
  open: PropTypes.bool,
  menuprd: PropTypes.string
}
DropMenu.defaultProps = {
  open: null,
  menuprd: ''
}
/**
 *
, { useState }
uldiv: PropTypes.bool
uldiv: null
  ContainerUlDropdown
  const [uldiv, setUlDiv] = useState(true)

  <ContainerUlDropdown uldiv={uldiv}>
              <ul>
                <li>
                  <button>Bonés.</button>
                </li>
                <li>
                  <button>Vestuários</button>.
                </li>
                <li>
                  <button>Cama/Mesa/Banho.</button>
                </li>
              </ul>
            </ContainerUlDropdown>
 *
 *
 *
              <ul>
                <li>
                  <button>Bonés.</button>
                </li>
                <li>
                  <button>Vestuários</button>.
                </li>
                <li>
                  <button>Cama/Mesa/Banho.</button>
                </li>
              </ul>

              <ul>
                <li>Cortes.</li>
                <li>Gravações.</li>
              </ul>
 */
