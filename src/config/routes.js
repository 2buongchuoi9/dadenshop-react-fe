const admin = '/admin';

const routerConfig = {
  home: '/',
  shop: '/shop',
  cart: '/cart',
  products: '/products',
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
    },
    category: admin + '/category',
    brands: admin + '/brands',
    media: {
      all: admin + '/media',
      add: admin + '/media/add',
    },
    pages: admin + '/pages',
    sales: admin + '/sales',
    users: admin + '/users',
    infos: admin + '/infos',
    setting: admin + '/setting',
    profile: admin + '/profile',
  },
};

export default routerConfig;
