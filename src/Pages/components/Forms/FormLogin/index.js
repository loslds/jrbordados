import React from 'react'
import useForm from './hooks'
import { Container } from './../staylesForms'

export default function FormLogin() {
  const [{ values, loading }, handleChange, handleSubmit] = useForm()

  const enviarContato = () => {
    // faça o que for preciso :)
    console.log(values)
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
