//Encabezado de la página
import React from "react";
import styles from "../../styles/components/header.module.css";

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header className={styles.header}>
            <h1>{title}</h1>
        </header>
    );
};

export default Header;
