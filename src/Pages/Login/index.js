import React from 'react'
import {
  ContainerMain,
  ContainerFlex,
  ContainerCard,
  ContainerTexto
} from '../stylePages'
import Tarjeta from '../components/Tarjeta'
import Login from '../components/Login'

export const PageLogin = () => {
  // const { push } = useHistory()
  return (
    <ContainerMain>
      <ContainerFlex>
        <ContainerCard>
          <ContainerTexto>
            <Tarjeta title={'Acesso à segurança do Sistema.'} />
            <Login />
          </ContainerTexto>
        </ContainerCard>
      </ContainerFlex>
    </ContainerMain>
  )
}
