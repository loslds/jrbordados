import React from 'react'
import { Link } from 'react-router-dom'
import { ProductsWrapper } from './styleContentHome'

export const Products = () => (
  <ProductsWrapper>
    <ul className="primary">
      <li>
        <span className="design" />
        <Link to="/designs">Designs.</Link>
      </li>
      <li>
        <span className="bordar" />
        <Link to="/bordados">Bordados.</Link>
      </li>
      <li>
        <span className="cortalaser" />
        <Link to="/lasercorta">Cortes a Laser.</Link>
      </li>
      <li>
        <span className="gravalaser" />
        <Link to="/lasergrava">Gravações a Laser.</Link>
      </li>
      <li>
        <span className="produtos" />
        <Link to="/produtos">Produtos.</Link>
      </li>
    </ul>
  </ProductsWrapper>
)
/*
    <ul className="primary">
      <li>
        <span className="payments" />

        <div>
          <Link to="/products">
            <h3>Produtos</h3>
            <p>Clique aqui para ver todos os produtos</p>
          </Link>
        </div>
      </li>
      <li>
        <span className="billing" />

        <div>
          <h3>Billing</h3>
          <p>Plataforma completa para pagamentos online</p>
        </div>
      </li>
      <li>
        <span className="connect" />

        <div>
          <h3>Connect</h3>
          <p>Plataforma completa para pagamentos online</p>
        </div>
      </li>
    </ul>

    <ul className="secondary">
      <li>
        <span className="sigma" />

        <h3>Sigma</h3>
        <p>Análises e relatórios comerciais avançados</p>
      </li>
      <li>
        <span className="atlas" />

        <h3>Atlas</h3>
        <p>Registro de empresas para startups</p>
      </li>
      <li>
        <span className="radar" />

        <h3>Radar</h3>
        <p>Prevenção de fraudes com machine learning</p>
      </li>
      <li>
        <span className="issuing" />

        <h3>Issuing</h3>
        <p>Criação de cartões virtuais e físicos</p>
      </li>
      <li>
        <span className="terminal" />

        <h3>Terminal</h3>
        <p>Pagamentos pessoais programáveis</p>
      </li>
    </ul> */
