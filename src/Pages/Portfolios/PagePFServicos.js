import React from 'react'
import { useHistory } from 'react-router-dom'
import { PanelMain, PanelLeft, PanelEnd, PanelTitle } from '../components/Panel'
import {
  ContainerPanelText,
  ContainerPanelTextFlex,
  DivisionPanel
} from '../components/Panel/stylePanel'
import { ButtonBg } from '../components/Buttons'
import previous from '../../assets/image/previous.svg'
import home from '../../assets/image/home.svg'
import {
  CarroselMain,
  CarroselLogo,
  ButtonLogo,
  CarroselOpcoes,
  CarroselBar,
  CardBarLeft,
  CardBarEnd,
  ButtonBarBg
} from '../components/Carousel'
import servicos from '../../assets/image/servicoslogo.svg'

export default function PagePfServicos() {
  const { push } = useHistory()
  return (
    <PanelMain>
      <ContainerPanelText>
        <ContainerPanelTextFlex>
          <DivisionPanel />
          <PanelLeft>
            <PanelTitle title="PortFolios Serviços." />
          </PanelLeft>
          <PanelEnd>
            <ButtonBg
              img={previous}
              onClick={() => push('/portfolios')}
              title={'Portfólio'}
            />
            <ButtonBg img={home} onClick={() => push('/')} title={'Home'} />
          </PanelEnd>
          <DivisionPanel />
          {<label>Show dos Serviços Portifolio.</label>}
          <DivisionPanel />
          <CarroselMain>
            <CarroselLogo>
              <ButtonLogo img={servicos} />
            </CarroselLogo>
          </CarroselMain>
          <CarroselMain>
            <CarroselOpcoes>
              <CarroselBar>
                <CardBarLeft>{<h5>bar filtro serviços</h5>}</CardBarLeft>
                <CardBarEnd>
                  <ButtonBarBg />
                </CardBarEnd>
              </CarroselBar>
            </CarroselOpcoes>
          </CarroselMain>
          <DivisionPanel />
        </ContainerPanelTextFlex>
      </ContainerPanelText>
    </PanelMain>
  )
}
