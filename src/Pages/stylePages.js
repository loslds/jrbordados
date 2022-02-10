import styled from 'styled-components'
import semimg from '../assets/image/semimg.svg'
/** corpo da pagina */
/** largura 900 , altuta 100%(o quanto existir) */
export const ContainerMain = styled.div`
  border: 0.3px #82b6f1 solid;
  top: 0px;
  max-width: 98%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: Black;
  background-color: #ffffff;
`
/** quota da flexão do corpo  sem Borda */
export const ContainerFlex = styled.div`
  border: 0px;
  margin: 10px auto;
  padding: 10px auto;
  width: 96%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  background-color: transparent;
`

/** quota da flexão do corpo com Borda */
export const ContainerFlexBorder = styled.div`
  border: 1px black solid;
  border-radius: 10px;
  margin: 10px auto;
  padding: 10px auto;
  width: 96%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  background-color: transparent;
`

export const ContainerCard = styled.div`
  border: 0.3px #750580 solid;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  min-height: 50px;
`
export const ContainerCardFlex = styled.div`
  border: 0px;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  max-width: 100%;
  display: flex;
`

export const ContainerText = styled.div`
  border: 0.3px #8284f1 solid;
  padding: 1.5px 5px 1.5px 5px;
  margin: 5px 5px 5px 5px;
  width: 96%;
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
export const ContainerTextFlex = styled.div`
  border: 1px black dashed;
  padding: 1.5px auto;
  margin: 5px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
`

export const ContainerButton = styled.div`
  border: 2px blue solid;
  padding: 4px auto;
  margin: 4px auto;
  height: 45px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: flex-end;
  align-content: center;
  color: black;
  min-height: 35px;
  font-size: 18px;
`
export const DivisionText = styled.div`
  border: 0px;
  padding: 1.5px auto;
  margin: 1.5px auto;
  height: 2px;
  width: 98%;
  display: flex;
  background-color: #7f7fbb;
`
export const ContainerCenter = styled.div`
  border: 1px #fff555 dashed;
  padding: 5px auto;
  margin: 10px auto;
  width: 100%;
  display: flex;
  background-color: transparent;
`
export const ContainerCenterImg = styled.div`
  border: 0;
  margin: 4px auto;
  padding: 4px auto;
  min-height: 100px;
  width: 300px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(${({ img }) => img || semimg});
`
export const ContainerCenterImgLogo = styled.div`
  border: 0;
  margin: 4px auto;
  padding: 4px auto;
  min-height: 50px;
  width: 150px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(${({ img }) => img || semimg});
`
export const ContainerImgMatriz = styled.div`
  border: 2px #1010aa solid;
  border-radius: 10px;
  margin: 4px auto;
  padding: 4px auto;
  min-height: 100px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: transparent;
`
