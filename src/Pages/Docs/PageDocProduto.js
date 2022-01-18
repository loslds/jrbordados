import React from 'react'
import { useHistory } from 'react-router-dom'
import { PanelEnd, PanelLeft, PanelMain, PanelTitle } from '../components/Panel'
import {
  ContainerPanelText,
  ContainerPanelTextFlex,
  DivisionPanel
} from '../components/Panel/stylePanel'
import { ContainerTitleBg, TitleBg } from '../../styles/styles'
import { ButtonBg } from '../components/Buttons'
import home from '../../assets/image/home.svg'

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
            <ButtonBg img={home} onClick={() => push('/about')} />
          </PanelEnd>
          <DivisionPanel />
          <ContainerPanelText>
            <ContainerTitleBg>
              <TitleBg>&nbsp;Produtos&nbsp;</TitleBg>
            </ContainerTitleBg>
          </ContainerPanelText>
          <h2>MUDAR TEXTO</h2>
          <p>
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
