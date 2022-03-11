import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { getCategory } from '../../../../../../services/api/makeData/category'
import { getSubCategoryArtes } from '../../../../../../services/api/makeData/subcategoryartes'
import SelectField from '../../../SelectField'

export default function SelectFilter({ id, name, isDisplay, onFilter }) {
  const [category, setCategory] = useState([])
  const [subcategoryartes, setSubCategoryArtes] = useState([])
  const [subcategorybordados, setSubCategoryBordados] = useState([])
  const [subcategorylasers, setSubCategoryLasers] = useState([])
  const [loading, setLoading] = useState(false)
  const [filter, setFilter] = useState({})

  const emitOnFilter = useCallback(
    filterData => onFilter(filterData),
    [onFilter]
  )

  const updateFilter = useCallback(
    filterData => {
      const newFilter = { ...filter, ...filterData }
      setFilter(newFilter)
      emitOnFilter(newFilter)
    },
    [filter, emitOnFilter]
  )

  const fetchCategories = useCallback(async () => {
    setLoading(true)
    const response = await getCategory()
    setLoading(false)
    if (response && response.success) {
      setCategory(response.categories)
    }
  }, [])

  const fetchSubCategoriesArtes = useCallback(async () => {
    setLoading(true)
    const response = await getSubCategoryArtes()
    setLoading(false)
    if (response && response.success) {
      setSubCategoryArtes(response.subcategoriesartes)
    }
  }, [])
  /**     */

  const handleChange = useCallback(
    (id, name) => {
      const value = parseInt(id, 10) || 0
      updateFilter({ [name]: value })
    },
    [updateFilter]
  )

  useEffect(() => {
    if (name === 'Artes') fetchCategories()
    if (name === 'Sub Grupo Artes') fetchSubCategoriesArtes()
  }, [fetchCategories, fetchSubCategoriesArtes, name])
  const renderSelect = useCallback(() => {
    return (
      <SelectField
        name={name === 'Artes' ? 'categoryId' : 'subcategoryId'}
        options={name === 'Artes' ? category : subcategoryartes}
        placeHolder="Opções..."
        onChange={handleChange}
        disabled={loading}
      />
    )
  }, [category, subcategoryartes, name, handleChange, loading])

  return <>{isDisplay ? renderSelect() : null}</>
}

SelectFilter.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  onFilter: PropTypes.func,
  isDisplay: PropTypes.bool
}

SelectFilter.defaultProps = {
  id: 0,
  name: 'semnome',
  onFilter: () => {},
  isDisplay: false
}
