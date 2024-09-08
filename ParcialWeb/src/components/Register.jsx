import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import '../components/login.css'; 

export function Register() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegisterClick = async (e) => {
    e.preventDefault();
    
    if (!username || !email || !password) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Todos los campos son obligatorios!',});
        return;
    }

    try {
      const response = await axios.post('https://parcial.nucleoslabs.com.co/api/v1/usuarios/registrar', {
        username,
        email,
        password,
      });


      if (response.data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso!',
          text: 'Ahora puedes iniciar sesión.',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          navigate('/login');  
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: response.data.message || 'Hubo un error al registrar el usuario.',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo conectar con el servidor.',
      });
    }
  };

  return (
    <div className="containerPrincipal">
      <h1>Register</h1>
      <form className="formulario">
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        
        <div className="btn-container">
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

