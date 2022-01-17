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
import PanelForm from '../components/Panel/PanelForm'
// import Login from '../components/Login'

export const PageLogin = () => {
  const { push } = useHistory()

  return (
    <PanelMain>
      <ContainerPanelText>
        <ContainerPanelTextFlex>
          <DivisionPanel />
          <PanelLeft>
            <PanelTitle title="Acesso ao Sistema." />
          </PanelLeft>
          <PanelEnd>
            <ButtonBg img={home} onClick={() => push('/')} />
          </PanelEnd>
          <DivisionPanel />
          <PanelForm>
            <h3>Panel Form</h3>
          </PanelForm>
        </ContainerPanelTextFlex>
      </ContainerPanelText>
    </PanelMain>
  )
}
