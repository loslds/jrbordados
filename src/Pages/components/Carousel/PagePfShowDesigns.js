import React from 'react'
import { useHistory } from 'react-router-dom'
import { PanelMain, PanelLeft, PanelEnd, PanelTitle } from '../components/Panel'
import {
  ContainerPanelText,
  ContainerPanelTextFlex,
  DivisionPanel
} from '../components/Panel/stylePanel'
import { ButtonBg } from '../components/Buttons'
import retornar from '../../assets/image/previous.svg'
import home from '../../assets/image/home.svg'

export default function PagePfShowDesigns() {
  const { push } = useHistory()
  return (
    <PanelMain>
      <ContainerPanelText>
        <ContainerPanelTextFlex>
          <DivisionPanel />
          <PanelLeft>
            <PanelTitle title="Show dos Design`s." />
          </PanelLeft>
          <PanelEnd>
            <ButtonBg
              img={retornar}
              onClick={() => push('/portfolios/pagepfprodutos')}
              title={'Retornar...'}
            />
            <ButtonBg img={home} onClick={() => push('/')} title={'Home'} />
          </PanelEnd>
          <DivisionPanel />
          {<label>Show dos Designs.</label>}
          <DivisionPanel />
        </ContainerPanelTextFlex>
      </ContainerPanelText>
    </PanelMain>
  )
}
