import axios from 'axios';

const httpRequest = axios.create({
  baseURL: 'http://localhost:8082/api/',
  headers: { 'Content-Type': 'application/json; charset=UTF-8' },
});

export const get = async (path, option = {}) => {
  const res = await httpRequest.get(path, option);
  console.log(res);

  return res.data;
};

export const remove = async (path, config = {}) => {
  const res = await httpRequest.delete(path, config);
  console.log(res);
  return res;
};

export const post = async (path, data = {}, config = {}, loading, success, error) => {
  loading && loading();
  httpRequest
    .post(path, data, { ...config, headers: { 'Content-Type': 'application/json' } })
    .then((res) => {
      console.log(res);
      success && success();
      return res.data;
    })
    .catch((e) => {
      error && error(e);
      console.log('error', e);
    });
};
export const postFile = async (path, data = {}) => {
  const res = await httpRequest.post(path, data, { headers: { 'Content-Type': 'multipart/form-data' } });
  console.log(res);

  return res.data;
};

export default httpRequest;
