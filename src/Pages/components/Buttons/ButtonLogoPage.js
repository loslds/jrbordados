import React from 'react'
import PropTypes from 'prop-types'
import {
  ContainerButtonPage,
  ContainerButtonLogoPage,
  ButtonsImgLogoPage
} from './styleButton'

export default function ButtonLogoPage({ title, onClick, img }) {
  return (
    <ContainerButtonPage>
      <ContainerButtonLogoPage>
        <ButtonsImgLogoPage img={img} onClick={onClick} title={title} />
      </ContainerButtonLogoPage>
    </ContainerButtonPage>
  )
}

ButtonLogoPage.propTypes = {
  onClick: PropTypes.func,
  img: PropTypes.string,
  title: PropTypes.string
}
