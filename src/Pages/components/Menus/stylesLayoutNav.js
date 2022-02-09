import styled from 'styled-components'

export const ContainerLayout = styled.div`
  border: 0px;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  width: 98%;
  min-height: 60px;
  background-color: transparent;
`

export const CardTitle = styled.div`
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  min-width: 85%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: black;
  min-height: 35px;
  font-size: 18px;
`

export const Divs = styled.div`
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  position: relative;
  display: block;
  width: 920px;
`

export const LayoutContainerNavFlex = styled.div`
  border: 0px;
  margin: 0px 0px 5px 5px;
  padding: 0px 0px 0px 0px;
  min-height: 100px;
  width: 99%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-between;
  justify-content: center;
`

export const LayoutHeaderNav = styled.div`
  border: 0.3px #82b6f1 solid;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  height: 50x;
  width: 100%;
  background-color: rgba(211, 210, 210, 0.5);
`

export const LayoutHeaderNavFlex = styled.div`
  border: 0;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  min-height: 43px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-between;
  justify-content: center;
`

export const LayoutColCenterNav = styled.div`
  border: 0.3px red dashed;
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

export const LayoutMainNav = styled(Divs)`
  border-top: 3px #000000 solid;
  border-bottom: 3px #000000 solid;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  width: 100%;
  flex-grow: 1;
  background-color: rgb(189, 224, 226);
  scroll-behavior: auto;
`

export const LayoutFooterNav = styled(Divs)`
  border: 0px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  width: 100%;
  min-height: 50px;
  background-color: rgba(0, 0, 0, 0.5);
`
