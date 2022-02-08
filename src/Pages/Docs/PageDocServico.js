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

export default function PageDocServico() {
  const { push } = useHistory()
  return (
    <PanelMain>
      <ContainerPanelText>
        <ContainerPanelTextFlex>
          <DivisionPanel />
          <PanelLeft>
            <PanelTitle title="Documentação opção Serviços." />
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
                <TitleBg>&nbsp;Serviços&nbsp;</TitleBg>
              </ContainerTitleBg>
            </ContainerPanelText>
          </ContainerPanelMainCard>
          <ContainerPanelText>
            {' '}
            <h3>Operacional</h3>
          </ContainerPanelText>
          <p>
            {'   '}
            &emsp;&emsp;Trabalhamos para melhor servir os nossos Cliêntes,
            adotamos os métodos de Atendimento individual.
          </p>
          <p>
            {'   '}
            &emsp;&emsp;Nosso atendimento poderá ser através de Telefones e Rede
            Social como tambem por Aplicativo Celular.
          </p>
          <p>
            {'   '}
            &emsp;&emsp;A perssonaficação independênte e sigilosa ou da forma
            liberal.
          </p>
          <p>
            {'   '}
            &emsp;&emsp;Os Cliêntes podem contar com os Serviços de Designs
            próprios e acompanhar o desenvolvimento.
          </p>
          <p>
            {'   '}
            &emsp;&emsp;Podendo trazer as imagens, modêlos ou idéias própria
            para desenvolvimento.
          </p>
          <ContainerPanelText>
            {' '}
            <h3>Execução</h3>
          </ContainerPanelText>
          <p>
            {' '}
            &emsp;&emsp;Contamos com Feedback para resolvermos alguns
            questionamentos sobre os nossos Serviços.
          </p>
          <p>
            {'   '}
            &emsp;&emsp;O Cliênte tem a liberdade de trazer os materiais
            necessários ou utilizar a disponibilidade de nossa empresa para
            conseguir-los.
          </p>
          <p>
            {'   '}
            &emsp;&emsp;Todos serviço será estabelecido conforme ordem emetida
            diante do Cliênte, após seu concentimento pelo presencial e ou pelo
            indicado.
            <br />
          </p>
          <DivisionPanel />
          <p>
            {'    '}
            &emsp;&emsp; Conheça nosso Serviços....
            <br />
          </p>
          <ContainerPanelMainCard>
            <ContainerPanelText>
              <ContainerTitleBg>
                <TitleBg>
                  &nbsp;
                  <Link to="/prtifolios/pagepfserviços">
                    Portfólio Serviços.
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
