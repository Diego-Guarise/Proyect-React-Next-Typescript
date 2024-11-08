import React, { useState } from "react";
import styles from "../../styles/components/userItems.module.css";
import { FaTrashAlt, FaEdit, FaEllipsisH } from "react-icons/fa";

interface UserItemsProps {
    user: {
        id: number;
        name: string;
        email: string;
    };
    onUserUpdate: () => void;
    onUserDelete: (id: number) => void;
}

const UserItems = ({ user, onUserUpdate, onUserDelete }: UserItemsProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [showActions, setShowActions] = useState(false);
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);

    const handleEdit = () => {
        setIsEditing(true);
        setShowActions(false);
    };

    const handleSave = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("Token no encontrado. Inicia sesion");
            return;
        }

        try {
            const response = await fetch(`https://uat.zonamerica.com:5009/users/${user.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify({ name, email }),
            });

            if (!response.ok) {
                throw new Error("Update user error");
            }

            setIsEditing(false);
            onUserUpdate(); // Actualizar la lista de usuarios después de guardar
        } catch (error) {
            alert("Error: No se pudo actualizar user");
        }
    };

    const handleDelete = async () => {
        // Lógica para eliminar el usuario
        const token = localStorage.getItem("token");
        if (!token) {
            alert("Token no encontrado, Inicia sesion");
            return;
        }
        try {
            const response = await fetch(`https://uat.zonamerica.com:5009/users/${user.id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            });
            if (response.ok) {
                console.log("Usuario eliminado con éxito");
                onUserDelete(user.id);
            }
            onUserUpdate(); // Actualizar la lista de usuarios después de eliminar
        } catch (error) {
            console.error("Error al borrar user:", error);
        }
    };

    const handleCancel = () => {
        setIsEditing(false);
        setName(user.name);
        setEmail(user.email);
    };

    return (
        <tr>
            <td>
                {isEditing ? (
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={styles.inputField}
                    />
                ) : (
                    user.name
                )}
            </td>
            <td>
                {isEditing ? (
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.inputField}
                    />
                ) : (
                    user.email
                )}
            </td>
            <td>
                {isEditing ? (
                    <div className={styles.actionButtons}>
                        <button onClick={handleSave} className={styles.saveButton}>
                            Guardar
                        </button>
                        <button onClick={handleCancel} className={styles.cancelButton}>
                            Cancelar
                        </button>
                    </div>
                ) : (
                    <div className={styles.actionContainer}>
                        <button
                            onClick={() => setShowActions(!showActions)}
                            className={styles.moreOptionsButton}
                        >
                            <FaEllipsisH />
                        </button>
                        {showActions && (
                            <div className={styles.actionsMenu}>
                                <button onClick={handleEdit} className={styles.editButton}>
                                    <FaEdit />
                                </button>
                                <button onClick={handleDelete} className={styles.deleteButton}>
                                    <FaTrashAlt />
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </td>
        </tr>
    );
};

export default UserItems;
