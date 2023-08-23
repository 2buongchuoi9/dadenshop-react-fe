import routerConfig from '~/config/routes';

import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';

const publicRoutes = [
  { path: routerConfig.home, component: Home },
  { path: routerConfig.shop, component: Shop },
  { path: routerConfig.cart, component: Cart },
];

export { publicRoutes };
