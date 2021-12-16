import styled from 'styled-components'
import semimg from '../../../assets/image/semimg.svg'

export const ContainerLoginCard = styled.div`
  border: 0px; /* 1px green dashed;*/
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  display: flex;
  min-height: 50px;
  background-color: transparent;
`
export const ContainerLoginFlex = styled.div`
  border: 1px black dashed;
  width: 98%;
  padding: 2px auto;
  margin: 2px auto;
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  min-height: 50px;
  font-size: 24px;
  background-color: transparent;
  @media (min-width: 350px) {
    justify-content: center;
    align-items: center;
  }
`

export const ContainerLoginLeft = styled.div`
  border: 0px;
  padding: 4px auto;
  margin: 4px auto;
  min-width: 40%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: transparent;
`

export const ContainerLoginRight = styled.div`
  border: 0px;
  padding: 4px auto;
  margin: 4px auto;
  min-width: 40%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  background-color: transparent;
`
export const ContainerImageLogin = styled.div`
  border: 2px #7f7fbb solid;
  margin: 4px auto;
  padding: 4px auto;
  height: 300px;
  width: 265px;
  display: flex;
  background-color: #adadc0;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: transparent;
`
export const ButtonsLoginImageBg = styled.button`
  border: 0px;
  margin: 0 4px;
  padding: 0;
  display: block;
  height: 100%;
  width: 100%;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(${({ img }) => img || semimg});
  cursor: pointer;
  outline: none;
  font-size: 14px;
`
//         css form login
export const ContainerFormLogin = styled.div`
  border: 2px #7f7fbb solid;
  margin: 4px auto;
  padding: 4px auto;
  height: 300px;
  width: 265px;
  display: flex;
  background-color: #adadc0;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: transparent;
  font-size: 14px;
  color: black;
`
export const ContainerFormFlex = styled.div`
  border: 1px green dashed;
  margin: 4px auto;
  padding: 4px auto;
  width: 98%;
  display: flex row;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: transparent;
`
