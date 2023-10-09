import * as httpRequest from '~/utils/httpRequest';

export const searchProduct = async (text, limit = 5, orderBy = 0, indexPage = 1) => {
  const res = await httpRequest.get('products/search', {
    params: { text, limit, orderBy, indexPage },
  });

  return res;
};

export const getProducts = async () => {
  const res = await httpRequest.get('products');

  return res;
};
