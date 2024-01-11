import * as httpRequest from '~/utils/httpRequest';

export const getAllSaleOff = async () => {
  const res = await httpRequest.get('sales');

  console.log(res);

  return res;
};
