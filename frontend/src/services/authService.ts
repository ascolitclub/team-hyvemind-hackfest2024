import { commonRequest } from './apiCall';

export const registerReq = async (data: any) => {
  return await commonRequest('POST', `auth/register`, data);
};

export const loginReq = async (data: any) => {
  return await commonRequest('POST', `auth/login`, data);
};
