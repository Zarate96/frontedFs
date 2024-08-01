import UserData from "../views/plugin/UserData";

export const DEV_URL = `http://127.0.0.0.1:8000/`;
export const PROD_URL = `http://test.hzcode.mx/`;
export const ENV = DEV_URL;
export const API_BASE_URL = `${ENV}api/v1/`;
export const userId = UserData()?.user_id;
export const PAYPAL_CLIENT_ID = "test";
export const teacherId = UserData()?.teacher_id; 