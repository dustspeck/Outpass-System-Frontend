export const HOME = "/";
export const ABOUT_US = "/about-us";
export const CONTACT_US = "/contact-us";

export const BASE_ROUTE = "/api/v1";
export const DASHBOARD_ROUTE = "/dashboard";
export const AUTH_ROUTE = "/auth";

// auth
export const LOGIN = `${AUTH_ROUTE}/login`;
export const REGISTER = `${AUTH_ROUTE}/register`;
export const LOGOUT = `${AUTH_ROUTE}/login`;
export const GET_ME = `${AUTH_ROUTE}/me`;
export const UPDATE_PASSWORD = `${AUTH_ROUTE}/update-password`;
export const FORGOT_PASSWORD = `${AUTH_ROUTE}/forgot-password`;
export const resetPassword = (resetToken = ":resetToken") =>
  `${AUTH_ROUTE}/${resetToken}/reset-password`;

export const STUDENT_ROUTE = "/student";
export const STUDENT_DASHBOARD = `${STUDENT_ROUTE}${DASHBOARD_ROUTE}`;
export const GET_NEW_OUTPASS = `${STUDENT_ROUTE}/new`;

export const WARDEN_ROUTE = "/warden";
export const WARDEN_DASHBOARD = `${WARDEN_ROUTE}${DASHBOARD_ROUTE}`;

export const ADD_OUTPASS = `${BASE_ROUTE}/outpass`;
