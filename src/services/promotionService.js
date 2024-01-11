import * as httpRequest from '~/utils/httpRequest';

export const getAllPromotions = async () => {
  const res = await httpRequest.get('promotions');

  console.log(res);

  return res;
};
export const getById = async (id) => {
  const res = await httpRequest.get(`promotions/${id}`);

  console.log(res);

  return res;
};
