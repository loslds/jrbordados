import React, { useEffect } from 'react'

export function useIsMounted() {
  const isMounted = React.useRef(true)

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])
  return isMounted
}

export function useIsDisplay() {
  const isDisplay = React.useRef(true)
  useEffect(() => {
    return () => {
      isDisplay.current = false
    }
  }, [])
  return isDisplay
}
