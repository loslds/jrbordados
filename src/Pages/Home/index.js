import React from 'react'
import {
  ContainerMain,
  ContainerFlex,
  ContainerTexto,
  ContainerCard,
  DivisionTexto
} from '../stylePages'
import TitlePage from '../layouts/LayoutTitlePage'
import { ContainerSys, ContainerImgSys } from './styleHome'
// import Login from '../../Pages/components/Login'
import logosys from '../../assets/image/logosys.png'

export const PageHome = () => {
  return (
    <ContainerMain>
      <ContainerFlex>
        <ContainerCard>
          <ContainerTexto>
            <DivisionTexto />
            <TitlePage title={'Bem Vindo'} />
            <DivisionTexto />
          </ContainerTexto>
          <ContainerTexto>
            {/* <Login /> */}
            <ContainerSys>
              <ContainerImgSys img={logosys} />
            </ContainerSys>
            <p>
              {' '}
              &emsp;&emsp;O Systema esta adequado a tratar as Informações com
              eficiência e fidelidade de acôrdo com o exercício do Usuário.
            </p>
            <p>
              {' '}
              &emsp;&emsp;Estaremos trabalhando com apenas 3 (trez) Opções no
              Menu Principal, os quais estão delegados as Rotinas dentro de
              opções que determinarão o desenvolvimento do sistema integrado.
            </p>
            <p>
              {' '}
              &emsp;&emsp;Todas evoluem de acordo com seus próprios princípios
              de requerer, guardar e publicar as informações dentro destes para
              lhes ser útil o necessário.
            </p>
          </ContainerTexto>
        </ContainerCard>
      </ContainerFlex>
    </ContainerMain>
  )
}
