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
