import routerConfig from '~/config/routes';

import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import { products } from '~/pages/ProductsPage';
import Login from '~/pages/Auth/Login';
import Register from '~/pages/Auth/Register';
import AdHome from '~/pages/Admin/pages/AdHome';
import { AddMedia, AllMedia } from '~/pages/Admin/pages/Admedia';
import { AddNews, AllNews, NewsDetail } from '~/pages/Admin/pages/AdNews';
import { AllProduct, ProductDetail } from '~/pages/Admin/pages/AdProduct';

export const publicRoutes = [
  { path: routerConfig.home, component: Home },
  { path: routerConfig.shop, component: Shop },
  { path: routerConfig.cart, component: Cart },
  { path: routerConfig.login, component: Login },
  { path: routerConfig.register, component: Register },
  { path: routerConfig.shoe, component: products.ShoePage },
];

const admin = routerConfig.admin;

export const privateRoutes = [
  { path: admin.home, component: AdHome },
  { path: admin.news.all, component: AllNews },
  { path: admin.news.add, component: (props) => <NewsDetail {...props} add={true} /> },
  { path: admin.news.detail, component: NewsDetail },
  { path: admin.newsCategory, component: AdHome },
  { path: admin.products.all, component: AllProduct },
  { path: admin.products.add, component: (props) => <ProductDetail {...props} add={true} /> },
  { path: admin.products.detail, component: ProductDetail },
  { path: admin.category, component: AdHome },
  { path: admin.brands, component: AdHome },
  { path: admin.media.all, component: AllMedia },
  { path: admin.media.add, component: AddMedia },
  { path: admin.pages, component: AdHome },
  { path: admin.sales, component: AdHome },
  { path: admin.users, component: AdHome },
  { path: admin.infos, component: AdHome },
  { path: admin.setting, component: AdHome },
  { path: admin.profile, component: AdHome },
];
