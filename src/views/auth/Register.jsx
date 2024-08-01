import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import apiInstance from "../../utils/axios";
import { register } from "../../utils/auth";

import BaseHeader from "../partials/BaseHeader";
import BaseFooter from "../partials/BaseFooter";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [esEmpresa, setEsEmpresa] = useState("");
  const [esCliente, setEsCliente] = useState("");
  const [isLoading, setIsLoading] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(esEmpresa, esCliente);
    const isEmpresa = esEmpresa === "1" ? true : false;
    const isCarrier = esCliente === "2" ? true : false;
    const isClient = esCliente === "1" ? true : false;
    const isVerificador = false;
    console.log(isEmpresa, isCarrier, isClient, isVerificador);
    const { error } = await register(username, email, password, password2, isEmpresa, isCarrier, isClient, isVerificador);
    if (error) {
      alert(error);
      setIsLoading(false);
    } else {
      navigate("/");
      alert("El usuario se ha registrado correctamente, se ha enviado un correo de confirmación.");
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
                  <h1 className="mb-1 fw-bold">Registro</h1>
                  <span>
                    ¿Ya tienes una cuenta?
                    <Link to="/login/" className="ms-1">
                      Iniciar sesión
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
                      type="text"
                      id="username"
                      className="form-control"
                      name="username"
                      placeholder=""
                      required=""
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      name="email"
                      placeholder="usuario@gmail.com"
                      required=""
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  {/* Password */}
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
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
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password2" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="password2"
                      className="form-control"
                      name="password2"
                      placeholder="**************"
                      required=""
                      onChange={(e) => setPassword2(e.target.value)}
                    />
                  </div>

                  {/* Checkboxes for user types */}
                  <div className="mb-3">
                  <label htmlFor="personaMoral" className="form-label">
                    ¿Te quieres registrar como empresa?
                  </label>
                  <select className="form-select" aria-label="Default select example" id="personaMoral" value={esEmpresa} onChange={(e) => setEsEmpresa(e.target.value)}>
                    <option value="">Selecciona una opción</option>
                    <option value="1">Sí</option>
                    <option value="2">No</option>
                  </select>
                  </div>
                  <div className="mb-3">
                  <label htmlFor="tipoUsuario" className="form-label">
                    Tipo de usuario
                  </label>
                  <select className="form-select" aria-label="Default select example" id="tipoUsuario" value={esCliente} onChange={(e) => setEsCliente(e.target.value)}>
                    <option value="">Selecciona una opción</option>
                    <option value="1">Cliente</option>
                    <option value="2">Transportista</option>
                  </select>
                  </div>
                  <div>
                    <div className="d-grid">
                      {isLoading ? (
                        <button
                          disabled
                          type="submit"
                          className="btn btn-primary"
                        >
                          Procesando... <i className="fas fa-spinner fa-spin"></i>
                        </button>
                      ) : (
                        <button type="submit" className="btn btn-primary">
                          Registrarse <i className="fas fa-user-plus"></i>
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

export default Register;