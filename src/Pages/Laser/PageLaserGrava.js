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
import gravacoeslaserlogo from '../../assets/image/gravacoeslogo.svg'

export default function PageLaserGrava() {
  const { push } = useHistory()
  return (
    <PanelMain>
      <ContainerPanelText>
        <ContainerPanelTextFlex>
          <DivisionPanel />
          <PanelLeft>
            <ButtonBgLogo
              img={gravacoeslaserlogo}
              title={'Gravações a Laser...'}
            />
          </PanelLeft>
          <PanelEnd>
            <ButtonBg img={home} onClick={() => push('/')} title={'Home...'} />
          </PanelEnd>
          <DivisionPanel />
          <PanelTitle title="Gravações a Laser." />
          <DivisionPanel />
        </ContainerPanelTextFlex>
      </ContainerPanelText>
    </PanelMain>
  )
}
