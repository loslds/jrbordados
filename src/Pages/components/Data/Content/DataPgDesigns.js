import React from 'react'
import PropTypes from 'prop-types'
import { ContainerPgDataMain, ContainerPgDataMainFlex } from '../styleDatas'

export default function DataPgDesigns({ children }) {
  // const isMounted = useIsMounted()
  // const [loading, setLoading] = useState(false)
  // const [portifolios, setPortifolios] = useState([])

  // const [listGrpCaption, setListGrpCaption] = useState(listGrpSGrp)
  // const [onoff, setOnOff] = useState(false)
  // const handleMenu = () => {
  //   const off = !onoff
  //   setOnOff(off)
  //   if (!off) {
  //     // handleCloseDatas()
  //   }
  // }
  return (
    <ContainerPgDataMain>
      <ContainerPgDataMainFlex>
        <h3>ContainerPgDataMainFlex</h3>
      </ContainerPgDataMainFlex>
    </ContainerPgDataMain>
  )
}
DataPgDesigns.propTypes = {
  children: PropTypes.any,
  open: PropTypes.bool
}
DataPgDesigns.defaultProps = {
  children: null,
  open: null
}

// ContainerPgToolsBarFlex,
// ContainerToolsBarColCenter,
// ContainerToolsBarColEnd

// import { ButtonBg } from '../../Buttons'
// import menubrc from '../../../../assets/image/menubrc.svg'
// import limparbrc from '../../../../assets/image/limparbrc.svg'
// import BoxListGrp from './BoxListGrp'
// import Loading from './Loading'
// import {
//   getPortifolios,
//   setPotifolios
// } from '../../../../services/api/makeData/portilolios'
// import { useIsMounted } from '../hooks'

// <ContainerPgToolsBarFlex>
//          <ContainerToolsBarColCenter open={onoff}>
//            <BoxListGrp>
//              <h3>estou no boxlist estou no boxlist estou no boxlist</h3>
//            </BoxListGrp>
//          </ContainerToolsBarColCenter>
//          <ContainerToolsBarColEnd>
//            <ButtonBg img={menubrc} onClick={handleMenu} />
//            <ButtonBg img={limparbrc} onClick={() => {}} />
//          </ContainerToolsBarColEnd>
//        </ContainerPgToolsBarFlex>
//          <h3>
//            painel com material design conform o filtro painel com material
//            design conform o filtro
//          </h3>
