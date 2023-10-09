import * as httpRequest from '~/utils/httpRequest';

export const getInfo = async () => {
  const req = await httpRequest.get('infos');
  return req;
};
