import React from 'react'
import { Designs, Produtos, Servicos } from './Content'
import {
  DropdownProvider,
  DropdownOpction,
  DropdownRoot
} from './Content/Dropdown'
import { ContainerPrd, DropdownPrdStyles } from './styleNavProd'

export function NavbarProd() {
  return (
    <DropdownProvider>
      <DropdownPrdStyles>
        <ContainerPrd>
          <ul>
            <li>
              <DropdownOpction
                name="Designs"
                content={Designs}
                backgroundHeight={'150'}
              />
            </li>
            <li>
              <DropdownOpction
                name="Produtos"
                content={Produtos}
                backgroundHeight={'150'}
              />
            </li>
            <li>
              <DropdownOpction
                name="Serviços"
                content={Servicos}
                backgroundHeight={'150'}
              />
            </li>
          </ul>
        </ContainerPrd>
        <DropdownRoot />
      </DropdownPrdStyles>
    </DropdownProvider>
  )
}
