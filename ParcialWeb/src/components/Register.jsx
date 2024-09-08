import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/Login.css';  

export function Register() {
  const navigate = useNavigate();

  const handleRegisterClick = (e) => {
    e.preventDefault();
    navigate('/login');  
  };

return (
    <div className="containerPrincipal">
        <h1>Register</h1>
        <form className="formulario">
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="button" className="btn-login" onClick={handleRegisterClick}>
            REGISTER
            </button>
        </form>
    </div>
    );
}

