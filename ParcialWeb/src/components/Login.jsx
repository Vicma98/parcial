import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/login.css';  // Mantén el estilo con login.css

export function Login() {
  const navigate = useNavigate();

  const handleLoginClick = (e) => {
    e.preventDefault();
    navigate('/home');  // Redirige a la página Home al hacer login
  };

  const handleRegisterClick = (e) => {
    e.preventDefault();
    navigate('/register');  // Redirige a la página Register al hacer clic en el botón Register
  };

  return (
    <div className="containerPrincipal">
      <h1>Login</h1>
      <form className="formulario">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        
        {/* Contenedor para los botones */}
        <div className="btn-container">
          <button 
            type="button"
            className="btn-login"
            onClick={handleLoginClick}
          >
            LOGIN
          </button>
          <button 
            type="button"
            className="btn-register"
            onClick={handleRegisterClick}
          >
            REGISTER
          </button>
        </div>
      </form>
    </div>
  );
}
