import React from 'react'
import { Link } from 'react-router-dom'
import { DevelopersWrapper } from './styleContentHome'

export const Developers = () => (
  <DevelopersWrapper>
    <ul className="primary">
      <li>
        <span className="access" />
        <Link to="/servicos">Serviços.</Link>
      </li>
      <li>
        <span className="about" />
        Opção2.
      </li>
      <li>
        <span className="system" />
        Opção3.
      </li>
      <li>
        <span className="portfolio" />
        Opção4.
      </li>
    </ul>
  </DevelopersWrapper>
)
/**
 *     <div className="primary">
      <span className="documentation" />

      <div>
        <h3>Documentação</h3>
        <p>Comece a integrar os produtos e as ferramentas da Stripe</p>

        <div>
          <ul>
            <li>
              <h4>Comece já</h4>
            </li>
            <li>Checkout pré-integrado</li>
            <li>Bibliotecas e SDKs</li>
            <li>Plugins</li>
            <li>Exemplos de código</li>
          </ul>

          <ul>
            <li>
              <h4>Guias</h4>
            </li>
            <li>Aceite pagamentos online</li>
            <li>Gerencie assinaturas</li>
            <li>Envie repasses</li>
            <li>Implemente pagamentos presenciais</li>
          </ul>
        </div>
      </div>
    </div>

    <ul className="secondary">
      <li>
        <span className="api-reference" />
        Referência completa da API
      </li>
      <li>
        <span />
        Status da API
      </li>
      <li>
        <span />
        Código aberto
      </li>
    </ul>

 */
