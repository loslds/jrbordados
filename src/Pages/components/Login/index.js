import React from 'react'
import {
  ContainerLoginCard,
  ContainerLoginFlex,
  ContainerImageLogin,
  ButtonsLoginImageBg,
  ContainerFormLogin,
  ContainerFormFlex
} from './stylesLogin'
import { TextObsActacion } from '../../../styles/styles'
import logoff from '../../../assets/image/key-lock.png'
import FormLogin from '../Forms/FormLogin'

export default function Login() {
  return (
    <ContainerLoginCard>
      <ContainerLoginFlex>
        <TextObsActacion>
          <p>&emsp;&emsp; * Systema em operação de Acesso.</p>
        </TextObsActacion>
        <ContainerImageLogin>
          <ButtonsLoginImageBg img={logoff} />
        </ContainerImageLogin>
        <ContainerFormLogin>
          <ContainerFormFlex>
            <FormLogin />
          </ContainerFormFlex>
        </ContainerFormLogin>
      </ContainerLoginFlex>
    </ContainerLoginCard>
  )
}
