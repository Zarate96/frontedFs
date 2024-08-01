import { useState, useEffect } from "react";

import apiInstance from "../../utils/axios";
import { login } from "../../utils/auth";
import BaseHeader from "../partials/BaseHeader";
import BaseFooter from "../partials/BaseFooter";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { error } = await login(username, password);
    if (error) {
      setIsLoading(false);
      alert(error);
    } else {
      navigate("/");
      setIsLoading(false);
    }
  };

  return (
    <>
      <BaseHeader />

      <section
        className="container d-flex flex-column vh-100"
        style={{ marginTop: "150px" }}
      >
        <div className="row align-items-center justify-content-center g-0 h-lg-100 py-8">
          <div className="col-lg-5 col-md-8 py-8 py-xl-0">
            <div className="card shadow">
              <div className="card-body p-6">
                <div className="mb-4">
                  <h1 className="mb-1 fw-bold">Iniciar Sesión</h1>
                  <span>
                    ¿No tienes una cuenta?
                    <Link to="/register/" className="ms-1">
                      Registrate
                    </Link>
                  </span>
                </div>
                {/* Form */}
                <form
                  className="needs-validation"
                  noValidate=""
                  onSubmit={handleSubmit}
                >
                  {/* Username */}
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      type="username"
                      id="username"
                      className="form-control"
                      name="username"
                      placeholder="juan.perez"
                      required=""
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <div className="invalid-feedback">
                      Porfavor ingrese un usuario valido.
                    </div>
                  </div>
                  {/* Password */}
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Contraseña
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      name="password"
                      placeholder="**************"
                      required=""
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="invalid-feedback">
                      Porfavor ingrese una contraseña valida.
                    </div>
                  </div>
                  {/* Checkbox */}
                  <div className="d-lg-flex justify-content-between align-items-center mb-4">
                    <div>
                      <Link to="/forgot-password/">¿Olvidaste tu contraseña?</Link>
                    </div>
                  </div>
                  <div>
                    <div className="d-grid">
                      {isLoading === true && (
                        <button
                          disabled
                          type="submit"
                          className="btn btn-primary"
                        >
                          Processing <i className="fas fa-spinner fa-spin"></i>
                        </button>
                      )}

                      {isLoading === false && (
                        <button type="submit" className="btn btn-primary">
                          Sign in <i className="fas fa-sign-in-alt"></i>
                        </button>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BaseFooter />
    </>
  );
}

export default Login;
