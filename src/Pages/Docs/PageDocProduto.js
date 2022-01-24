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
import previous from '../../assets/image/previous.svg'

export default function PageDocProduto() {
  const { push } = useHistory()
  return (
    <PanelMain>
      <ContainerPanelText>
        <ContainerPanelTextFlex>
          <DivisionPanel />
          <PanelLeft>
            <PanelTitle title="Documentação opção Produtos." />
          </PanelLeft>
          <PanelEnd>
            <ButtonBg img={home} onClick={() => push('/')} title={'Home.'} />
            <ButtonBg
              img={previous}
              onClick={() => push('/about')}
              title={'About.'}
            />
          </PanelEnd>
          <DivisionPanel />
          <ContainerPanelText>
            <ContainerTitleBg>
              <TitleBg>&nbsp;Produtos&nbsp;</TitleBg>
            </ContainerTitleBg>
          </ContainerPanelText>
          <h3>Operacional</h3>
          <p>
            &emsp;&emsp;Trabalhamos para melhor servir os nossos Cliêntes,
            adotamos da perssonaficação independênte e de sigilo extremo, como
            tambem a forma liberal.
          </p>
          <p>
            &emsp;&emsp;Nossos Cliêntes podem contar com os Serviços de Designs
            próprios e acompanhar o desenvolvimento. Como tambem podem trazer
            que será elaborado dentro dos padrões específicos, ou contar com
            nossa ajuda para melhorar.
          </p>
          <h3>Execução</h3>
          <p>
            &emsp;&emsp;Todo contato poderá ser efetuado atravéz do WhatszApp,
            Estaremos atendendo com a possibilidade de operar com diferêntes
            plataformas.
          </p>
          <p>
            &emsp;&emsp;Todos serviço será estabelecido conforme ordem emetida
            diante do Cliênte, após seu concentimento pelo presencial e ou pelo
            indicado.
          </p>
          <p>
            &emsp;&emsp;Podemos fornecer material específico ou o próprio
            Cliênte nos entrega para a elaboração do serviço.
          </p>

          <p>&emsp;&emsp; Conheça nosso Produtos....</p>
          <ContainerTitleBg>
            <TitleBg>
              &nbsp;<Link to="/docs/portfolio">Portfólio Produtos.</Link>&nbsp;
            </TitleBg>
          </ContainerTitleBg>
          <DivisionPanel />
        </ContainerPanelTextFlex>
      </ContainerPanelText>
    </PanelMain>
  )
}

/**
 *          <p>
            &emsp;&emsp;A Opção Acesso, é a porta de entrada para que o usuário
            tenha a liberdade de poder ver, executar e se informar com os dados
            que o sistema tem em seus bancos de Informações.
          </p>
          <p>
            &emsp;&emsp;A Sistema esta adequado a tratar as Informações com
            eficiência e fidelidade de acôrdo com o exercício do Usuário.
          </p>
          <p>
            &emsp;&emsp;Estaremos trabalhando com a possibilidade de operar com
            diferêntes acessos para cada empresas no mesmo Sistema.
          </p>
          <p>
            &emsp;&emsp;Todas evoluem de acordo com seus próprios princípios em
            requerer o acesso atravéz de uma ID e Password, totalmente dentro do
            gerenciamento com filtros para não debilitar as demais empresas, de
            guardar e publicar as informações.
          </p>
          <p>
            &emsp;&emsp;Todas as rotinas e processamento tem o perfil de cada
            empresa restrita.
          </p>

 */
