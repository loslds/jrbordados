import styled from 'styled-components'
import semimg from '../../../assets/image/semimg.svg'

export const CtrlPageCol = styled.div`
  border: 3px white solid;
  border-radius: 10px;
  padding: 2px auto;
  margin: 2px auto;
  min-width: 100%;
  display: flex;
  background-color: rgba(0, 0, 0, 1);
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
  border: 2px blue solid;
  padding: 4px auto;
  margin: 4px auto;
  height: 45px;
  width: 45px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  align-content: center;
  color: black;
  min-height: 35px;
  font-size: 14px;
`
export const ButtonsImgBg = styled.button`
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
  font-size: 14px;
`
