import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { PanelEnd, PanelLeft, PanelMain, PanelTitle } from '../components/Panel'
import {
  ContainerPanelText,
  ContainerPanelTextFlex,
  DivisionPanel
} from '../components/Panel/stylePanel'
import { ContainerTitleBg, TitleBg } from '../../styles/styles'
import { ButtonBg } from '../components/Buttons'
import home from '../../assets/image/home.svg'

export default function PageDocPortfolio() {
  const { push } = useHistory()
  return (
    <PanelMain>
      <ContainerPanelText>
        <ContainerPanelTextFlex>
          <DivisionPanel />
          <PanelLeft>
            <PanelTitle title="Documentação dos Portfólios." />
          </PanelLeft>
          <PanelEnd>
            <ButtonBg img={home} onClick={() => push('/about')} />
          </PanelEnd>
          <DivisionPanel />
          <p>
            &emsp;&emsp;Apresentamos os mais diversos Produtos e Serviços, sendo
            que disponibilizamos como exemplos limitados, como forma de
            perspequitivas de acordo com seu interesse comercial.
          </p>
          <p>
            &emsp;&emsp;Dentre nossos Produtos e Serviços contamos com a
            colaboração dos participes de pequenos , médios e grandes empresas
            para fornecerem materiais de alto padrão e serviços de qualidade.
          </p>
          <p>&emsp;&emsp; Conheça nossos Trabalhos...</p>
          <ContainerTitleBg>
            <TitleBg>
              &nbsp;
              <Link to="/portfolios/pagepfprodutos">Portfólio Produtos.</Link>
              &nbsp;
            </TitleBg>
            <TitleBg>
              &nbsp;
              <Link to="/portfolios/pagepfservicos">Portfólio Serviços.</Link>
              &nbsp;
            </TitleBg>
          </ContainerTitleBg>

          <DivisionPanel />
        </ContainerPanelTextFlex>
      </ContainerPanelText>
    </PanelMain>
  )
}
