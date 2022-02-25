import React from 'react'
import { useHistory } from 'react-router-dom'
import { PanelMain, PanelLeft, PanelEnd } from '../components/Panel'
import {
  ContainerPanelText,
  ContainerPanelTextFlex,
  DivisionPanel
} from '../components/Panel/stylePanel'
import { ButtonBg, ButtonBgLogo } from '../components/Buttons'
import previous from '../../assets/image/previous.svg'
import home from '../../assets/image/home.svg'
import designlogo from '../../assets/image/designlogo.svg'
import { DataToolsBar } from '../components/Data'
import { NavbarHome } from '../components/NavbarHomeS'
export default function PagePfDesigns() {
  const { push } = useHistory()
  return (
    <PanelMain>
      <ContainerPanelText>
        <ContainerPanelTextFlex>
          <DivisionPanel />
          <PanelLeft>
            <ButtonBgLogo img={designlogo} title={'Designs...'} />
          </PanelLeft>
          <PanelEnd>
            <ButtonBg
              img={previous}
              onClick={() => push('/portfolios')}
              title={'Portfólio'}
            />
            <ButtonBg img={home} onClick={() => push('/')} title={'Home...'} />
          </PanelEnd>
          <DivisionPanel />

          <DataToolsBar>
            <NavbarHome />
          </DataToolsBar>
          <h3>Em Componente Data Design.</h3>
          <DivisionPanel />
        </ContainerPanelTextFlex>
      </ContainerPanelText>
    </PanelMain>
  )
}
