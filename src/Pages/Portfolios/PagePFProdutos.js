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
  ButtonLogo
  /*
  CarroselOpcoes,
  CarroselBar,
  CardBarLeft,
  CardBarEnd,
  ButtonBarBg
  */
} from '../components/Carousel'
import {
  LayoutNav,
  LayoutNavHeader,
  LayoutNavColCenter,
  LayoutNavColEnd,
  ButtonNavBar
} from '../components/Menus/Layout'
import produtos from '../../assets/image/produtos.svg'
import menu from '../../assets/image/menu.svg'
// import { NavBarProdutos } from '../components/Menus'

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

          <LayoutNav>
            <LayoutNavHeader>
              <LayoutNavColCenter>{<h1>ColCenter</h1>}</LayoutNavColCenter>
              <LayoutNavColEnd>
                <ButtonNavBar img={menu} title={'Menu de Filtros...'} />
              </LayoutNavColEnd>
            </LayoutNavHeader>
          </LayoutNav>

          {/*
          <CarroselMain>
            <CarroselOpcoes>
              <CarroselBar>
                <CardBarLeft>
                  <NavBarProdutos />
                </CardBarLeft>
                <CardBarEnd>
                  <ButtonBarBg />
                </CardBarEnd>
              </CarroselBar>
            </CarroselOpcoes>
          </CarroselMain>
 */}

          <DivisionPanel />
        </ContainerPanelTextFlex>
      </ContainerPanelText>
    </PanelMain>
  )
}
