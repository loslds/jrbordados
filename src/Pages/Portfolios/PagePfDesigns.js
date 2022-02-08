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

import designs from '../../assets/image/designs.svg'
import { CarroselMain, CarroselLogo, ButtonLogo } from '../components/Carousel'

export default function PagePfDesigns() {
  const { push } = useHistory()
  return (
    <PanelMain>
      <ContainerPanelText>
        <ContainerPanelTextFlex>
          <DivisionPanel />
          <PanelLeft>
            <PanelTitle title="PortFolios Design`s." />
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
          <CarroselMain>
            <CarroselLogo>
              <ButtonLogo img={designs} />
            </CarroselLogo>
          </CarroselMain>

          <DivisionPanel />
        </ContainerPanelTextFlex>
      </ContainerPanelText>
    </PanelMain>
  )
}
