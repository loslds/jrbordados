import styled from 'styled-components'
import semimg from '../../../assets/image/semimg.svg'

export const CtrlPageCol = styled.div`
  border: 0px;
  border-radius: 10px;
  padding: 2px auto;
  margin: 2px auto;
  min-width: 100%;
  display: flex;
  background-color: transparent; /*rgba(0, 0, 0, 1);*/
`
export const CtrlPage = styled.div`
  min-height: 40px;
  width: 100%;
  padding: 2px 5px 2px 5px;
  margin: 0px 0px 0px 0px;
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  background-color: transparent;
  div {
    padding: 0px 5px 0px 5px;
    margin: 0px 0px 0px 0px;
  }
`
export const ContainerButtonImgBg = styled.div`
  border: 0px;
  padding: 1px 1px 1px 1px;
  margin: 1px 4px 1px 4px;
  height: 40px;
  width: 40px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  color: black;
  min-height: 35px;
  font-size: 14px;
`
export const ButtonsImgBg = styled.button`
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  display: block;
  width: 35px;
  height: 35px;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(${({ img }) => img || semimg});
  cursor: pointer;
  outline: none;
  font-size: 14px;
`
export const ContainerButtonPage = styled.div`
  border: 0px;
  padding: 2px auto;
  margin: 2px auto;
  min-width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-content: center;
`
export const ContainerButtonLogoPage = styled.div`
  border: 0.3px #82b6f1 solid;
  border-radius: 10px;
  padding: 1px 1px 1px 1px;
  margin: 1px 4px 1px 4px;
  height: 70px;
  width: 210px;
  background-color: #c0d1f396;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-content: center;
  align-content: center;
  color: black;
  min-height: 35px;
  font-size: 14px;
`
export const ButtonsImgLogoPage = styled.button`
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  display: block;
  width: 200px;
  height: 67px;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(${({ img }) => img || semimg});
  cursor: pointer;
  outline: none;
  font-size: 14px;
`
