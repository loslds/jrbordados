import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { PanelMain, PanelLeft, PanelEnd } from '../components/Panel'
import {
  ContainerPanelText,
  ContainerPanelTextFlex,
  DivisionPanel
} from '../components/Panel/stylePanel'
import { ButtonBg } from '../components/Buttons'
import retornar from '../../assets/image/previous.svg'
import home from '../../assets/image/home.svg'
import produtoslogo from '../../assets/image/produtoslogo.svg'
import menubrc from '../../assets/image/menubrc.svg'
import limparbrc from '../../assets/image/limparbrc.svg'
import {
  LayoutMain,
  LayoutMainFlex,
  ToolsBarMain,
  ToolsBarMainFlex,
  ToolsBarColCenter,
  ToolsBarColEnd
} from '../components/Data'
import { ContainerCenterImgLogo } from '../stylePages'

export default function PagePfProdutos() {
  const { push } = useHistory()
  return (
    <PanelMain>
      <ContainerPanelText>
        <ContainerPanelTextFlex>
          <DivisionPanel />
          <PanelLeft>
            <ContainerCenterImgLogo img={produtoslogo} />
          </PanelLeft>
          <PanelEnd>
            <ButtonBg
              img={retornar}
              onClick={() => push('/portfolios')}
              title={'Retornar...'}
            />
            <ButtonBg img={home} onClick={() => push('/')} title={'Home'} />
          </PanelEnd>
          <DivisionPanel />
          {<label>Show dos Produtos Portifolio.</label>}
          <DivisionPanel />
          <LayoutMain>
            <LayoutMainFlex>
              <ToolsBarMain>
                <ToolsBarMainFlex>
                  <ToolsBarColCenter color={'#ffffff'}>
                    <h4>Data/ ToolBar/ ToolsBar ColCenter</h4>
                  </ToolsBarColCenter>
                  <ToolsBarColEnd>
                    <ButtonBg
                      img={menubrc}
                      onClick={() => {}}
                      title={'Menu On/Off.'}
                    />
                    <ButtonBg
                      img={limparbrc}
                      onClick={() => {}}
                      title={'Limpar Filtros...'}
                    />
                  </ToolsBarColEnd>
                </ToolsBarMainFlex>
              </ToolsBarMain>
              <h3>Data/Layout/LayoutMainFlex</h3>
            </LayoutMainFlex>

            <h3>Data/Layout/LayoutMain</h3>
          </LayoutMain>
          <DivisionPanel />
        </ContainerPanelTextFlex>
      </ContainerPanelText>
    </PanelMain>
  )
}

PagePfProdutos.propTypes = {
  color: PropTypes.string
}
// PagePfProdutos.defaultProps = {
//   color: 'transparent'
// }

/**
 *
 *
          <CarroselMain>
            <CarroselLogo>
              <ButtonLogo img={produtos} />
            </CarroselLogo>
          </CarroselMain>

          <LayoutNav>
            <LayoutNavHeader>
              <LayoutNavColCenter>
                {<h1>ColCenter</h1>}
                <LayoutNavColCenterFlex>
                  {<h1>ColCenter</h1>}
                </LayoutNavColCenterFlex>
              </LayoutNavColCenter>

              <LayoutNavColEnd>
                <ButtonNavBar img={menu} title={'Menu de Filtros...'} />
                <ButtonNavBar />
                <ButtonNavBar />
              </LayoutNavColEnd>
            </LayoutNavHeader>
          </LayoutNav>

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
 */
