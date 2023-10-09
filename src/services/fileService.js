import * as httpRequest from '~/utils/httpRequest';

export const addFile = async (file, onSuccess, onError) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    const req = await httpRequest.postFile('files/upload', formData);
    console.log(req);
    if (onSuccess) onSuccess();
    return req;
  } catch (error) {
    console.log(error);
    if (onError) onError(error);
  }
};
export const getAllFile = async ({ page = 1, limit = 2 }) => {
  const req = await httpRequest.get('img', { params: { page, limit } });
  return req;
};
export const getFileById = async (id) => {
  const req = await httpRequest.get(`img/${id}`);
  return req;
};
export const update = async (image = {}, loading, success, error) => {
  loading && loading();
  try {
    const req = await httpRequest.post(`img/${image?.id}`, { ...image });
    success && success();
    return req;
  } catch (e) {
    error && error(e);
  }
};
export const remove = async (image = {}, loading, success, error) => {
  // loading && loading();
  // try {
  //   const req = await httpRequest.remove(`img/${image?.id}`);

  //   success && success();
  //   return req;
  // } catch (e) {
  //   error && error(e.message);
  // }

  loading && loading();

  await httpRequest
    .remove(`img/${image?.id}`)
    .then((req) => {
      success && success();
      return req;
    })
    .catch((e) => {
      error && error(e.message);
    });
};
