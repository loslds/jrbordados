import React from 'react'
import { Company, Products, Developers } from './Content'
import {
  DropdownProvider,
  DropdownOpction,
  DropdownRoot
} from './Content/Dropdown'
import { Container, DropdownStyles } from './styleNavHome'

export function NavbarHome() {
  return (
    <DropdownProvider>
      <DropdownStyles>
        <Container>
          <ul>
            <li>
              <DropdownOpction
                name="Empresa"
                content={Company}
                backgroundHeight={'200'}
              />
            </li>
            <li>
              <DropdownOpction
                name="Produtos"
                content={Products}
                backgroundHeight={'200'}
              />
            </li>
            <li>
              <DropdownOpction
                name="Serviços"
                content={Developers}
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
