import React from 'react'
import { useHistory } from 'react-router-dom'
import { PanelEnd, PanelLeft, PanelMain, PanelTitle } from '../components/Panel'
import {
  ContainerPanelText,
  ContainerPanelTextFlex,
  DivisionPanel
} from '../components/Panel/stylePanel'
import { ContainerTitleBg, TitleBg } from '../../styles/styles'
import { ButtonBg } from '../components/Buttons'
import home from '../../assets/image/home.svg'

export default function PageDocEmpresa() {
  const { push } = useHistory()
  return (
    <PanelMain>
      <ContainerPanelText>
        <ContainerPanelTextFlex>
          <DivisionPanel className="1" />
          <PanelLeft>
            <PanelTitle title="Documentação opção Empresa." />
          </PanelLeft>
          <PanelEnd>
            <ButtonBg img={home} onClick={() => push('/about')} />
          </PanelEnd>
          <DivisionPanel />
          <ContainerTitleBg>
            <TitleBg>&nbsp;Empresa&nbsp;</TitleBg>
          </ContainerTitleBg>
          <p>
            &emsp;&emsp;A Sistema esta adequado a tratar as Informações com
            eficiência e fidelidade de acôrdo com o exercício do Usuário.
          </p>
          <p>
            &emsp;&emsp;Estaremos trabalhando com apenas 3 opções no menu
            principal, os quais estão delegados as Rotinas dentro de opções que
            determinarão o desenvolvimento do sistema integrado.
          </p>
          <p>
            &emsp;&emsp;Todas evoluem de acordo com seus próprios princípios em
            requerer, guardar e publicar as informações dentro destes para lhes
            ser útil o necessário.
          </p>
          <DivisionPanel />
        </ContainerPanelTextFlex>
      </ContainerPanelText>
    </PanelMain>
  )
}
