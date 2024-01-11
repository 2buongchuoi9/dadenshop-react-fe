const admin = '/admin';

const routerConfig = {
  home: '/',
  shop: '/shop',
  cart: '/cart',
  products: '/products',
  productDetail: '/products/:id',
  blog: '/blog',
  shoe: '/shoe',
  login: '/login',
  register: '/register',
  admin: {
    home: admin,
    news: {
      all: admin + '/news',
      add: admin + '/news/add',
      detail: admin + '/news/:id',
    },
    newsCategory: admin + '/news-category',
    products: {
      all: admin + '/products',
      add: admin + '/products/add',
      detail: admin + '/products/:id',
    },
    promotion: {
      all: admin + '/promotion',
      add: admin + '/promotion/add',
      detail: admin + '/promotion/:id',
    },
    category: admin + '/category',
    brands: admin + '/brands',
    media: {
      all: admin + '/media',
      add: admin + '/media/add',
    },
    pages: admin + '/pages',
    sales: {
      all: admin + '/sales',
      add: admin + '/sales/add',
      detail: admin + '/sales/:id',
    },
    users: admin + '/users',
    infos: admin + '/infos',
    setting: admin + '/setting',
    profile: admin + '/profile',
  },
};

export default routerConfig;
