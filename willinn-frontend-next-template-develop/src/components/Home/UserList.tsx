import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "../../styles/components/userList.module.css";
import UserItems from "./UserItems";

interface User {
    id: number;
    name: string;
    email: string;
}

const UserList = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

    const fetchUsers = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("No token found, please log in");
            return;
        }

        try {
            const response = await fetch("https://uat.zonamerica.com:5009/users", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error("Failed to fetch users");
            }

            const data = await response.json();
            setUsers(data);
            setFilteredUsers(data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        const results = users.filter(user =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredUsers(results);
    }, [searchTerm, users]);

    const handleUserDelete = (id: number) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    return (
        <div className={styles.userList}>
            <div className={styles.header}>
                <h2>Usuarios</h2>
                <div className={styles.searchContainer}>
                    <FaSearch className={styles.searchIcon} />
                    <input
                        type="text"
                        placeholder="Buscar"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={styles.searchInput}
                    />
                </div>
            </div>
            <div className={styles.userTableContainer}>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map(user => (
                            <UserItems key={user.id} user={user} onUserUpdate={fetchUsers} onUserDelete={handleUserDelete} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserList;
