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
import { ContainerCardFilters } from '../components/Carousel/stylesCarrosel'
import produtos from '../../assets/image/produtoslogo.svg'

export default function PagePfProdutos() {
  const { push } = useHistory()
  return (
    <PanelMain>
      <ContainerPanelText>
        <ContainerPanelTextFlex>
          <DivisionPanel />
          <PanelLeft>
            <PanelTitle title="PortFolios Produtos." />
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
          {<label>Show dos Produtos Portifolio.</label>}
          <DivisionPanel />
          <CarroselMain>
            <CarroselLogo>
              <ButtonLogo img={produtos} />
            </CarroselLogo>
          </CarroselMain>

          <CarroselMain>
            <CarroselOpcoes>
              <CarroselBar>
                <CardBarLeft>
                  <ContainerCardFilters>
                    <div>{<h5>bar filtro serviços</h5>}</div>
                    <div>{<h5>bar filtro serviços</h5>}</div>
                  </ContainerCardFilters>
                </CardBarLeft>
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
