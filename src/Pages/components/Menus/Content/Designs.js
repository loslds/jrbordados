import React from 'react'
import { Link } from 'react-router-dom'
import { DesignsWrapper } from './styleContentMenu'

export const Designs = () => (
  <DesignsWrapper>
    <ul className="primary">
      <li>
        <span className="design" />
        <Link to="#">Bordados.</Link>
      </li>
      <li>
        <span className="bordado" />
        <Link to="#">Bordados.</Link>
      </li>
      <li>
        <span className="corte" />
        <Link to="#">Cortes.</Link>
      </li>
      <li>
        <span className="gravacao" />
        <Link to="#">Gravações.</Link>
      </li>
    </ul>

    <ul className="secondary">
      <li className="title">
        <span className="title-icon" />
        Do blog
      </li>
      <li>
        Payouts with no code required
        <span className="new-tag">Novo</span>
        <span className="arrow">{'>'}</span>
      </li>
      <li>
        Introducing the Billing customer portal
        <span className="arrow">{'>'}</span>
      </li>
      <li>
        Online bank transfers through FPX are now...
        <span className="arrow">{'>'}</span>
      </li>
    </ul>
  </DesignsWrapper>
)
