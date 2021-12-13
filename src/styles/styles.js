import styled from 'styled-components'

export const ConteinerMainApp = styled.div`
  max-width: 920px;
  margin: 0 auto;
  padding: 0 auto;
  border: 1px #1214b6 dotted;
`
export const ContainerTitleBg = styled.div`
  border: 0px; /*1px #090b8d solid; */
  max-width: 920px;
  margin: 0 auto;
  padding: 0 auto;
  display: flex;
`

export const TitleBg = styled.div`
  border: 1px #85f0ea solid;
  border-radius: 5px;
  padding: 2px auto;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 15px small;
  color: black;
  background-size: 20px;
  background-color: #8a7cbb;
`
export const TextoObsActacion = styled.div`
  border: 0px; /*1px black solid;*/
  margin: 5px auto;
  padding: 5px auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  color: red;
  font-size: 18px;
  > p {
    font-size: 14px;
  }
`
