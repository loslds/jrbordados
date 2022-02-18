import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { PanelMain, PanelLeft, PanelEnd } from '../components/Panel'
import {
  ContainerPanelText,
  ContainerPanelTextFlex,
  DivisionPanel
} from '../components/Panel/stylePanel'
import { ButtonBg, ButtonBgDesign } from '../components/Buttons'
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
  ToolsBarColEnd,
  DataDesigns,
  DataBordados,
  DataLasers
} from '../components/Data'

import { ContainerCenterImgLogo } from '../stylePages'
import { DropMenu } from '../components/Dropdowmenu'

export default function PagePfProdutos(divnm) {
  const [onoff, setOnOff] = useState(false)
  const handleMenu = () => {
    setOnOff(off => !off)
    handleBtDesigMenu()
  }
  const [btdesig, setBtDesig] = useState(false)
  const handleBtDesigMenu = () => {
    setBtDesig(on => !on)
  }

  const [divdesig, setDivDesig] = useState(false)
  const [divborda, setDivBorda] = useState(false)
  const [divlaser, setDivLaser] = useState(false)
  const handleClickMenu = useCallback(e => {
    const nm = e && e.target ? e.target.name || null : ''

    if (nm === 'Designs') {
      setDivDesig(true)
      setDivBorda(false)
      setDivLaser(false)
    } else if (nm === 'Bordados') {
      setDivDesig(false)
      setDivBorda(true)
      setDivLaser(false)
    } else if (nm === 'Lasers') {
      setDivDesig(false)
      setDivBorda(false)
      setDivLaser(true)
    } else {
      setDivDesig(false)
      setDivBorda(false)
      setDivLaser(false)
    }
    console.log('nm : ', nm)
    console.log('desig : ', divdesig ? 'true' : 'false')
    console.log('borda : ', divborda ? 'true' : 'false')
    console.log('laser : ', divlaser ? 'true' : 'false')
  }, [])

  console.log('divnm : ', divnm)
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
                    <DropMenu open={onoff} onClick={handleClickMenu} />
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
                    <ButtonBgDesign
                      img={designbrc}
                      onClick={() => push('/portfolios/pagedesignprod')}
                      title={'Dedigns'}
                      open={btdesig}
                    />
                  </ToolsBarColEnd>
                </ToolsBarMainFlex>
              </ToolsBarMain>
            </LayoutMainFlex>
          </LayoutMain>
          <DivisionPanel />
          <LayoutMain>
            <LayoutMainFlex>
              {divdesig ? <DataDesigns /> : null}
              {divborda ? <DataBordados /> : null}
              {divlaser ? <DataLasers /> : null}
            </LayoutMainFlex>
          </LayoutMain>
        </ContainerPanelTextFlex>
      </ContainerPanelText>
    </PanelMain>
  )
}

PagePfProdutos.propTypes = {
  divnm: PropTypes.string
}
PagePfProdutos.defaultProps = {
  divnm: ''
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
