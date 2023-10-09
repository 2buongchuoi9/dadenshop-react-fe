import * as httpRequest from '~/utils/httpRequest';

export const getAll = async (page = 1, limit = 2) => {
  const req = await httpRequest.get('news', { params: { page, limit } });
  return req;
};
export const getOne = async (id) => {
  const req = await httpRequest.get(`news/${id}`);
  return req;
};
export const update = async (news, loading, success, error) => {
  loading && loading();
  try {
    const req = await httpRequest.post(`news/${news.id}`, {
      ...news,
      newCategoryId: news.newsCategory.id,
      // params: { limit: 2 },
    });

    success && success();
    return req;
  } catch (e) {
    error && error(e);
  }
};
