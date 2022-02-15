import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ContentMenu, ButtonMenuDropdown } from './stlyleDorpMenu'
export default function DropMenu({ open }) {
  const [btbg, setBtbg] = useState(false)
  const handleChanger = () => {
    setBtbg(chg => !chg)
  }
  return (
    <ContentMenu open={open}>
      <nav>
        <ul>
          <li>
            <ButtonMenuDropdown
              btbg={btbg}
              onChanger={handleChanger}
              title="Design."
            >
              Design.
            </ButtonMenuDropdown>
          </li>
          <li>
            <button title="Bordado.">Bordado. adsasdadasdas</button>
          </li>
          <li>
            <button title="Laser.">Laser.</button>
            <ul>
              <li>Cortes.</li>
              <li>Gravações.</li>
            </ul>
          </li>
        </ul>
      </nav>
    </ContentMenu>
  )
}
DropMenu.propTypes = {
  open: PropTypes.bool,
  btbg: PropTypes.bool
}
DropMenu.defaultProps = {
  open: null,
  btbg: false
}
/**
 *
 * <ul>
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
