import React from 'react'
import PropTypes from 'prop-types'
import {
  ContainerText,
  ContainerTextFlex,
  DivisionText
} from '../../stylePages'
import { PanelDuo, PanelLeft, PanelEnd } from '../Panel'
// import Title from '../Titles/Title'
import ToolsButton from '../Buttons/ToolsButton'
import ButtonBg from '../Buttons/ButtonBg'

export default function TitlePageButton({ title }) {
  return (
    <ContainerText>
      <ContainerTextFlex>
        <DivisionText />
        <PanelDuo>
          <PanelLeft>
            <h3>{title}</h3>
          </PanelLeft>
          <PanelEnd>
            <ToolsButton>
              <ButtonBg />
            </ToolsButton>
          </PanelEnd>
        </PanelDuo>
        <DivisionText />
      </ContainerTextFlex>
    </ContainerText>
  )
}
TitlePageButton.propTypes = {
  title: PropTypes.string.isRequired
}
