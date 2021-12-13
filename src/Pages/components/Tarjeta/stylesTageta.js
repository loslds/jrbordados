import styled from 'styled-components'
import semimg from '../../../assets/image/semimg.svg'

export const ContainerTarjetaCard = styled.div`
  border: 0px;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  display: flex;
  min-height: 50px;
  background-color: transparent;
`
export const ContainerTarjetaFlex = styled.div`
  border: 0px;
  width: 900px;
  padding: 0px auto;
  margin: 0px auto;
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  min-height: 50px;
  font-size: 24px;
  background-color: transparent;
  @media (min-width: 350px) {
    justify-content: center;
    align-items: center;
  }
`
export const ContainerTarjetaLeft = styled.div`
  border: 0px;
  padding: 4px auto;
  margin: 4px auto;
  max-width: 40%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: transparent;
`

export const ContainerTarjetaHidth = styled.div`
  border: 0px;
  padding: 4px auto;
  margin: 4px auto;
  max-width: 40%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  background-color: transparent;
`
export const ButtonsTarjetaHomeBg = styled.button`
  border: 0px;
  margin: 0 4px;
  padding: 0;
  display: block;
  width: 40px;
  height: 40px;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(${({ img }) => img || semimg});
  cursor: pointer;
  outline: none;
  font-size: 18px;
`
