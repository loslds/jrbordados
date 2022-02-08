import React from 'react'
import { Designs, Bordados, Lasers } from './Content'
import {
  DropdownProvider,
  DropdownOpction,
  DropdownRoot
} from './Content/Dropdown'
import { Container, DropdownStyles } from './styleNav'

export default function NavBarProdutos() {
  return (
    <DropdownProvider>
      <DropdownStyles>
        <Container>
          <ul>
            <li>
              <DropdownOpction
                name="Designs"
                content={Designs}
                backgroundHeight={'200'}
              />
            </li>
            <li>
              <DropdownOpction
                name="Bordados"
                content={Bordados}
                backgroundHeight={'200'}
              />
            </li>
            <li>
              <DropdownOpction
                name="Lasers"
                content={Lasers}
                backgroundHeight={'200'}
              />
            </li>
          </ul>
        </Container>
        <DropdownRoot />
      </DropdownStyles>
    </DropdownProvider>
  )
}
