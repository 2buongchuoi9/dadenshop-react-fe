import * as httpRequest from '~/utils/httpRequest';

export const getBrands = async () => {
  const res = await httpRequest.get('brands');

  return res;
};
