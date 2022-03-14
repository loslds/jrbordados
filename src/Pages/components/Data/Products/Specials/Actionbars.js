import React, { useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { ToolsButton, ButtonBgBar } from '../../../Buttons'
// =======================
import closebrc from '../../../../../assets/image/closebrc.svg'
import menubrc from '../../../../../assets/image/menubrc.svg'
import refrescabrc from '../../../../../assets/image/refrescabrc.svg'
import filtrabrc from '../../../../../assets/image/filtrabrc.svg'
// import subgrupo from '../../../assets/images/subgrupo.svg'
// import busca from '../../../assets/images/search.svg'

export default function ActionsBar(props) {
  const router = useHistory()
  const { handleClickMenu, handleClickRefresh, handleClickFilter } = props

  // ...
  const handleClickAbort = useCallback(() => {
    router.push('/')
  }, [router])

  // ...
  const listButtonTools = useMemo(() => {
    return [
      { img: closebrc, label: 'Aborta Shopping', onClick: handleClickAbort },
      { img: menubrc, label: 'Menu Produtos', onClick: handleClickMenu },
      {
        img: refrescabrc,
        label: 'Refrescar Dados',
        onClick: handleClickRefresh
      },
      { img: filtrabrc, label: 'Filtra Dados ', onClick: handleClickFilter }
    ]
  }, [handleClickAbort, handleClickMenu, handleClickRefresh, handleClickFilter])

  return (
    <ToolsButton>
      {listButtonTools.map(({ img, label, onClick }) => {
        const key = `action-${Math.floor(Math.random() * 10000)}`
        return (
          <ButtonBgBar
            key={key}
            img={img}
            title={`${label}`}
            onClick={onClick}
          />
        )
      })}
    </ToolsButton>
  )
}

ActionsBar.propTypes = {
  handleClickMenu: PropTypes.func,
  handleClickRefresh: PropTypes.func,
  handleClickFilter: PropTypes.func
}

ActionsBar.defaultProps = {
  handleClickMenu: () => {},
  handleClickRefresh: () => {},
  handleClickFilter: () => {}
}
