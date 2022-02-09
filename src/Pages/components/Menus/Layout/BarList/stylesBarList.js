import styled from 'styled-components'

export const MainCardList = styled.div`
  border: 1px green solid;
  padding: 0px auto;
  margin: 0px auto;
  min-width: 100%;
  height: 100%;
  display: ${props => (props.disp ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  align-content: center;
`
export const MainCardListFlex = styled.div`
  border: 1px blue solid;
  padding: 0px auto;
  margin: 0px auto;
  min-width: 100%;
  height: 100%;
  background-color: rgba(212, 209, 209, 0.774);
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
  align-content: center;
  align-items: center;
`
