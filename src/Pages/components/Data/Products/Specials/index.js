import React, { useCallback, useEffect, useState } from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// components
import ActionsBar from './Actionbars'
import Loading from '../../../Loading'
import Menu from './Menu'
import Modal from '../../../Modal'
import BarListBox from './BarListBox'
// imagens
import {
  getProducts,
  setProducts
} from '../../../../../services/api/makeData/products'

import {
  ShoppingCol,
  ShoppingFlex,
  ShoppingImagemProduto,
  ShoppingItemProduto,
  CardAuxilar
} from './styles'
import { useIsMounted } from '../../hooks'
// import SelectFilterData from './SelectFilterData'
export default function Promocoes() {
  const isMounted = useIsMounted()
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [openFilter, setOpenFilter] = useState(false)
  const [filter, setFilter] = useState({})

  const [isButtonMenu, setIsButtonMenu] = useState(false)

  const handleClick = () => {}

  const handleMenu = useCallback(() => {
    setIsButtonMenu(oldState => !oldState)
  }, [])

  const handleOpenFilter = useCallback(() => {
    setOpenFilter(oldState => !oldState)
  }, [])

  const handleFilter = useCallback(filterData => {
    setFilter(old => ({ ...old, ...filterData }))
  }, [])

  const fetchData = useCallback(async () => {
    setLoading(true)
    const response = await getProducts({ order: 'id', filter })
    if (isMounted.current) {
      setLoading(false)
      if (response) setProducts(response.products)
    }
  }, [isMounted, filter])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <ShoppingCol>
      <ShoppingFlex>
        {products.map(product => {
          const { id, categories, subcategories, name, codref, ref, imageUrl } =
            product
          return (
            <div key={id}>
              <ShoppingItemProduto>
                <ShoppingImagemProduto
                  img={imageUrl}
                  title={name}
                  onClick={handleClick(id)}
                />
                <div>
                  <span>CódPrd: {id}</span>
                  <span>IdCat....: {categories}</span>
                  <span>SIdCat....: {subcategories}</span>
                </div>
                <CardAuxilar>
                  <Link to={codref}>
                    <span>{codref}</span>
                    <span>{ref}</span>
                  </Link>
                </CardAuxilar>
              </ShoppingItemProduto>
            </div>
          )
        })}
        <ActionsBar
          handleClickMenu={handleMenu}
          handleClickRefresh={fetchData}
          handleClickFilter={handleOpenFilter}
        />
      </ShoppingFlex>
      {loading ? <Loading /> : null}
      {isButtonMenu ? <Menu /> : null}

      <Modal
        title={'Filtra Dados Produtos'}
        onCloseModal={handleOpenFilter}
        isOpen={openFilter}
      >
        {openFilter ? <BarListBox onFilter={handleFilter} /> : null}
      </Modal>
    </ShoppingCol>
  )
}
