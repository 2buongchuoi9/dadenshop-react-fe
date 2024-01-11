import * as httpRequest from '~/utils/httpRequest';

export const searchProduct = async (text, limit = 5, orderBy = 0, page = 1) => {
  const res = await httpRequest.get('products/search', {
    params: { text, limit, orderBy, page },
  });

  return res;
};

export const getProducts = async ({ page, limit, categoryId = -1, brandId = -1, promotionId = -1 }) => {
  const res = await httpRequest.get('products', { params: { page, limit, categoryId, brandId, promotionId } });

  return res;
};

export const getProductById = async (id) => {
  const res = await httpRequest.get(`products/${id}`);

  return res;
};
export const add = async (product, loadding, success, error) => {
  const res = await httpRequest.post(`products`, product, '', loadding, success, error);

  return res;
};
export const update = async (product, loadding, success, error) => {
  const res = await httpRequest.post(`products/${product.id}`, product, '', loadding, success, error);

  return res;
};
