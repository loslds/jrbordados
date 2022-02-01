import styled from 'styled-components'
import semimg from '../../../assets/image/semimg.svg'

export const ContainerCarrosel = styled.div`
  margin: 0px auto;
  padding: 0px auto;
  min-height: 100vh;
  width: 100%;
  background-color: transparent;
  color: black;
  border: 0px;
`
export const ContainerCarroselFlex = styled.div`
  border: 1px black solid;
  border-radius: 10px;
  margin: 5px 10px 5px 5px;
  padding: 10px 0px 10px 0px;
  min-height: 100vh;
  width: 97%;
  background-color: #e1e1e1e1;
  color: black;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-between;
  justify-content: center;
`
export const ContainerCarroselCard = styled.div`
  border: 0px;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  min-height: 40px;
  display: flex;
`
export const ContainerCarroselLogoFlex = styled.div`
  border: 0px;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: black;
  font-size: 18px;
`
export const ContainerCarroselLogo = styled.div`
  border: 1px black double;
  padding: 1px 1px 1px 1px;
  margin: 1px 4px 1px 4px;
  height: 100px;
  width: 300px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: transparent;
  color: black;
  font-size: 14px;
`
export const ButtonsImgBgLogo = styled.button`
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  display: block;
  width: 99%;
  height: 99%;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(${({ img }) => img || semimg});
  cursor: pointer;
  outline: none;
  font-size: 14px;
`
export const ContainerCarroselItens = styled.div`
  border: 2px red dotted;
  max-width: 75vw;
  height: 300px;
`
