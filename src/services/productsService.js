import * as httpRequest from '~/utils/httpRequest';

export const searchProduct = async (text, limit = 5, orderBy = 0, indexPage = 1) => {
  console.log('text: ' + text);

  const res = await httpRequest.get('products/search', {
    params: { text, limit, orderBy, indexPage },
  });
  console.log(res);

  return res.list;
};
