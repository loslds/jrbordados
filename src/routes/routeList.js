/** ====== Layout dos Componentes Paginas */
import { LayoutApp } from '../Pages/layouts/LayoutApp'
import { LayoutPages } from '../Pages/layouts/LayoutPages'
/** ====== Paginas do Component Menu Principal */
import { PageHome } from '../Pages/Home'
import { PageAbout } from '../Pages/About'
import { PageLogin } from '../Pages/Login'
import { PageSystem } from '../Pages/System'

export const homeRoutes = [
  {
    exact: true,
    label: 'Home',
    path: '/',
    component: PageHome,
    layout: LayoutApp
  }
]

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
  }
]

export const routeList = [...optionCompanyRoutes, ...homeRoutes]
