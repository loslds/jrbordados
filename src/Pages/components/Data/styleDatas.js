import styled from 'styled-components'

export const ContainerDataMain = styled.div`
  border: 0px;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  width: 100%;
  background-color: transparent;
`
export const ContainerDataDesignMain = styled.div`
  border: 0px;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  width: 100%;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  background-color: transparent;
`
export const ContainerDataBordadoMain = styled.div`
  border: 0px;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  width: 100%;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  background-color: transparent;
`
export const ContainerDataLaserMain = styled.div`
  border: 0px;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  width: 100%;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  background-color: transparent;
`
export const ContainerDataMainFlex = styled.div`
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
  background-color: #ffffff;
  color: #000000;
  font-size: 14px;
`
export const ContainerDataHeardFlex = styled.div`
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
  background-color: #ffffff;
  color: #000000;
  font-size: 14px;
`
/** cartão imagem e titulo */
export const DataCardImgTitle = styled.div`
  border: 1px red solid;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  min-height: 55px;
  width: 100%;
  background-color: transparent;
  display: flex;
`
export const DataCardImgTitleFlex = styled.div`
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
  background-color: transparent;
  color: #000000;
  font-size: 14px;
`

export const ContainerTitleFlex = styled.div`
  border: 1px red solid;
  padding: 2px auto;
  margin: 2px auto;
  min-height: 45px;
  width: 50%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: black;
  font-size: 18px;
`
/** ToolsBar */
export const DataToolsBarMain = styled.div`
  border: 0px;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  width: 98%;
  display: flex;
  background-color: transparent;
`
export const DataToolsBarMainFlex = styled.div`
  border: 0px;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  min-height: 45px;
  width: 100%;
  display: flex;
  flex-flow: wrap;
  align-items: center;
  align-content: space-between;
  justify-content: center;
  background-color: #000000;
  font-size: 14px;
  color: white;
`
export const ContentData = styled.div`
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
/**     apartir daqui */
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
  max-width: 70%;
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
  max-width: 25%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
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
export const CardHeader = styled.div`
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  padding: 0px auto;
  margin: 0px auto;
  min-height: 30px;
  min-width: 100%;
  display: flex;
`
export const CardHeaderFlex = styled.div`
  border: 0px;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  padding: 0px auto;
  margin: 0px auto;
  width: 100%;
  min-height: 100%;
  background-color: rgba(156, 155, 155, 0.8);
  display: flex;
`
