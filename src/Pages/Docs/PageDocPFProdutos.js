import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { PanelEnd, PanelLeft, PanelMain, PanelTitle } from '../components/Panel'
import {
  ContainerPanelText,
  ContainerPanelTextFlex,
  ContainerPanelMainCard,
  DivisionPanel
} from '../components/Panel/stylePanel'
import { ContainerTitleBg, TitleBg } from '../../styles/styles'
import { ButtonBg } from '../components/Buttons'
import previous from '../../assets/image/previous.svg'
import home from '../../assets/image/home.svg'

export default function PageDocPFProdutos() {
  const { push } = useHistory()
  return (
    <PanelMain>
      <ContainerPanelText>
        <ContainerPanelTextFlex>
          <DivisionPanel />
          <PanelLeft>
            <PanelTitle title="Documentação do Portfólios de Produtos." />
          </PanelLeft>
          <PanelEnd>
            <ButtonBg
              img={previous}
              onClick={() => push('/docprodutos')}
              title={'Produtos.'}
            />
            <ButtonBg onClick={() => push('/about')} />
            <ButtonBg img={home} onClick={() => push('/')} />
          </PanelEnd>
          <DivisionPanel />
          <ContainerPanelText>
            <p>
              {'  '}
              &emsp;&emsp;Todos os nossos trabalhos mostrados aqui, são
              liberados pelos nossos Cliêntes.
            </p>
            <p>
              {'  '}
              &emsp;&emsp;Agora podemos lhes mostrar alguns exemplos de nossos
              Produtos.
            </p>
          </ContainerPanelText>
          <ContainerPanelMainCard>
            <ContainerPanelText>
              <ContainerTitleBg>
                <TitleBg>
                  &nbsp;<Link to="#">Bordados.</Link>&nbsp;
                </TitleBg>
                <TitleBg>
                  <Link to="#">&nbsp;Corte à Laser.</Link>&nbsp;
                </TitleBg>
                <TitleBg>
                  <Link to="#">&nbsp;Gravação à Laser.</Link>&nbsp;
                </TitleBg>
              </ContainerTitleBg>
            </ContainerPanelText>
          </ContainerPanelMainCard>
          <DivisionPanel />
          <p>
            &emsp;&emsp;Para saber mais sobre cada item das opções, basta clicar
            nos links acima.
            <br />
          </p>
          <DivisionPanel />
        </ContainerPanelTextFlex>
      </ContainerPanelText>
    </PanelMain>
  )
}
