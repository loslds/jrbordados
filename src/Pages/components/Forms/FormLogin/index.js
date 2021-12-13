import React, { useState } from 'react'
import useForm from './hooks'
import { Container } from './../staylesForms'

export default function FormLogin() {
  const [loading, setLoading] = useState(false)
  const [handleChange, handleSubmit] = useForm()

  const enviarContato = formData => {
    // const enviarContato = async formData => {
    console.log('estarei enviando...')
    // const invalid = invalidateData(formData)
    // if (!invalid) {
    //   setLoading(true)
    //   const response = await send(formData)
    //   setLoading(false)
    //   console.log(formData)
  }

  return (
    <Container>
      <div className="divform">
        <h1>Contato</h1>
        <form onSubmit={handleSubmit(enviarContato)}>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="Digite o seu nome"
          />
          <input
            onChange={handleChange}
            type="text"
            name="email"
            placeholder="Digite o seu e-mail"
          />
          <button type="submit">{loading ? 'Enviando...' : 'Enviar'}</button>
        </form>
      </div>
    </Container>
  )
}
