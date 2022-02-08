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
            <ButtonBg
              img={previous}
              onClick={() => push('/about')}
              title={'About.'}
            />
            <ButtonBg img={home} onClick={() => push('/')} />
          </PanelEnd>
          <DivisionPanel />
          <ContainerPanelMainCard>
            <ContainerPanelText>
              <ContainerTitleBg>
                <TitleBg>&nbsp;Produtos&nbsp;</TitleBg>
              </ContainerTitleBg>
            </ContainerPanelText>
          </ContainerPanelMainCard>
          {/**   ate aqui */}
          <ContainerPanelText>
            {' '}
            <h3>Operacional</h3>
          </ContainerPanelText>
          <p>
            {' '}
            &emsp;&emsp;Trabalhamos para melhor servir os nossos Cliêntes,
            adotamos da perssonaficação independênte e de sigilo extremo, como
            tambem a forma liberal.
          </p>
          <p>
            {' '}
            &emsp;&emsp;Nossos Cliêntes podem contar com os Serviços de Designs
            próprios e acompanhar o desenvolvimento.
          </p>
          <p>
            {' '}
            &emsp;&emsp;Como tambem podem trazer imagens: TIF, TIFF, JPEG, JPG,
            GIF, PDF, EPS, SVG ou CDR. Ou contar com nossa ajuda para melhor
            lhes atender.
          </p>
          <ContainerPanelText>
            {' '}
            <h3>Execução</h3>
          </ContainerPanelText>
          <p>
            {' '}
            &emsp;&emsp;Todo contato poderá ser efetuado atravéz do WhatszApp.{' '}
            Estaremos atendendo com a possibilidade de operar com diferêntes
            plataformas.
          </p>
          <p>
            {' '}
            &emsp;&emsp;Todos serviço será estabelecido conforme ordem emetida
            diante do Cliênte, após seu concentimento pelo presencial e ou pelo
            indicado.
          </p>
          <p>
            {'    '}
            &emsp;&emsp;Podemos fornecer material específico ou o próprio
            Cliênte nos entrega para a elaboração do serviço.
            <br />
          </p>

          <DivisionPanel />
          <p>
            {'    '}
            &emsp;&emsp; Conheça nosso Produtos....
            <br />
          </p>
          <ContainerPanelMainCard>
            <ContainerPanelText>
              <ContainerTitleBg>
                <TitleBg>
                  &nbsp;
                  <Link to="/portfolios/pagepfprodutos">
                    Portfólio Produtos.
                  </Link>
                  &nbsp;
                </TitleBg>
              </ContainerTitleBg>
            </ContainerPanelText>
          </ContainerPanelMainCard>
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
