import styled from 'styled-components'
// import proibido from '../../../../assets/image/proibido.svg'

export const ContainerToolsBarMain = styled.div`
  border: 0px;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  width: 100%;
  background-color: transparent;
`
export const ContainerToolsBarMainFlex = styled.div`
  border: 0px;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  min-height: 50px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-between;
  justify-content: center;
  background-color: #000000; /*${({ color }) => color};*/
  color: #ffffff;
  font-size: 14px;
`

export const ContainerToolsBarColCenter = styled.div`
  border: 1px red solid;
  padding: 0px 10px 0px 10px;
  margin: 5px 5px 5px 5px;
  max-width: 45%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: ${({ color }) => color};
`

export const ContainerToolsBarColEnd = styled.div`
  border: 1px yellow solid;
  padding: 0px 10px 0px 10px;
  margin: 5px 5px 5px 5px;
  max-width: 45%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  background-color: transparent;
`
