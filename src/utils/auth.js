import { useAuthStore } from "../store/auth";
import axios from "./axios";
import jwt_decode from "jwt-decode";
import Cookie from "js-cookie";
import Swal from "sweetalert2";

export const login = async (username, password) => {
  try {
    const { data, status } = await axios.post(`usuarios/token`, {
      username,
      password,
    });

    if (status === 200) {
      setAuthUser(data.access, data.refresh);
    }

    return { data, error: null };
  } catch (error) {
    return {
      data: null,
      error: error.response.data?.data || "Something went wrong",
    };
  }
};

export const register = async (username, email, password, password2, es_empresa, es_transportista, es_cliente, es_verificador) => {
  try {
    const { data } = await axios.post(`usuarios/registro`, {
      username,
      email,
      password,
      password2,
      es_empresa,
      es_transportista,
      es_cliente,
      es_verificador
    });

    await login(username, password);
    return { data, error: null };
  } catch (error) {
    let errorMsg = 'An error occurred during registration.';
    if (error.response) {
      const errorData = error.response.data?.data || {};
      const errorDetails = [
        errorData.username ? `Username: ${errorData.username.join(', ')}` : '',
        errorData.email ? `Email: ${errorData.email.join(', ')}` : '',
        errorData.password ? `Password: ${errorData.password.join(', ')}` : '',
        errorData.password2 ? `Confirm Password: ${errorData.password2.join(', ')}` : '',
        errorData.es_empresa ? `Es Empresa: ${errorData.es_empresa.join(', ')}` : '',
        errorData.es_transportista ? `Es Transportista: ${errorData.es_transportista.join(', ')}` : '',
        errorData.es_cliente ? `Es Cliente: ${errorData.es_cliente.join(', ')}` : '',
        errorData.es_verificador ? `Es Verificador: ${errorData.es_verificador.join(', ')}` : '',
        error.response.data?.data ? `Detail: ${error.response.data.data}` : ''
      ].filter(Boolean).join('\n');

      errorMsg = errorDetails || errorMsg;
    } else if (error.request) {
      errorMsg = 'No response from server. Please try again later.';
    } else {
      errorMsg = error.message;
    }

    return {
      error: errorMsg,
    };
  }
};

export const logout = () => {
  Cookie.remove("access_token");
  Cookie.remove("refresh_token");
  useAuthStore.getState().setUser(null);
};

export const setUser = async () => {
  const access_token = Cookie.get("access_token");
  const refresh_token = Cookie.get("refresh_token");

  if (!access_token || !refresh_token) {
    // alert("Tokens does not exists");
    return;
  }

  if (isAccessTokenExpired(access_token)) {
    const response = getRefreshedToken(refresh_token);
    setAuthUser(response.access, response.refresh);
  } else {
    setAuthUser(access_token, refresh_token);
  }
};

export const setAuthUser = (access_token, refresh_token) => {
  Cookie.set("access_token", access_token, {
    expires: 1,
    secure: true,
  });

  Cookie.set("refresh_token", refresh_token, {
    expires: 7,
    secure: true,
  });

  const user = jwt_decode(access_token) ?? null;

  if (user) {
    useAuthStore.getState().setUser(user);
  }
  useAuthStore.getState().setLoading(false);
};

export const getRefreshedToken = async () => {
  const refresh_token = Cookie.get("refresh_token");
  const response = await axios.post(`usuarios/refresh`, {
    refresh: refresh_token,
  });
  return response.data;
};

export const isAccessTokenExpired = (access_token) => {
  try {
    const decodedToken = jwt_decode(access_token);
    return decodedToken.exp < Date.now() / 1000;
  } catch (error) {
    console.log(error);
    return true;
  }
};
