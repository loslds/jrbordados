import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { getCategory } from '../../../../../../services/api/makeData/category'
// import { getSubCategoryArtes } from '../../../../../../services/api/makeData/subcategoryartes'
// import { getSubCategoryBordados } from '../../../../../../services/api/makeData/subcategorybordados'
// import { getSubCategoryLasers } from '../../../../../../services/api/makeData/subcategorylasers'
// import SelectField from '../../../SelectField'

export default function SelectFilter({ id, title, isDisplay, onFilter }) {
  const [category, setCategory] = useState([])

  const [subcategory, setSubCategory] = useState([])
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

  const fetchSubCategories = useCallback(async () => {
    setLoading(true)
    const response = await getSubCategory()
    setLoading(false)
    if (response && response.success) {
      setSubCategory(response.subcategories)
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
    if (name === 'Grupos') fetchCategories()
    if (name === 'Sub-Grupos') fetchSubCategories()
  }, [fetchCategories, fetchSubCategories, name])

  const renderSelect = useCallback(() => {
    return (
      <SelectField
        name={name === 'Grupos' ? 'categoryId' : 'subcategoryId'}
        options={name === 'Grupos' ? category : subcategory}
        placeHolder="Opções..."
        onChange={handleChange}
        disabled={loading}
      />
    )
  }, [category, subcategory, name, handleChange, loading])

  return <>{isDisplay ? renderSelect() : null}</>
}

SelectFilter.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  onFilter: PropTypes.func,
  isDisplay: PropTypes.bool
}

SelectFilter.defaultProps = {
  id: 0,
  title: 'Opções...',
  onFilter: () => {},
  isDisplay: false
}

// const [category, setCategory] = useState([])
// const [subcategoryartes, setSubCategoryArtes] = useState([])
// const [subcategorybordados, setSubCategoryBordados] = useState([])
// const [subcategorylasers, setSubCategoryLasers] = useState([])
// const [loading, setLoading] = useState(false)
// const [filter, setFilter] = useState({})

// const emitOnFilter = useCallback(
//   filterData => onFilter(filterData),
//   [onFilter]
// )

// const updateFilter = useCallback(
//   filterData => {
//     const newFilter = { ...filter, ...filterData }
//     setFilter(newFilter)
//     emitOnFilter(newFilter)
//   },
//   [filter, emitOnFilter]
// )
// /** inicio dos Callback fech? */
// const fetchCategory = useCallback(async () => {
//   setLoading(true)
//   const response = await getCategory()
//   setLoading(false)
//   if (response && response.success) {
//     setCategory(response.categories)
//   }
// }, [])

// const fetchSubCategoryArtes = useCallback(async () => {
//   setLoading(true)
//   const response = await getSubCategoryArtes()
//   setLoading(false)
//   if (response && response.success) {
//     setSubCategoryArtes(response.subcategoriesartes)
//   }
// }, [])

// const fetchSubCategoryBordados = useCallback(async () => {
//   setLoading(true)
//   const response = await getSubCategoryBordados()
//   setLoading(false)
//   if (response && response.success) {
//     setSubCategoryBordados(response.subcategoriesbordados)
//   }
// }, [])

// const fetchSubCategoryLasers = useCallback(async () => {
//   setLoading(true)
//   const response = await getSubCategoryLasers()
//   setLoading(false)
//   if (response && response.success) {
//     setSubCategoryLasers(response.subcategorieslasers)
//   }
// }, [])
// /**     */

// const handleChange = useCallback(
//   (id, name) => {
//     const value = parseInt(id, 10) || 0
//     updateFilter({ [name]: value })
//   },
//   [updateFilter]
// )

// const usename = name
// const selectname = ''
// const selectId = ''
// const selectSubId = null
// const selectFieldCat = {}
// const selectFieldSub = {}
// /**  usando em Memo   */
// useMemo(() => {
//   if (name === 'Artes') {
//     selectname = usename
//     selectId = 'categoryId'
//     selectSubId = 'subcategoryId'
//     selectFieldCat = category
//     selectFieldSub = subcategoryartes
//     useEffect(() => {
//       if (usename === 'Grupo') fetchCategory()
//       if (usename === 'Sub-Grupo') fetchSubCategoryArtes()
//     }, [fetchCategory, fetchSubCategoryArtes, usename])

//     const renderSelect = useCallback(() => {
//       return (
//         <SelectField
//           name={name === name  ? selectId : selectSubId}
//           options={name === selectname ? selectFielsCat : selectFieldSub}
//           placeHolder="Opções..."
//           onChange={handleChange}
//           disabled={loading}
//         />
//       )
//     }, [selectFieldCat, selectFieldSub, usename, handleChange, loading])
//   }
//   else if (usename === 'Bordados') {
//     selectname = usename
//     selectId = 'categoryId'
//     selectSubId = 'subcategoryId'
//     selectFieldCat = category
//     selectFieldSub = subcategorybordados
//     useEffect(() => {
//       if (usename === 'Bordados') fetchCategory()
//       if (usename === 'Sub Grupo Bordados') fetchSubCategoryBordados()
//     }, [fetchCategory, fetchSubCategoryBordados, usename])
//   }
//   else if (usename === 'Lasers') {
//     selectname = usename
//     selectId = 'categoryId'
//     selectSubId = 'subcategoryId'
//     selectFieldCat = category
//     selectFieldSub = subcategorylasers
//     useEffect(() => {
//       if (usename === 'Bordados') fetchCategory()
//       if (usename === 'Sub Grupo Bordados') fetchSubCategoryLasers()
//     }, [fetchSubCategoryArtes, fetchSubCategoryLasers, usename])
//   }
// }, [selectFieldCat, selectFieldSub, usename])

// const renderSelect = useCallback(() => {
//   return (
//     <SelectField
//       name={name === selectname ? selectId : selectSubId}
//       options={name === selectname ? selectFielsCat : selectFieldSub}
//       placeHolder="Opções..."
//       onChange={handleChange}
//       disabled={loading}
//     />
//   )
// }, [selectFieldCat, selectFieldSub, usename, handleChange, loading])
