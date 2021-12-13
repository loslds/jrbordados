import { useState } from 'react'

const useForm = () => {
  const [values, setValues] = useState({})

  const handleChange = event => {
    const auxValues = { ...values }
    auxValues[event.target.name] = event.target.value
    setValues(auxValues)
  }

  const handleSubmit = callback => {
    return event => {
      event.preventDefault()
      callback(values)
    }
  }

  return [values, handleChange, handleSubmit]
}

export default useForm
