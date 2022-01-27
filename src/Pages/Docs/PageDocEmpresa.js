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

import previous from '../../assets/image/previous.svg'
import home from '../../assets/image/home.svg'
import { ContainerCenter, ContainerImgMatriz } from '../stylePages'
import matrizfilial from '../../assets/image/matrizfilial.svg'

export default function PageDocEmpresa() {
  const { push } = useHistory()
  return (
    <PanelMain>
      <ContainerPanelText>
        <ContainerPanelTextFlex>
          <DivisionPanel />
          <PanelLeft>
            <PanelTitle title="Documentação opção Empresa." />
          </PanelLeft>
          <PanelEnd>
            <ButtonBg
              img={previous}
              onClick={() => push('/about')}
              title={'About.'}
            />
            <ButtonBg img={home} onClick={() => push('/about')} />
          </PanelEnd>
          <DivisionPanel />
          <ContainerPanelText>
            <ContainerTitleBg>
              <TitleBg>&nbsp;Empresas&nbsp;</TitleBg>
            </ContainerTitleBg>
          </ContainerPanelText>

          <p>
            &emsp;&emsp;A Sistema esta adequado a tratar as Informações com
            eficiência e fidelidade de acôrdo com o exercício do Usuário.
          </p>
          <p>
            &emsp;&emsp;Estaremos trabalhando com a possibilidade de operar com
            diferêntes empresas no mesmo Sistema.
          </p>
          <p>
            &emsp;&emsp;Todas evoluem de acordo com seus próprios princípios em
            requerer, guardar e publicar as informações.
          </p>
          <p>
            &emsp;&emsp;Todas as rotinas e processamento tem o mesmo perfil,
            somente usa filtro para indexar-las.
          </p>
          <p>
            &emsp;&emsp;As demais Empresa estarão disponiveis através de um novo
            cadastro para a mesma como sendo uma Filial.
          </p>
          <p>
            &emsp;&emsp;O controle das Filiais são independentes poderão se
            tratar com liberdade de escolhas e preços das manufaturas
            operacionais.
          </p>
          <ContainerCenter>
            <ContainerImgMatriz>
              <img src={matrizfilial} width={'300px'} height={'230px'} />
            </ContainerImgMatriz>
          </ContainerCenter>
          <DivisionPanel />
        </ContainerPanelTextFlex>
      </ContainerPanelText>
    </PanelMain>
  )
}
