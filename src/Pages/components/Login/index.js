import React from 'react'
import {
  ContainerLoginCard,
  ContainerLoginFlex,
  ContainerImagemLogin,
  ButtonsLoginImageBg,
  ContainerFormLogin,
  ContainerFormFlex
} from './stylesLogin'
import { TextoObsActacion } from '../../../styles/styles'
import logoff from '../../../assets/image/key-lock.png'
import FormLogin from '../Forms/FormLogin'

export default function Login() {
  return (
    <ContainerLoginCard>
      <ContainerLoginFlex>
        <TextoObsActacion>
          <p>
            &emsp;&emsp; * Systema em operação de Acesso. Informações serão
            pesquisadas em nossoa bancos de Dados ao enviar.
          </p>
        </TextoObsActacion>
        <ContainerImagemLogin>
          <ButtonsLoginImageBg img={logoff} />
        </ContainerImagemLogin>
        <ContainerFormLogin>
          <ContainerFormFlex>
            <FormLogin />
          </ContainerFormFlex>
        </ContainerFormLogin>
      </ContainerLoginFlex>
    </ContainerLoginCard>
  )
}
