import React from 'react'
import {
  ContainerButtonSend,
  ButtonSendFlex,
  ImagemButtonSend,
  ButtonSend
} from './style'
import enviarbrc from '../../../../../../assets/image/enviarbrc.svg'
export default function ButtonFilter() {
  return (
    <ContainerButtonSend>
      <ButtonSendFlex>
        <ImagemButtonSend>
          <ButtonSend img={enviarbrc} onClick={() => {}} />
        </ImagemButtonSend>
      </ButtonSendFlex>
    </ContainerButtonSend>
  )
}
