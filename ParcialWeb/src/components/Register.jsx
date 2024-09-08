import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import '../components/login.css';

export function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegisterClick = async (e) => {
        e.preventDefault();

        if (!name || !lastname || !email || !password) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Todos los campos son obligatorios!',
            });
            return;
        }

        try {
            const response = await axios.post('https://parcial.nucleoslabs.com.co/api/v1/usuarios/registrar', {
                name,
                lastname,
                email,
                password,
            });

            if (response.status === 200) {
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
                text: error.response?.data?.message || 'No se pudo conectar con el servidor.',
            });
        }
    };

    const handleGoToLogin = () => {
        navigate('/login');  
    };

    return (
        <div className="containerPrincipal">
            <h1>Register</h1>
            <form className="formulario">
                <input  type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)} />  
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>

                <div className="btn-container">
                    <button type="button" className="btn-register" onClick={handleRegisterClick}>REGISTER</button>
                    <button type="button" className="btn-register" onClick={handleGoToLogin}>BACK</button>
                </div>
            </form>
        </div>
    );
}
