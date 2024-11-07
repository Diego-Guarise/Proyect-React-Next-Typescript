// pages/login.tsx
import React, { useEffect } from "react";
import LoginForm from "../components/Login/loginForm";

const LoginPage = () => {

    useEffect(() => {
        if (typeof window !== "undefined") {
            // Asegura que el código solo se ejecute en el navegador
        }
    }, []);

    return (
        <>
            <div style={{  position: 'absolute', top: '27%', left: '50%', width: '150px', transform: 'translate(-50%, -50%)', display: 'flex', justifyContent: 'center' }}>
                {/* logo de Willinn */}
                <img src="/Img/Willinn_logo.png" alt="Logo" style={{ width: '150px', height: 'auto' }} />
            </div>
            <LoginForm />
        </>
    );
};

export default LoginPage;
