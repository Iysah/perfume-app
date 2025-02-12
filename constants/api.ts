export const BASE_URL = 'https://pusheat-c9c0brd8f9ewfxah.southafricanorth-01.azurewebsites.net/api';

export const ENDPOINTS = {
  SIGNUP: `${BASE_URL}/auth/signup`,
  REGISTER_CHEF: `${BASE_URL}/auth/register/chef`,
  LOGIN: `${BASE_URL}/auth/login`,
  FORGET_PASSWORD: `${BASE_URL}/auth/password/forgot`,
  CHANGE_PASSWORD: `${BASE_URL}/auth/password/change`,
  VERIFY_OTP: `${BASE_URL}/auth/signup/verify-otp`,
  RESEND_OTP: `${BASE_URL}/auth/signup/resend-otp`,
  REFRESH:  `${BASE_URL}/auth/token/refresh`,

}; 