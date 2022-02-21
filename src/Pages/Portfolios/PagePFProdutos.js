import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { PanelMain, PanelLeft, PanelEnd } from '../components/Panel'
import {
  ContainerPanelText,
  ContainerPanelTextFlex,
  DivisionPanel
} from '../components/Panel/stylePanel'
import {
  ButtonBg,
  ButtonBgDesignProd,
  ButtonBgBordadoProd,
  ButtonBgLaserProd
} from '../components/Buttons'
import retornar from '../../assets/image/previous.svg'
import home from '../../assets/image/home.svg'
import produtoslogo from '../../assets/image/produtoslogo.svg'
import menubrc from '../../assets/image/menubrc.svg'
import limparbrc from '../../assets/image/limparbrc.svg'
import designbrc from '../../assets/image/designbrc.svg'
import {
  LayoutMain,
  LayoutMainFlex,
  ToolsBarMain,
  ToolsBarMainFlex,
  ToolsBarColCenter,
  ToolsBarColEnd
  // ,
  // DataDesigns,
  // DataBordados,
  // DataLasers
} from '../components/Data'
import { ContainerCenterImgLogo } from '../stylePages'
import { DropMenu } from '../components/Dropdowmenu'

export default function PagePfProdutos(divprd) {
  const [onoff, setOnOff] = useState(false)

  const handleMenu = () => {
    setOnOff(off => !off)
    openBtDesigMenu()
    openBtBordadoMenu()
    openBtLaserMenu()
  }
  const [btdesig, setBtDesig] = useState(false)

  const openBtDesigMenu = () => {
    setBtDesig(on => !on)
  }

  const [btborda, setBtBorda] = useState(false)

  const openBtBordadoMenu = () => {
    setBtBorda(on => !on)
  }
  const [btlaser, setBtLaser] = useState(false)

  const openBtLaserMenu = () => {
    setBtLaser(on => !on)
  }

  console.log('divprd : ', divprd)

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
                  <ToolsBarColCenter>
                    <DropMenu open={onoff} onClick={handleMenu} />
                  </ToolsBarColCenter>
                  <ToolsBarColEnd>
                    <ButtonBg
                      img={menubrc}
                      onClick={handleMenu}
                      title={'Menu On/Off.'}
                    />
                    <ButtonBg
                      img={limparbrc}
                      onClick={() => {}}
                      title={'Limpar Filtros...'}
                    />
                    <ButtonBgDesignProd
                      img={designbrc}
                      onClick={() => push('/portfolios/pagedesignprod')}
                      title={'Dedigns Produtos.'}
                      open={btdesig}
                    />
                    <ButtonBgBordadoProd
                      // img={designbrc}
                      onClick={() => push('/portfolios/pagebordadoprod')}
                      title={'Bordados Produtos.'}
                      open={btborda}
                    />
                    <ButtonBgLaserProd
                      // img={designbrc}
                      onClick={() => push('/portfolios/pagelaserprod')}
                      title={'Lasers Produtos.'}
                      open={btlaser}
                    />
                  </ToolsBarColEnd>
                </ToolsBarMainFlex>
              </ToolsBarMain>
            </LayoutMainFlex>
          </LayoutMain>
          <DivisionPanel />
          <LayoutMain>
            <LayoutMainFlex>
              <h3>Abrir aqui a opção do menu</h3>
              {/* {divdesig ? <DataDesigns /> : null}
              {divborda ? <DataBordados /> : null}
              {divlaser ? <DataLasers /> : null} */}
            </LayoutMainFlex>
          </LayoutMain>
        </ContainerPanelTextFlex>
      </ContainerPanelText>
    </PanelMain>
  )
}

PagePfProdutos.propTypes = {
  divprd: PropTypes.string
}
PagePfProdutos.defaultProps = {
  divprd: 'default'
}

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
