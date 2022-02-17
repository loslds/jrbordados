import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { motion } from 'framer-motion'
import { ContextPrd } from './Provider'

export function DropdownSection({ option }) {
  const { cachedId } = useContext(ContextPrd)

  const { id, contentDimensions, optionContextX, WrappedContent } = option
  const contentWidth = contentDimensions?.width || 0
  const x = optionContextX - contentWidth / 2

  const isActive = cachedId === id

  return (
    <motion.div
      className="dropdown-section"
      initial={{
        x
      }}
      animate={{
        x,
        opacity: isActive ? 1 : 0,
        pointerEvents: isActive ? 'unset' : 'none'
      }}
      transition={{
        ease: 'easeOut',
        opacity: { duration: 0.2 }
      }}
    >
      {WrappedContent ? <WrappedContent /> : null}
    </motion.div>
  )
}

DropdownSection.propTypes = {
  option: PropTypes.object.isRequired
}
DropdownSection.defaultProps = {
  option: {}
}
