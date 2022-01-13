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

export default function PageDocAcesso() {
  const { push } = useHistory()
  return (
    <PanelMain>
      <ContainerPanelText>
        <ContainerPanelTextFlex>
          <DivisionPanel />
          <PanelLeft>
            <PanelTitle title="Documentação opção Acesso." />
          </PanelLeft>
          <PanelEnd>
            <ButtonBg img={home} onClick={() => push('/about')} />
          </PanelEnd>
          <DivisionPanel />
          <ContainerTitleBg>
            <TitleBg>&nbsp;Acesso&nbsp;</TitleBg>
          </ContainerTitleBg>
          <p>
            &emsp;&emsp;A Opção Acesso, é a porta de entrada para que o usuário
            tenha a liberdade de poder ver, executar e se informar com os dados
            que o sistema tem em seus bancos de Informações.
          </p>
          <p>
            &emsp;&emsp;Para que isso seja possível, ele deverá ter uma chave de
            acesso determinado ao Logar no Sistema.
          </p>
          <p>
            &emsp;&emsp;Assim que ele for cadastrado no sistema e apto a ter
            acesso, todas as informações lhes serão fornecidas.
          </p>
          <DivisionPanel />
        </ContainerPanelTextFlex>
      </ContainerPanelText>
    </PanelMain>
  )
}
