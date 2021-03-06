import React, { useState, useCallback } from 'react'
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
import bordadobrc from '../../assets/image/bordadobrc.svg'
import laserbrc from '../../assets/image/laserbrc.svg'

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
import {
  ContentMenu,
  ButtonMenuDropdown
} from '../components/Dropdowmenu/stlyleDropMenu'
// import { DropMenu } from '../components/Dropdowmenu'

export default function PagePfProdutos() {
  const [menus, setMenus] = useState([
    { id: 'Designs', open: false },
    { id: 'Bordados', open: false },
    { id: 'Lasers', open: false }
  ])
  const [onoff, setOnOff] = useState(false)

  const toggleUpdate = id => {
    setMenus(list =>
      list.map(m => ({ ...m, open: id === m.id ? !m.open : false }))
    )
  }

  const handleMenu = () => {
    const off = !onoff
    setOnOff(off)
    if (!off) {
      handleCloseDatas()
    }
  }
  const handleCloseDatas = () => {
    setMenus(list => list.map(m => ({ ...m, open: false })))
  }

  const handleClick = useCallback(id => {
    return () => {
      toggleUpdate(id)
      console.log('dentro do Opção Menu : ', id)
    }
  }, [])

  const isOpen = id => {
    const found = menus.find(f => f.id === id)
    console.log(found)
    return !!(found && !!found.open)
  }

  const { push } = useHistory()

  console.log(menus)
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
                    {/* /** o conteudo do componente Dropmenu,js */}
                    {/* <DropMenu open={onoff} onClick={handleMenu} /> */}
                    <ContentMenu open={onoff}>
                      <nav>
                        <ul>
                          <li>
                            <ButtonMenuDropdown
                              title="Designs."
                              onClick={handleClick('Designs')}
                            >
                              Design.
                            </ButtonMenuDropdown>
                          </li>
                          <li>
                            <ButtonMenuDropdown
                              title="Bordados."
                              onClick={handleClick('Bordados')}
                            >
                              Bordado.
                            </ButtonMenuDropdown>
                          </li>
                          <li>
                            <ButtonMenuDropdown
                              title="Lasers."
                              onClick={handleClick('Lasers')}
                            >
                              Laser.
                            </ButtonMenuDropdown>
                          </li>
                        </ul>
                      </nav>
                    </ContentMenu>
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
                      open={isOpen('Designs')}
                    />
                    <ButtonBgBordadoProd
                      img={bordadobrc}
                      onClick={() => push('/portfolios/pagebordadoprod')}
                      title={'Bordados Produtos.'}
                      open={isOpen('Bordados')}
                    />
                    <ButtonBgLaserProd
                      img={laserbrc}
                      onClick={() => push('/portfolios/pagelaserprod')}
                      title={'Lasers Produtos.'}
                      open={isOpen('Lasers')}
                    />
                  </ToolsBarColEnd>
                </ToolsBarMainFlex>
              </ToolsBarMain>
            </LayoutMainFlex>
          </LayoutMain>
          <DivisionPanel />
          <LayoutMain>
            <LayoutMainFlex>
              <DataDesigns open={isOpen('Designs')} />
              <DataBordados open={isOpen('Bordados')} />
              <DataLasers open={isOpen('Lasers')} />
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
  open: PropTypes.bool,
  name: PropTypes.string,
  clickMenu: PropTypes.func,
  handleMenu: PropTypes.func,
  onoffBtDesigMenu: PropTypes.func,
  onoffBtBordadoMenu: PropTypes.func,
  onoffBtLaserMenu: PropTypes.func
}
PagePfProdutos.defaultProps = {
  open: null,
  name: ''
}
