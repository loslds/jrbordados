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
import designlogo from '../../assets/image/designlogo.svg'

// export const PageDesigns = () => {
export default function PageDesigns() {
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
            <ButtonBg img={home} onClick={() => push('/')} title={'Home...'} />
          </PanelEnd>
          <DivisionPanel />
          <PanelTitle title="Designs." />
          <DivisionPanel />
        </ContainerPanelTextFlex>
      </ContainerPanelText>
    </PanelMain>
  )
}
