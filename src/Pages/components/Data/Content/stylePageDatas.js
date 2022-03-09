import styled from 'styled-components'

export const ContainerPgDataMain = styled.div`
  border: 0px;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  width: 98%;
  display: flex;
  background-color: transparent;
`
export const ContainerPgDataMainFlex = styled.div`
  border: 0px;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  min-height: 45px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-between;
  justify-content: center;
  background-color: white;
  font-size: 14px;
  color: black;
`
export const ContainerPgToolsBarFlex = styled.div`
  border: 0px;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  min-height: 45px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-between;
  justify-content: center;
  background-color: #000000;
  font-size: 14px;
  color: white;
`
export const ContainerToolsBarColCenter = styled.div`
  border: 0.3px white solid;
  padding: 0px 5px 0px 5px;
  margin: 5px 5px 5px 5px;
  max-width: 80%;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-flow: row wrap;
  justify-content: left;
  align-items: center;
  align-content: center;
  background-color: white;
  color: black;
`

export const ContainerToolsBarColEnd = styled.div`
  border: 0.3px white solid;
  padding: 0px 10px 0px 10px;
  margin: 5px 5px 5px 5px;
  max-width: 12%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  background-color: transparent;
`
export const ContainerMainList = styled.div`
  border: 2px blue solid;
  padding: 0px auto;
  margin: 0px 0px 0px 0px;
  max-width: 100%;
  display: flex;
  background-color: transparent;
  justify-content: center;
  align-items: center;
`
export const ContainerMainFlexList = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 0px auto;
  margin: 0px auto;
  background-color: transparent;
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
  align-content: center;
  align-items: center;
`
