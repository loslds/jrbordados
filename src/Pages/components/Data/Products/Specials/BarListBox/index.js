import React, { useCallback, useState } from 'react'
import { listGrpSGrp } from '../bookList'
import BoxList from './BoxList'
import CardList from './CardList'
import HeaderList from './HeaderList'
import TitleList from './TitleList'
import CheckBox from './CheckBox'
import MainList from './MainList'
import TitleListBox from './TitleListBox'
import SelectList from './SelectList'
import SelectFilter from './SelectFilter'
// import SelectField from '../../../SelectField'
import ButtonFilter from './ButtonFilter'
// import Loading from '../../../Loading'

export default function BarListBox() {
  const [listCaption, setListCaption] = useState(listGrpSGrp)
  const [filter, setFilter] = useState({})

  const updateListCaption = useCallback((name, data) => {
    setListCaption(old => {
      return old.map(item => {
        return item.label === name ? { ...item, ...data } : item
      })
    })
  }, [])

  const handleChangeMainList = useCallback(
    (sinal, switchName) => {
      updateListCaption(switchName, { show: !!sinal })
    },
    [updateListCaption]
  )

  const applyFilter = useCallback(() => {
    console.log('Aplique o filtro tal', filter)
  }, [filter])

  // const applyFilter = useCallback(
  //   filterData => {
  //     const newFilter = { ...filter, ...filterData }
  //     setFilter(newFilter)
  //     console.log('Novo o filtro : ', filter)
  //   },
  //   [filter]
  // )

  const handleFilter = useCallback(data => {
    setFilter(old => ({ ...old, ...data }))
  }, [])

  return (
    <BoxList>
      {listCaption.map(({ id, title, show }) => {
        return (
          <CardList key={id}>
            <HeaderList>
              <TitleList title={title} />
              <CheckBox id={id} name={title} onChange={handleChangeMainList} />
            </HeaderList>
            <MainList id={id} disp={!!show}>
              <TitleListBox />
              <SelectList>
                <SelectFilter
                  id={id}
                  title={title}
                  isDisplay={show}
                  onFilter={handleFilter}
                />
              </SelectList>
            </MainList>
          </CardList>
        )
      })}
      <ButtonFilter title={'Aplicar Filtro.'} onClick={applyFilter} />
      {/* {loading ? <Loading /> : null} */}
    </BoxList>
  )
}
