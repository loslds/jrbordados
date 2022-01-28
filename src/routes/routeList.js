/** ====== Layout dos Componentes Paginas */
import { LayoutApp } from '../Pages/layouts/LayoutApp'
import { LayoutPages } from '../Pages/layouts/LayoutPages'
/** ====== Paginas do Component Menu Principal */
import { PageHome } from '../Pages/Home'
import { PageAbout } from '../Pages/About'
import { PageLogin } from '../Pages/Login'
import { PageSystem } from '../Pages/System'
import {
  PageDocEmpresa,
  PageDocProduto,
  PageDocServico,
  PageDocPortfolio,
  PageDocPFProdutos
} from '../Pages/Docs'

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
    path: '/docs/portfolios',
    component: PageDocPortfolio,
    layout: LayoutPages
  },
  {
    exact: true,
    label: 'Portfólios Produtos',
    path: '/docs/docprodutos',
    component: PageDocProduto,
    layout: LayoutPages
  },
  {
    exact: true,
    label: 'Portfólios dos Produtos',
    path: '/docs/docpfprodutos',
    component: PageDocPFProdutos,
    layout: LayoutPages
  },

  {
    exact: true,
    label: 'Portfólios Serviços',
    path: '/docs/docservicos',
    component: PageDocServico,
    layout: LayoutPages
  },
  /**    Link da Pagina About */
  {
    exact: true,
    label: 'Empresas',
    path: '/docs/empresa',
    component: PageDocEmpresa,
    layout: LayoutPages
  },
  {
    exact: true,
    label: 'Podutos',
    path: '/docs/produto',
    component: PageDocProduto,
    layout: LayoutPages
  },
  {
    exact: true,
    label: 'Serviços',
    path: '/docs/servico',
    component: PageDocServico,
    layout: LayoutPages
  },
  {
    exact: true,
    label: 'PortFolio',
    path: '/docs/docportfolio',
    component: PageDocServico,
    layout: LayoutPages
  }
]

export const routeList = [...optionCompanyRoutes, ...homeRoutes]
