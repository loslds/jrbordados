import React from 'react'
import { useHistory } from 'react-router-dom'
import { PanelMain, PanelLeft, PanelEnd, PanelTitle } from '../components/Panel'
import {
  ContainerPanelText,
  ContainerPanelTextFlex,
  DivisionPanel
} from '../components/Panel/stylePanel'
import { ButtonBg, ButtonBgLogo } from '../components/Buttons'
import home from '../../assets/image/home.svg'
import corteslaserlogo from '../../assets/image/corteslaserlogo.svg'

export default function PageLaserCorta() {
  const { push } = useHistory()
  return (
    <PanelMain>
      <ContainerPanelText>
        <ContainerPanelTextFlex>
          <DivisionPanel />
          <PanelLeft>
            <ButtonBgLogo img={corteslaserlogo} title={'Cortes a Laser...'} />
          </PanelLeft>
          <PanelEnd>
            <ButtonBg img={home} onClick={() => push('/')} title={'Home...'} />
          </PanelEnd>
          <DivisionPanel />
          <PanelTitle title="Cortes a Laser." />
          <DivisionPanel />
        </ContainerPanelTextFlex>
      </ContainerPanelText>
    </PanelMain>
  )
}
