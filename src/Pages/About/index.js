import React from 'react'
import {
  ContainerMain,
  ContainerFlex,
  ContainerCard,
  ContainerText,
  DivisionText
} from '../stylePages'
import { TitlePageButton } from '../components/Titles'
import { ContainerTitleBg, TitleBg } from '../../styles/styles'

export const PageAbout = () => {
  // const { push } = useHistory()
  return (
    <ContainerMain>
      <ContainerFlex>
        <ContainerCard>
          <TitlePageButton title={'Documentação sobre o Sistema.'} />
          <ContainerText>
            <p>
              &emsp;&emsp;O Systema esta adequado a tratar as Informações com
              eficiência e fidelidade de acôrdo com o exercício do Usuário.
            </p>
            <p>
              &emsp;&emsp;Estaremos trabalhando com apenas 3 opções no menu
              principal, os quais estão delegados as Rotinas dentro de opções
              que determinarão o desenvolvimento do sistema integrado.
            </p>
            <p>
              &emsp;&emsp;Todas evoluem de acordo com seus próprios princípios
              de requerer, guardar e publicar as informações dentro destes para
              lhes ser útil o necessário.
            </p>
            <p>
              &emsp;&emsp;Em nosso MENU PRINCIPAL, notamos acima, as seguintes
              opções: <br />
            </p>
            <ContainerTitleBg>
              <TitleBg>&nbsp;Empresa&nbsp;</TitleBg>
              <TitleBg>&nbsp;Produtos&nbsp;</TitleBg>
              <TitleBg>&nbsp;Serviços&nbsp;</TitleBg>
            </ContainerTitleBg>
            <DivisionText />
          </ContainerText>
        </ContainerCard>
      </ContainerFlex>
    </ContainerMain>
  )
}
