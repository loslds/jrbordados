import React from 'react'
import { useHistory } from 'react-router-dom'
import { PanelMain, PanelLeft, PanelEnd, PanelTitle } from '../components/Panel'
import {
  ContainerPanelText,
  ContainerPanelTextFlex,
  DivisionPanel
} from '../components/Panel/stylePanel'
import { ButtonBg } from '../components/Buttons'

import login from '../../assets/image/key-lock.svg'
import { ContainerSys, ContainerImgSys } from '../Home/styleHome'
import logosys from '../../assets/image/logosys.png'
export default function PageSamples() {
  const { push } = useHistory()
  return (
    <PanelMain>
      <ContainerPanelText>
        <ContainerPanelTextFlex>
          <DivisionPanel />
          <PanelLeft>
            <PanelTitle title="Bem Vindo ao Portfólio." />
          </PanelLeft>
          <PanelEnd>
            <ButtonBg
              img={login}
              onClick={() => push('/login')}
              title={'Login.'}
            />
          </PanelEnd>
          <DivisionPanel />
          <ContainerSys>
            <ContainerImgSys img={logosys} />
          </ContainerSys>

          <DivisionPanel />
        </ContainerPanelTextFlex>
      </ContainerPanelText>
    </PanelMain>
  )
}
