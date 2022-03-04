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
import bordadoslogo from '../../assets/image/bordadoslogo.svg'
export default function PageBordados() {
  const { push } = useHistory()
  return (
    <PanelMain>
      <ContainerPanelText>
        <ContainerPanelTextFlex>
          <DivisionPanel />
          <PanelLeft>
            <ButtonBgLogo img={bordadoslogo} title={'Bordados...'} />
          </PanelLeft>
          <PanelEnd>
            <ButtonBg img={home} onClick={() => push('/')} title={'Home...'} />
          </PanelEnd>
          <DivisionPanel />
          <PanelTitle title="Bordados." />
          <DivisionPanel />
        </ContainerPanelTextFlex>
      </ContainerPanelText>
    </PanelMain>
  )
}
