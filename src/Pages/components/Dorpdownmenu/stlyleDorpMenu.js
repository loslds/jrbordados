import styled from 'styled-components'

export const ContentMenu = styled.div`
  border: 0px;
  width: 100%;
  padding: 0px auto;
  margin: 0px auto;
  display: ${({ open }) => (open ? 'flex' : 'none')};

  flex-wrap: row nowrap;
  align-items: center;
  align-content: center;
  justify-content: center;
`
export const ContainerMenuFlex = styled.div`
  border: 0px;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  min-height: 100%;
  width: 130px;
  display: flex;
  flex-wrap: row nowrap;
  align-items: center;
  align-content: center;
  justify-content: center;

  nav {
    border: 1px red solid;
    width: 100%;
    color: black;
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    color: black;
  }
  ul {
    list-style: none;
    padding-left: 0px;
  }
`
export const ContainerMenuText = styled.div`
  border: 1px red dashed;
  display: flex;
  flex-wrap: row nowrap;
  align-items: center;
  align-content: center;
  justify-content: center;
  /*position: relative;*/
`
export const ContainerMenuCard = styled.div`
  border: 0.3px #750580 solid;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  min-height: 30px;
  display: block;
`
export const ContainerMenuCardFlex = styled.div`
  border: 0px;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  max-width: 100%;
  display: inline-flex center;
  flex-wrap: row nowrap;
  align-items: center;
  align-content: center;
  justify-content: space-between;
`
