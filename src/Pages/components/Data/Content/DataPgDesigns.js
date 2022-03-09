import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  ContainerPgDataMain,
  ContainerPgDataMainFlex,
  ContainerPgToolsBarFlex,
  ContainerToolsBarColCenter,
  ContainerToolsBarColEnd
} from './stylePageDatas'
import { ButtonBg } from '../../Buttons'
import menubrc from '../../../../assets/image/menubrc.svg'
import limparbrc from '../../../../assets/image/limparbrc.svg'
import BoxList from './BoxList'

export default function DataPgDesigns({ open, children }) {
  // const [menus, setMenus] = useState([
  //   { id: 'Designs', open: false },
  //   { id: 'Bordados', open: false },
  //   { id: 'Lasers', open: false }
  // ])

  const [onoff, setOnOff] = useState(false)
  const handleMenu = () => {
    const off = !onoff
    setOnOff(off)
    if (!off) {
      // handleCloseDatas()
    }
  }
  return (
    <ContainerPgDataMain>
      <ContainerPgDataMainFlex>
        <ContainerPgToolsBarFlex>
          <ContainerToolsBarColCenter open={onoff}>
            <BoxList>
              <h3>estou no boxlist</h3>
              {'   '}
              <h3>estou no boxlist</h3>
            </BoxList>
          </ContainerToolsBarColCenter>
          <ContainerToolsBarColEnd>
            <ButtonBg img={menubrc} onClick={handleMenu} />
            <ButtonBg img={limparbrc} onClick={() => {}} />
          </ContainerToolsBarColEnd>
        </ContainerPgToolsBarFlex>
        {
          <h3>
            painel com material design conform o filtro painel com material
            design conform o filtro
          </h3>
        }
      </ContainerPgDataMainFlex>
    </ContainerPgDataMain>
  )
}
DataPgDesigns.propTypes = {
  children: PropTypes.any,
  open: PropTypes.bool
}
DataPgDesigns.defaultProps = {
  children: null,
  open: null
}
