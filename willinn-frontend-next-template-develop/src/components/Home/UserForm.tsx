import React, { useState } from "react";
import styles from "../../styles/components/userForm.module.css";

const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isActive, setIsActive] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage("");

        // Combina el nombre y apellido en un solo string
        const fullName = `${firstName} ${lastName}`;

        const userData = {
            name: fullName,
            email: email,
            password: password,
            isActive: isActive,
        };

        const token = localStorage.getItem("token");
        if (!token) {
            alert("Token no encontrado. Inicia sesion");
            return;
        }

        try {
            const response = await fetch("https://uat.zonamerica.com:5009/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error("No se pudo crear el usuario");
            }

            setMessage("¡Usuario creado exitosamente!");
            // Reinicia los campos después de un envío exitoso
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setIsActive(false);
        } catch (error) {
            setMessage("Error: No se pudo crear el usuario");
        }
    };

    return (
        <div className={styles.userForm}>
            <h2>Agregar usuario</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label>Nombre</label>
                    <input
                        type="text"
                        placeholder="Introduce el nombre"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>Apellido</label>
                    <input
                        type="text"
                        placeholder="Introduce el apellido"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                <div className="space"></div>
                <div className={styles.formGroup}>
                    <label>E-mail</label>
                    <input
                        type="email"
                        placeholder="Introduce tu E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>Contraseña</label>
                    <input
                        type="password"
                        placeholder="Introduce tu contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.tSwitch}>
                    <label>Activar</label>
                    <div className={styles.toggleSwitch}>
                        <input
                            type="checkbox"
                            checked={isActive}
                            onChange={() => setIsActive(!isActive)}
                            className={styles.toggleInput}
                        />
                        <span className={styles.slider}></span>
                    </div>
                </div>
                <button type="submit" className={styles.submitButton}>Guardar</button>
            </form>
            {message && <p className={styles.message}>{message}</p>}
        </div>
    );
};

export default UserForm;
