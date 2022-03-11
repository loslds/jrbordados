import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { getCategory } from '../../../services/api/makeData/category'
import { getSubCategoryArtes } from '../../../../../../services/api/makeData/subcategoryartes'
import { getSubCategoryBordados } from '../../../../../../services/api/makeData/subcategorybordados'
import { getSubCategoryLasers } from '../../../../../../services/api/makeData/subcategorylasers'
import Loading from '../../Loading'
import SelectField from '../../SelectField'

export default function SelectFilterDatas({ data, field, onFilter }) {
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
    },
    [filter]
  )

  const fetchCategory = useCallback(async () => {
    setLoading(true)
    const response = await getCategory()
    setLoading(false)
    if (response && response.success) setCategory(response.categories)
  }, [])

  const fetchSubCategoryArtes = useCallback(async () => {
    setLoading(true)
    const response = await getSubCategoryArtes()
    setLoading(false)
    if (response && response.success) {
      setSubCategoryArtes(response.subcategoriesartes)
    }
  }, [])

  const fetchSubCategoryBordados = useCallback(async () => {
    setLoading(true)
    const response = await getSubCategoryBordados()
    setLoading(false)
    if (response && response.success) {
      setSubCategoryBordados(response.subcategoriesbordados)
    }
  }, [])

  const fetchSubCategoryLasers = useCallback(async () => {
    setLoading(true)
    const response = await getSubCategoryLasers()
    setLoading(false)
    if (response && response.success) {
      setSubCategoryLasers(response.subcategorieslasers)
    }
  }, [])

  const handleChange = useCallback(
    (id, name) => {
      const value = parseInt(id, 10) || 0
      updateFilter({ [name]: value })
    },
    [updateFilter]
  )

  useEffect(() => {
    fetchCategory()
  }, [fetchCategory])

  useEffect(() => {
    fetchSubCategoryArtes()
  }, [fetchSubCategoryArtes])

  useEffect(() => {
    fetchSubCategoryBordados()
  }, [fetchSubCategoryBordados])

  useEffect(() => {
    fetchSubCategoryLasers()
  }, [fetchSubCategoryLasers])

  return (
    <>
      <SelectField
        name={field}
        options={data}
        placeHolder="Opções..."
        onChange={handleChange}
      />
      {loading ? <Loading /> : null}
    </>
  )
}

SelectFilterDatas.propTypes = {
  data: PropTypes.string,
  field: PropTypes.string,
  onFilter: PropTypes.func
}

SelectFilterDatas.defaultProps = {
  data: 'nodata',
  field: '',
  onFilter: () => {}
}
