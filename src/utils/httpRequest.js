import axios from 'axios';

const httpRequest = axios.create({
  baseURL: 'http://localhost:8081/api/',
});

export const get = async (path, option = {}) => {
  const res = await httpRequest.get(path, option);
  console.log(res);

  return res.data;
};

export default httpRequest;
