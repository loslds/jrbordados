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

export default function PageDocSistema() {
  const { push } = useHistory()
  return (
    <PanelMain>
      <ContainerPanelText>
        <ContainerPanelTextFlex>
          <DivisionPanel />
          <PanelLeft>
            <PanelTitle title="Documentação opção Sistema." />
          </PanelLeft>
          <PanelEnd>
            <ButtonBg img={home} onClick={() => push('/about')} />
          </PanelEnd>
          <DivisionPanel />
          <ContainerTitleBg>
            <TitleBg>&nbsp;Sistema&nbsp;</TitleBg>
          </ContainerTitleBg>
          <p>
            &emsp;&emsp;A Sistema foi elaborado para controlar prestações de
            serviços de Empresa que manufatura Bordados, Cortes à Laser e
            Gravações à Laser.
          </p>
          <p>
            &emsp;&emsp;O Controle se inicia com o Atendimento, Execução do
            Serviço e a Entrega do respectivo.
          </p>
          <p>
            &emsp;&emsp;Tem a probabilidade de controlar os Cadastros em geral,
            sendo que pode ser controlado: Entrada(emissão da O.Serviço), que
            por sua vez denota itens de trabalhos a serem executados.
          </p>
          <p>
            &emsp;&emsp;Após a execução da O.Serviço, é guardado as informações
            para fins de Faturamentos do Ciênte e a entrega ao respectivo
            solicitante(Cliênte).
            <br />
          </p>
          <DivisionPanel />
        </ContainerPanelTextFlex>
      </ContainerPanelText>
    </PanelMain>
  )
}
