/** ====== Layout dos Componentes Paginas */
import { LayoutApp } from '../Pages/layouts/LayoutApp'
import { LayoutPages } from '../Pages/layouts/LayoutPages'
/** ====== Paginas do Component Menu Principal */
import { PageHome } from '../Pages/Home'
import { PageAbout } from '../Pages/About'
import { PageLogin } from '../Pages/Login'
import { PageSystem } from '../Pages/System'
import {
  PagePortfolios,
  PagePfDesigns,
  PagePfProdutos,
  PagePfServicos
} from '../Pages/Portfolios'
import { PageDocEmpresa, PageDocProduto, PageDocServico } from '../Pages/Docs'
import { PageSamples } from '../Pages/Samples'

export const homeRoutes = [
  {
    exact: true,
    label: 'Home',
    path: '/',
    component: PageHome,
    layout: LayoutApp
  }
]
/**    rotas do menu principal opção Empresa */
export const optionCompanyRoutes = [
  {
    exact: true,
    label: 'About',
    path: '/about',
    component: PageAbout,
    layout: LayoutApp
  },
  {
    exact: true,
    label: 'Login',
    path: '/login',
    component: PageLogin,
    layout: LayoutPages
  },
  {
    exact: true,
    label: 'System',
    path: '/system',
    component: PageSystem,
    layout: LayoutPages
  },
  {
    exact: true,
    label: 'Portfólios',
    path: '/portfolios',
    component: PagePortfolios,
    layout: LayoutPages
  },
  {
    exact: true,
    label: 'Portfolio Design`s',
    path: '/portfolios/pagepfdesigns',
    component: PagePfDesigns,
    layout: LayoutPages
  },
  {
    exact: true,
    label: 'Portfolio Podutos',
    path: '/portfolios/pagepfprodutos',
    component: PagePfProdutos,
    layout: LayoutPages
  },
  {
    exact: true,
    label: 'Portfólios Serviços',
    path: '/portfolios/pagepfservicos',
    component: PagePfServicos,
    layout: LayoutPages
  },
  {
    exact: true,
    label: 'Empresas',
    path: '/docs/docempresa',
    component: PageDocEmpresa,
    layout: LayoutPages
  },
  {
    exact: true,
    label: 'Portfólios Produto',
    path: '/docs/docproduto',
    component: PageDocProduto,
    layout: LayoutPages
  },
  {
    exact: true,
    label: 'Serviços',
    path: '/docs/docservico',
    component: PageDocServico,
    layout: LayoutPages
  },
  {
    exact: true,
    label: 'Samples',
    path: '/samples/samples',
    component: PageSamples,
    layout: LayoutPages
  }
]

/** portfolios de produtos */
// {
//  exact: true,
//  label: 'Portfólios dos Produto',
//  path: '/docs/docpfproduto',
//  component: PageDocPFProduto,
//  layout: LayoutPages
// },
/** Carrocel de produtos em portfolio Produto */
// {
//  exact: true,
// label: 'Portfólios dos Bordados',
//  path: '/docs/doccrcbordado',
//  component: PageDocCRCBordado,
//  layout: LayoutPages
// },

export const routeList = [...optionCompanyRoutes, ...homeRoutes]
