import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import { PanelMain, PanelLeft, PanelEnd, PanelTitle } from '../components/Panel'
import {
  ContainerPanelMainCard,
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
            <PanelTitle title="Documentação sobre o Menu." />
          </PanelLeft>
          <PanelEnd>
            <ButtonBg img={home} onClick={() => push('/')} />
          </PanelEnd>
          <DivisionPanel />
          <ContainerPanelText>
            <p>
              {'  '}
              &emsp;&emsp;O Sistema esta adequado a tratar as Informações com
              eficiência e fidelidade de acôrdo com o exercício do Usuário.
            </p>
            <p>
              {'  '}
              &emsp;&emsp;Estaremos trabalhando com apenas 3 opções no menu
              principal.
            </p>
            <p>
              {'  '}
              &emsp;&emsp;Sendo que as Rotinas dentro de opções que determinarão
              o desenvolvimento do sistema integrado.
            </p>
            <p>
              {' '}
              &emsp;&emsp;Todas evoluem de acordo com seus próprios princípios
              de requerer, guardar e publicar as informações.
            </p>
            <p>
              {' '}
              &emsp;&emsp;Em nosso MENU, notamos acima, as seguintes opções:{' '}
              <br />
            </p>
          </ContainerPanelText>
          <ContainerPanelMainCard>
            <ContainerPanelText>
              <ContainerTitleBg>
                <TitleBg>
                  &nbsp;<Link to="/docs/docempresa">Empresas</Link>&nbsp;
                </TitleBg>
                <TitleBg>
                  <Link to="/docs/docproduto">&nbsp;Produtos</Link>&nbsp;
                </TitleBg>
                <TitleBg>
                  <Link to="/docs/docservico">&nbsp;Serviços</Link>&nbsp;
                </TitleBg>
              </ContainerTitleBg>
            </ContainerPanelText>
          </ContainerPanelMainCard>
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
