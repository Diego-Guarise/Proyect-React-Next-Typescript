import React, { useState } from "react";
import { useRouter } from "next/router"; // Importa useRouter para redirección
import styles from "../../styles/components/login.module.css";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginForm = () => { 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter()

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("https://uat.zonamerica.com:5009/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error("Correo electrónico o contraseña incorrectos");
            }

            const data = await response.json();
            console.log("Login successful", data); // Maneja el token de autenticación o redirige al usuario aquí
            localStorage.setItem("token", data.token);

            // Ejecuta la función de éxito para redirigir a /home
            router.push("/home");

        } catch (error) {
            //setErrorMessage(error.message);
            alert('Error al iniciar sesion')
        }
    };

    return (
        <div className={styles.center}>
            <div className={styles.wrapper}>
                <form onSubmit={handleLogin}>
                    <h1>Inicia sesión</h1>

                    <div className={styles.inputbox}>
                        <h4>E-mail</h4>
                        <input
                            type="text"
                            placeholder="Introduce tu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.inputbox + ' ' + styles.passwordbox}>
                        <h4>Contraseña</h4>
                        <input
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Introduce tu contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <div className={styles.eyeicon} onClick={togglePasswordVisibility}>
                            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                        </div>
                    </div>

                    {errorMessage && <p className={styles.errormessage}>{errorMessage}</p>}

                    <button type="submit">Ingresar</button>

                    <div className={styles.forgotpassword}>
                        <a href="#">¿Olvidaste la contraseña?</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
