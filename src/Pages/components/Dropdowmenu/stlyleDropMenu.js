import styled from 'styled-components'

export const ContentMenu = styled.div`
  border: 0px;
  width: 100%;
  padding: 0px auto;
  margin: 0px auto;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-flow: left;
  flex-wrap: nowrap;
  align-items: center;
  align-content: center;
  justify-content: center;
  z-index: 10000;
`

export const ButtonMenuDropdown = styled.button`
  margin: 2px 2px 2px 2px;
  padding: 0px 5px 0px 5px;
  width: 100%;
  display: inline-block;
  flex-flow: left;
  flex-wrap: nowrap;
  background: transparent;
  color: black;
  font-size: 1em;
  cursor: pointer;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: #ff4949;
    color: white;
  }
`

export const ContainerDropdownPrd = styled.div`
  border-radius: 3px;
  border: 3px #00ff55 solid;
  margin: 2 5 2 5;
  padding: 0 auto;
  width: 100%;
  top: 30px;
  height: 50px;
  display: ${({ uldiv }) => (uldiv ? 'flex' : 'none')};
  flex-flow: center;
  flex-wrap: row nowrap;
  align-items: center;
  align-content: center;
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
