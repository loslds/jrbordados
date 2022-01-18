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

export const PageAbout = () => {
  const { push } = useHistory()
  return (
    <PanelMain>
      <ContainerPanelText>
        <ContainerPanelTextFlex>
          <DivisionPanel />
          <PanelLeft>
            <PanelTitle title="Documentação Sobre o Sistema." />
          </PanelLeft>
          <PanelEnd>
            <ButtonBg img={home} onClick={() => push('/')} />
          </PanelEnd>
          <DivisionPanel />

          <p>
            &emsp;&emsp;O Sistema esta adequado a tratar as Informações com
            eficiência e fidelidade de acôrdo com o exercício do Usuário.
          </p>
          <p>
            &emsp;&emsp;Estaremos trabalhando com apenas 3 opções no menu
            principal, os quais estão delegados as Rotinas dentro de opções que
            determinarão o desenvolvimento do sistema integrado.
          </p>
          <p>
            &emsp;&emsp;Todas evoluem de acordo com seus próprios princípios de
            requerer, guardar e publicar as informações dentro destes para lhes
            ser útil o necessário.
          </p>
          <p>
            &emsp;&emsp;Em nosso MENU PRINCIPAL, notamos acima, as seguintes
            opções: <br />
          </p>
          <ContainerTitleBg>
            <TitleBg>
              &nbsp;<Link to="/docs/empresa">Empresas</Link>&nbsp;
            </TitleBg>
            <TitleBg>
              <Link to="/docs/produto">&nbsp;Produtos</Link>&nbsp;
            </TitleBg>
            <TitleBg>
              <Link to="/docs/servico">&nbsp;Serviços</Link>&nbsp;
            </TitleBg>
          </ContainerTitleBg>
          <DivisionPanel />
          <p>
            &emsp;&emsp;Para saber mais sobre cada item das opções do MENU
            PRINCIPAL, basta clicar nos links acima.
            <br />
          </p>
        </ContainerPanelTextFlex>
      </ContainerPanelText>
    </PanelMain>
  )
}
