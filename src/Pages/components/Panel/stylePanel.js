import styled from 'styled-components'

export const ContainerPanelMain = styled.div`
  border: 0.3px #82b6f1 solid;
  top: 0px;
  max-width: 98%;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: Black;
  background-color: #ffffff;
`
/** quota da flexão do corpo  sem Borda */
export const ContainerPanelMainFlex = styled.div`
  border: 0px;
  margin: 0px 5px 0px 5px;
  padding: 0px 5px 0px 5px;
  width: 98%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  background-color: transparent;
`
/** quota da flexão do corpo com Borda */
export const ContainerPanelMainFlexBorder = styled.div`
  border: 3px #949596 solid;
  border-radius: 10px;
  margin: 0px 5px 0px 5px;
  padding: 0px 5px 0px 5px;
  width: 98%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  background-color: transparent;
`
export const ContainerPanelMainCard = styled.div`
  border: 2.3px #750580 dotted;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  min-height: 40px;
  display: flex;
`
export const DivisionPanel = styled.div`
  border: 0px;
  padding: 1.5px auto;
  margin: 1.5px auto;
  height: 2px;
  width: 98%;
  display: flex;
  background-color: #7f7fbb;
`
/** fim panel Main */
/** quota para titulo */
export const ContainerPanelTitleFlex = styled.div`
  border: 0px;
  padding: 0px auto;
  margin: 0px auto;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: black;
  font-size: 18px;
`

export const ContainerPanel = styled.div`
  border: 0px;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  display: flex;
  min-height: 40px;
  background-color: transparent;
`
export const ContainerPanelFlex = styled.div`
  border: 0px;
  width: 98%;
  padding: 0px auto;
  margin: 0px auto;
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  min-height: 40px;
  font-size: 14px;
  background-color: transparent;
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
  border: 1px #37b406 solid;
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
export const ContainerPanelText = styled.div`
  border: 0.3px #8284f1 solid;
  padding: 1.5px 5px 1.5px 5px;
  margin: 5px 5px 5px 5px;
  width: 98%;
  display: flex;
  flex-wrap: row wrap;
  flex-flow: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;

  h5 {
    margin-left: 25px;
    font-size: 10px;
    color: blue;
  }
`
export const ContainerPanelTextFlex = styled.div`
  border: 1px black dashed;
  padding: 1.5px auto;
  margin: 5px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
`
