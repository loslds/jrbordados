import React from 'react'
import { useHistory } from 'react-router-dom'
import { PanelMain, PanelLeft, PanelEnd, PanelTitle } from '../components/Panel'
import {
  ContainerPanelText,
  ContainerPanelTextFlex,
  DivisionPanel
} from '../components/Panel/stylePanel'
import { ButtonBg } from '../components/Buttons'

import home from '../../assets/image/home.svg'

export default function PagePfDesigns() {
  const { push } = useHistory()
  return (
    <PanelMain>
      <ContainerPanelText>
        <ContainerPanelTextFlex>
          <DivisionPanel />
          <PanelLeft>
            <PanelTitle title="PortFolios Design`s." />
          </PanelLeft>
          <PanelEnd>
            <ButtonBg img={home} onClick={() => push('/')} title={'Home'} />
          </PanelEnd>
          <DivisionPanel />
        </ContainerPanelTextFlex>
      </ContainerPanelText>
    </PanelMain>
  )
}