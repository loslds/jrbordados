import styled from 'styled-components'
import semimg from '../../assets/image/semimg.svg'

export const ContainerSys = styled.div`
  border: 2px #000000 solid;
  padding: 2px auto;
  margin: 4px auto;
  width: 94%;
  display: flex;
  background-color: transparent;
`

export const ContainerImgSys = styled.div`
  border: 2px green dashed;
  margin: 4px auto;
  padding: 4px auto;
  height: 100px;
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
