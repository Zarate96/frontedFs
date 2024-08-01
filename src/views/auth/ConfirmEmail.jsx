import React from 'react'
import BaseHeader from '../partials/BaseHeader'
import BaseFooter from '../partials/BaseFooter'
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import apiInstance from '../../utils/axios';

const ConfirmEmail = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    useEffect(() => {
      const searchParams = new URLSearchParams(location.search);
  
      const confirmEmail = async () => {
        const uuidb64 = searchParams.get("uuidb64");
        const token = searchParams.get("token");
        setIsLoading(true);
  
        if (uuidb64 && token) {
          try {
            const response = await apiInstance.get(`usuarios/activar-usario/${uuidb64}/${token}`);
            setIsLoading(false);
  
            if (response.status === 200) {
              setSuccessMessage('Su correo ha sido validado exitosamente, ya puede iniciar sesión.');
            } else {
              setErrorMessage('No se pudo validar su correo. Por favor, intente de nuevo.');
            }
          } catch (error) {
            console.error('Error confirming email:', error);
            setIsLoading(false);
            setErrorMessage('Ocurrió un error al validar su correo. Por favor, intente de nuevo.');
          }
        } else {
          setIsLoading(false);
          setErrorMessage('Parámetros de URL inválidos.');
        }
      };
  
      confirmEmail();
    }, [location.search]);
  
    return (
      <>
        <BaseHeader />
        <section className="container d-flex flex-column vh-100" style={{ marginTop: "150px" }}>
          <div className="row align-items-center justify-content-center g-0 h-lg-100 py-8">
            <div className="col-lg-6 col-md-8 py-8 py-xl-0">
              <div className="card shadow">
                <div className="card-body p-6">
                  <div className="mb-4">
                    <h1 className="mb-3 fw-bold">Validación de correo</h1>
                  </div>
                  
                  {isLoading ? (
                    <div>
                      <p>Processing <i className="fas fa-spinner fa-spin"></i></p>
                    </div>
                  ) : (
                    <div>
                      {successMessage && (
                        <div className="alert alert-success" role="alert">
                          {successMessage}
                          <button type="button" className="btn btn-primary mt-3" onClick={() => navigate("/login")}>
                            Iniciar sesión <i className="fas fa-check-circle"></i>
                          </button>
                        </div>
                      )}
                      {errorMessage && (
                        <div className="alert alert-danger" role="alert">
                          {errorMessage}
                          <div>
                            <button type="button" className="btn btn-secondary mt-3" onClick={() => navigate("/")}>
                                Volver a inicio
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        <BaseFooter />
      </>
    );
  };
  
  export default ConfirmEmail;