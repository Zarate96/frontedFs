import Cookie from "js-cookie";
import jwtDecode from "jwt-decode";
import { logout } from "../../utils/auth";

function UserData() {
  let access_token = Cookie.get("access_token");
  let refresh_token = Cookie.get("refresh_token");

  if (access_token && refresh_token) {
    try {
      const decoded = jwtDecode(refresh_token);
      return decoded;
    } catch (error) {
      console.error('Error decoding token:', error);
      // Token inválido o expirado, cerrar sesión
      logout();
      return null;
    }
  } else {
    // Token no encontrado, cerrar sesión
    logout();
    return null;
  }
}

export default UserData;