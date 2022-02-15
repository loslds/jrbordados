import styled from 'styled-components'

export const ContentMenu = styled.div`
  border: 0px;
  width: 100%;
  padding: 0px auto;
  margin: 0px auto;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-flow: center;
  flex-wrap: row nowrap;
  align-items: center;
  align-content: center;
  justify-content: center;

  nav {
    border: 1px red dashed;
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
  ul li {
    position: relative;
    color: black;
    background-color: transparent;
  }
  li ul {
    position: absolute;
    left: 149px;
    top: 0;
    display: none;
  }
`

export const ButtonMenuDropdown = styled.button`
  border: 0px;
  margin: 0 5 0 5;
  padding: 0 auto;
  width: 100%;
  display: inline-block;
  flex-flow: center;
  flex-wrap: nowrap;
  color: black;
  background-color: ${({ btbg }) => (btbg ? 'transparent' : 'white')};
  font-size: 1em;
  cursor: pointer;
`
// `
// export const ContainerMenuFlex = styled.div`
//   border: 0px;
//   margin: 0px 0px 0px 0px;
//   padding: 0px 0px 0px 0px;
//   min-height: 100%;
//   width: 100%;
//   display: flex;
//   flex-flow: center;
//   flex-wrap: row nowrap;
//   align-items: center;
//   align-content: center;
//   justify-content: center;

// export const ContainerMenuText = styled.div`
//   border: 1px red dashed;
//   display: flex;
//   flex-wrap: row nowrap;
//   align-items: center;
//   align-content: center;
//   justify-content: center;
// `
// export const ContainerMenuCard = styled.div`
//   border: 0.3px #750580 solid;
//   padding: 0px 0px 0px 0px;
//   margin: 0px 0px 0px 0px;
//   width: 100%;
//   min-height: 30px;
//   display: block;
// `
// export const ContainerMenuCardFlex = styled.div`
//   border: 0px;
//   padding: 0px 0px 0px 0px;
//   margin: 0px 0px 0px 0px;
//   max-width: 100%;
//   display: inline-flex center;
//   flex-wrap: row nowrap;
//   align-items: center;
//   align-content: center;
//   justify-content: space-between;
// `
