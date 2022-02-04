import React from 'react'
import { useHistory } from 'react-router-dom'
import { PanelMain, PanelLeft, PanelEnd, PanelTitle } from '../components/Panel'
import {
  ContainerPanelText,
  ContainerPanelTextFlex,
  ContainerPanelMainCard,
  DivisionPanel
} from '../components/Panel/stylePanel'
import { ContainerTitleBg, TitleBg } from '../../styles/styles'
import { ButtonBg, ButtonLogoPage } from '../components/Buttons'
import home from '../../assets/image/home.svg'
import designs from '../../assets/image/designs.svg'
import produtos from '../../assets/image/produtoslogo.svg'
import servicos from '../../assets/image/servicoslogo.svg'
export default function PagePortfolios() {
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
            <ButtonBg img={home} onClick={() => push('/')} title={'Home.'} />
          </PanelEnd>
          <DivisionPanel />
          <ContainerPanelMainCard>
            <ContainerPanelText>
              <ContainerTitleBg>
                <TitleBg>&nbsp;Portifólios&nbsp;</TitleBg>
              </ContainerTitleBg>
            </ContainerPanelText>
          </ContainerPanelMainCard>
          <p>
            {'    '}
            &emsp;&emsp;Os PortFolios se tratar de poder apresentar alguns
            Produtos e Serviços efetuados através da nossa empresa.
          </p>
          <p>
            {'    '}
            &emsp;&emsp; Dentre eles, poderão apreciar : Tipos de Design,
            Bordados, Cortes à Laser e Gravação á Laser.
          </p>
          <p>
            &emsp;&emsp;Estaremos delegando as Rotinas de opções para cada opção
            desejada dentre as diversas opções.
          </p>
          <p>
            {'    '}
            Ao visualizar os produtos e Serviços contamos com sua satisfação.
          </p>
          <ContainerPanelMainCard>
            <ContainerPanelText>
              <ButtonLogoPage
                img={designs}
                onClick={() => push('/portfolios/PagePfDesigns')}
                title="Portfolio Design`s."
              />
              <ButtonLogoPage
                img={produtos}
                onClick={() => push('/portfolios/PagePfProdutos')}
                title="Portfolio Produtos"
              />
              <ButtonLogoPage
                img={servicos}
                onClick={() => push('/portfolios/PagePfServicos')}
                title="Portfolio Serviços."
              />

              {/* <ContainerTitleBg>
                <TitleBg>
                  <Link to="/portfolios/PagePfDesigns">
                    Portfolio Design`s.
                  </Link>
                </TitleBg>
                <TitleBg>
                  &nbsp;
                  <Link to="/portfolios/PagePfProdutos">
                    Portfolio Produtos.
                  </Link>
                  &nbsp;
                </TitleBg>
                <TitleBg>
                  <Link to="/portfolios/PagePfServicos">
                    Portfolio Serviços.
                  </Link>
                </TitleBg>
              </ContainerTitleBg> */}
            </ContainerPanelText>
          </ContainerPanelMainCard>
          <DivisionPanel />
          <ContainerPanelText>
            <p>
              {'    '}
              &emsp;&emsp;Basta clicar no Logotipo desejado e desfrutar das
              nossas opções ao visualizar.
              <br />{' '}
            </p>
          </ContainerPanelText>
          <DivisionPanel />
        </ContainerPanelTextFlex>
      </ContainerPanelText>
    </PanelMain>
  )
}
