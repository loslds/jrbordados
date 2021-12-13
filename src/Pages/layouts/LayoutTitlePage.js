import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CardTitleFlex = styled.div`
  border: 0px;
  padding: 0px auto;
  margin: 0px auto;
  width: 98%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: black;
  min-height: 35px;
  font-size: 18px;
`

export default function TitlePage({ title }) {
  return (
    <CardTitleFlex>
      <h3>{title}</h3>
    </CardTitleFlex>
  )
}
TitlePage.propTypes = {
  title: PropTypes.string.isRequired
}
