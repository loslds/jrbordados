import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import { PanelMain, PanelLeft, PanelEnd, PanelTitle } from '../components/Panel'
import {
  ContainerPanelText,
  ContainerPanelTextFlex,
  DivisionPanel
} from '../components/Panel/stylePanel'
import { ContainerTitleBg, TitleBg } from '../../styles/styles'
import { ButtonBg } from '../components/Buttons'
import home from '../../assets/image/home.svg'

export default function PagePortfolio() {
  const { push } = useHistory()
  return (
    <PanelMain>
      <ContainerPanelText>
        <ContainerPanelTextFlex>
          <DivisionPanel />
          <PanelLeft>
            <PanelTitle title="Acesso ao PortFolios." />
          </PanelLeft>
          <PanelEnd>
            <ButtonBg img={home} onClick={() => push('/')} title={'Home'} />
          </PanelEnd>
          <DivisionPanel />

          <p>
            &emsp;&emsp;Os PortFolios se tratar de poder apresentar alguns
            Produtos e Serviços efetuados através da nossa empresa, de forma que
            possa visualizar os produtos com os Designs ja executados com
            qualidade.
          </p>
          <p>
            &emsp;&emsp;Estaremos apresentando os Produtos e Serviços, com os
            quais delegamos as Rotinas de opções para cada opção desejada dentre
            eles.
          </p>
          <p>
            &emsp;&emsp;Basta clicar no Link desejado para poder visualizar.
            <br />{' '}
          </p>
          <ContainerTitleBg>
            <TitleBg>
              &nbsp;<Link to="#">Portfolio Produtos</Link>
              &nbsp;
            </TitleBg>
            <TitleBg>
              &nbsp;<Link to="#">Portfolio Serviços</Link>
              &nbsp;
            </TitleBg>
          </ContainerTitleBg>
          <DivisionPanel />
        </ContainerPanelTextFlex>
      </ContainerPanelText>
    </PanelMain>
  )
}
