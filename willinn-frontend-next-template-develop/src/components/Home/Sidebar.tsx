import React from "react";
import { useRouter } from "next/router";
import { HiUsers } from "react-icons/hi";
import { FaHouse } from "react-icons/fa6";
import styles from "../../styles/components/sidebar.module.css";

const Sidebar = () => {
    const router = useRouter();

    const handleNavigation = (path: string) => {
        if (path === "/login") {
            // Limpia la sesión (si aplica) y redirige a login
            localStorage.removeItem("token"); // O cualquier otra limpieza necesaria
            router.push(path);
        } else {
            router.push(path);
        }
    };

    return (
        <div className={styles.sidebar}>
            <div className={styles.logo}>
                <img src="/Img/Willinn_logo.png" alt="Logo" />
            </div>
            <nav>
                <ul className={styles.navList}>
                    <li
                        className={`${styles.navItem} ${
                            router.pathname === "/login" ? styles.active : ""
                        }`}
                        onClick={() => handleNavigation("/login")}
                    >
                        <FaHouse className={styles.icon} />
                        <span>Inicio</span>
                    </li>
                    <li
                        className={`${styles.navItem} ${
                            router.pathname === "/home" ? styles.active : ""
                        }`}
                        onClick={() => handleNavigation("/home")}
                    >
                        <HiUsers  className={styles.icon} />
                        <span>Usuarios</span>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
