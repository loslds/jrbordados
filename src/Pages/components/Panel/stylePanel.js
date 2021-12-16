import styled from 'styled-components'

export const ContainerPanel = styled.div`
  border: 0px;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  display: flex;
  min-height: 50px;
  background-color: transparent;
`
export const ContainerPanelFlex = styled.div`
  border: 0px;
  max-width: 900px;
  padding: 0px auto;
  margin: 0px auto;
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  min-height: 50px;
  font-size: 14px;
  background-color: transparent;
  @media (min-width: 350px) {
    justify-content: center;
    align-items: center;
  }
`
export const ContainerPanelLeft = styled.div`
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

export const ContainerPanelEnd = styled.div`
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
