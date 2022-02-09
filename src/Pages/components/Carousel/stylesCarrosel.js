import styled from 'styled-components'
import semimg from '../../../assets/image/semimg.svg'

export const ContainerCarrosel = styled.div`
  margin: 0px auto;
  padding: 0px auto;
  min-height: 40px;
  width: 98%;
  background-color: transparent;
  color: black;
  border: 0px;
`
export const ContainerCarroselFlex = styled.div`
  border: 0.3px #82b6f1 solid;
  border-radius: 10px;
  margin: 5px 10px 5px 5px;
  padding: 10px 0px 10px 0px;
  min-height: 38px;
  width: 99%;
  background-color: #c0d1f396;
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
export const ContainerCarroselCardFlex = styled.div`
  border: 0px;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: #ffffff;
  font-size: 18px;
`
export const ContainerCarroselLogo = styled.div`
  border: 0px;
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
export const ContainerCarroselCardFlexBrd = styled.div`
  border: 1px black solid;
  border-radius: 8px;
  padding: 0px 0px 0px 0px;
  margin: 0px 10px 0px 10px;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: black;
  font-size: 18px;
`

export const ContainerCardBar = styled.div`
  border: 0px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  min-height: 45px;
  display: flex;
  color: black;
  background-color: rgba(0, 0, 0, 1);
`
export const FlexCardBar = styled.div`
  border: none;
  min-height: 40px;
  width: 100%;
  padding: 2px 5px 2px 5px;
  margin: 0px 0px 0px 0px;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: transparent;
`

export const CardBarMain = styled.div`
  border: 0px;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  min-height: 40px;
  display: flex;
`

export const CardBarFilterlLeft = styled.div`
  border: 0px;
  padding: 4px 4px 4px 4px;
  margin: 4px 4px 4px 4px;
  max-width: 40%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: transparent;
`

export const CardBarFilterEnd = styled.div`
  border: 0px;
  padding: 4px 4px 4px 4px;
  margin: 4px 4px 4px 4px;
  max-width: 40%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  background-color: transparent;
`

export const CardBarCenter = styled.div`
  padding: 0px auto;
  margin: 0px auto;
  min-width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: white;
  font-size: 18px;
`

export const ContainerButtonBar = styled.div`
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
export const ButtonsBarImgBg = styled.button`
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
