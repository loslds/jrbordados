import React from 'react'
import PropTypes from 'prop-types'
import { MainCardList, MainCardListFlex } from './stylesBarList'
// import { listGrpSGrp } from '../bookList'
// import BoxList from './BoxList'
// import CardList from './CardList'
// import HeaderList from './HeaderList'
// import TitleList from './TitleList'
// import CheckBox from './CheckBox'
// import MainList from './MainList'
// import TitleListBox from './TitleListBox'
// import SelectList from './SelectList'
// import SelectFilter from './SelectFilter'
// import ButtonFilter from './ButtonFilter'
// import Loading from '../../../Loading'

// import { ListGrpPrd } from '../BookList'
// import { listSGrpProd } from '../BookList'

export default function BarListBox({ disp, children }) {
  return (
    <MainCardList disp={disp}>
      <MainCardListFlex>{children}</MainCardListFlex>
    </MainCardList>
  )
}
BarListBox.propTypes = {
  disp: PropTypes.bool,
  children: PropTypes.any
}

BarListBox.defaultProps = {
  disp: false,
  children: null
}
