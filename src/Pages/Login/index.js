import React from 'react'
// import { useHistory } from 'react-router-dom'
import {
  ContainerMain,
  ContainerFlex,
  ContainerCard,
  ContainerText
} from '../stylePages'
import { TitlePageButton } from '../components/Titles'
// import { ButtonBg } from '../components/Buttons/ButtonBg'
// import home from '../../../assets/image/home.png'
// import Login from '../components/Login'

export const PageLogin = () => {
  // const { push } = useHistory()
  return (
    <ContainerMain>
      <ContainerFlex>
        <ContainerCard>
          <ContainerText>
            <TitlePageButton>
            </TitlePageButton> tit={'Acesso à segurança do Sistema.'} />
          </ContainerText>
        </ContainerCard>
      </ContainerFlex>
    </ContainerMain>
  )
}

// <ButtonBg img={home} onClick={() => push('/')} />
// <Login />
