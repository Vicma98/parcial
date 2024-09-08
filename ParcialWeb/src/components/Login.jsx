import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import '../components/login.css';

export function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginClick = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El email y la contraseña son obligatorios!',
            });
            return;
        }

        try {
            const response = await axios.post('https://parcial.nucleoslabs.com.co/api/v1/usuarios/login', {
                email,
                password,
            });

            if (response.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Inicio de sesión exitoso!',
                    text: 'Redirigiendo a la página de productos...',
                    showConfirmButton: false,
                    timer: 1500,
                }).then(() => {
                    navigate('/productos');  
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: response.data.message || 'Email o contraseña incorrectos.',
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.response?.data?.message || 'No se pudo conectar con el servidor.',
            });
        }
    };

    const handleRegisterClick = () => {
        navigate('/register');  
    };

    return (
        <div className="containerPrincipal">
            <h1>Login</h1>
            <form className="formulario">
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                
                <div className="btn-container">
                    <button type="button" className="btn-login" onClick={handleLoginClick}>LOGIN</button>
                    <button type="button" className="btn-register" onClick={handleRegisterClick}>Register</button>
                </div>
            </form>
        </div>
    );
}
