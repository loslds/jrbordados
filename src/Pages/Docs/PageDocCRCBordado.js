import React from 'react'
import { useHistory } from 'react-router-dom'
import { PanelEnd, PanelLeft, PanelMain, PanelTitle } from '../components/Panel'
import {
  ContainerPanelText,
  ContainerPanelTextFlex,
  DivisionPanel
} from '../components/Panel/stylePanel'
import { ButtonBg } from '../components/Buttons'
import previous from '../../assets/image/previous.svg'
import produtos from '../../assets/image/produtos.svg'
import home from '../../assets/image/home.svg'

export default function PageDocCRCBordado() {
  const { push } = useHistory()
  return (
    <PanelMain>
      <ContainerPanelText>
        <ContainerPanelTextFlex>
          <DivisionPanel />
          <PanelLeft>
            <PanelTitle title="Documentação Exemplo Bordado." />
          </PanelLeft>
          <PanelEnd>
            <ButtonBg
              img={previous}
              onClick={() => push('/docs/docpfproduto')}
              title={'Portfolio de Produto.'}
            />
            <ButtonBg
              img={produtos}
              onClick={() => push('/docs/docproduto')}
              title={'Documento Sobre Produto.'}
            />
            <ButtonBg img={home} onClick={() => push('/')} title={'Home.'} />
          </PanelEnd>
          <DivisionPanel />
          <ContainerPanelText>
            <p>
              {'  '}
              &emsp;&emsp;Aqui temoa alguns dos exemplos de nossoa trabalhos
              eexecutados em Mordados os nossos trabalhos de Bordados. Todos os
              detalhes comforme solicitados pelos nossos Cliêntes.
            </p>
          </ContainerPanelText>
          <DivisionPanel />
          <p>
            {'    '}
            &emsp;&emsp;Podendo serem visualizados separadamente com apenas um
            click sobre o mesmo.
            <br />
          </p>
          <DivisionPanel />
        </ContainerPanelTextFlex>
      </ContainerPanelText>
    </PanelMain>
  )
}
