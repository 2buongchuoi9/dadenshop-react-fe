import * as httpRequest from '~/utils/httpRequest';

export const getAll = async (page = 1, limit = 2) => {
  const req = await httpRequest.get('news-categories', { params: { page, limit } });
  return req;
};
export const getOne = async (id) => {
  const req = await httpRequest.get(`news-categories/${id}`);
  return req;
};
