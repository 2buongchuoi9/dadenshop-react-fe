import * as httpRequest from '~/utils/httpRequest';

export const getCategories = async () => {
  const res = await httpRequest.get('categories');
  return res;
};
