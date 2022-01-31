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
  }

  /** portfolio produto */
  // {
  //  exact: true,
  //  label: 'Portfólios Produto',
  //  path: '/docs/docproduto',
  //  component: PageDocProduto,
  //  layout: LayoutPages
  // },
  //* * portfolio servicos */
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

  /**    Link da Pagina About */
  // {
  //  exact: true,
  //  label: 'Empresas',
  //  path: '/docs/empresa',
  //  component: PageDocEmpresa,
  //  layout: LayoutPages
  // },
  // {
  //  exact: true,
  //  label: 'Podutos',
  //  path: '/docs/produto',
  //  component: PageDocProduto,
  //  layout: LayoutPages
  // },
  // {
  //  exact: true,
  //  label: 'Serviços',
  //  path: '/docs/servico',
  //  component: PageDocServico,
  //  layout: LayoutPages
  // }
]

export const routeList = [...optionCompanyRoutes, ...homeRoutes]
