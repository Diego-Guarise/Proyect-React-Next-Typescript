import React from "react";
import Sidebar from "../../components/Home/Sidebar";
import Header from "../../components/Home/Header";
import UserList from "../../components/Home/UserList";
import UserForm from "../../components/Home/UserForm";
import styles from "../../styles/home.module.css"; // Puedes crear un archivo CSS para esta página

const HomePage = () => {
    return (
        <div className={styles.container}>
            <Sidebar />
            <main className={styles.mainContent}>
                <Header title="Usuarios" />
                <div className={styles.content}>
                    <div className={styles.userList}>
                        <UserList />
                    </div>
                    <div className={styles.userForm}>
                        <UserForm />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HomePage;
