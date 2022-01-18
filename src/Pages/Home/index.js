import React from 'react'
import { useHistory } from 'react-router-dom'
import { PanelMain, PanelLeft, PanelEnd, PanelTitle } from '../components/Panel'
import {
  ContainerPanelText,
  ContainerPanelTextFlex,
  DivisionPanel
} from '../components/Panel/stylePanel'
import { ButtonBg } from '../components/Buttons'
import login from '../../assets/image/key-lock.svg'
import { ContainerSys, ContainerImgSys } from './styleHome'
import logosys from '../../assets/image/logosys.png'

export const PageHome = () => {
  const { push } = useHistory()
  return (
    <PanelMain>
      <ContainerPanelText>
        <ContainerPanelTextFlex>
          <DivisionPanel />
          <PanelLeft>
            <PanelTitle title="Bem Vindo ao Sistema." />
          </PanelLeft>
          <PanelEnd>
            <ButtonBg img={login} onClick={() => push('/login')} />
          </PanelEnd>
          <DivisionPanel />
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
            &emsp;&emsp;Estaremos trabalhando com apenas 3 (trez) Opções no Menu
            Principal, os quais estão delegados as Rotinas dentro de opções que
            determinarão o desenvolvimento do sistema integrado.
          </p>
          <p>
            {' '}
            &emsp;&emsp;Todas evoluem de acordo com seus próprios princípios de
            requerer, guardar e publicar as informações dentro destes para lhes
            ser útil o necessário.
          </p>
        </ContainerPanelTextFlex>
      </ContainerPanelText>
    </PanelMain>
  )
}

/**
//   ContainerMain,
//   ContainerFlex,
//   ContainerText,
//   ContainerCard
// } from '../stylePages'
// import TitlePage from '../components/Titles/TitlePage'
// import { ContainerSys, ContainerImgSys } from './styleHome'
// import Login from '../../Pages/components/Login'
// import logosys from '../../assets/image/logosys.png'

    <ContainerMain>
      <ContainerFlex>
        <ContainerCard>
          <TitlePage title={'tudo bem'} />
          <ContainerText>
            <TitlePage title={'Bem Vindo'} />
          </ContainerText>
          <ContainerText>
             <Login />

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
          </ContainerText>
        </ContainerCard>
      </ContainerFlex>
    </ContainerMain>
 */
