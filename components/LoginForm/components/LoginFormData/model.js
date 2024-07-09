import { api } from "../../../../helpers/api";

/**
 * Handles the request to the api
 * @function
 * @param {object} data Request data
 * @alias module:LoginForm.loginReq
 */

export const loginReq = async (data) => {
  return await api.post(`/login`, data);
};
