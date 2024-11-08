# Willinn Web Template

Este proyecto es una aplicación web construida con **React**, **Next.js**, **TypeScript** y **CSS Modules**. La aplicación permite la gestión de usuarios, incluyendo la creación, edición y eliminación de registros.

## 🚀 Tecnologías utilizadas

- **Next.js** (v14.0.4): Framework de React para aplicaciones web modernas.
- **React** (v18): Biblioteca para construir interfaces de usuario.
- **TypeScript** (v5): Superset de JavaScript que añade tipos estáticos.
- **React Router Dom** (v6.27.0): Para el enrutamiento dentro de la aplicación.
- **Tailwind CSS** (v3.3.0): Framework de utilidades CSS.
- **CSS Modules**: Para el encapsulamiento de estilos.

## 📂 Estructura del proyecto
```
src/
    ├── components/
    │     ├── Home/
    │     │     ├── Header.tsx
    │     │     ├── Sidebar.tsx
    │     │     ├── UserForm.tsx
    │     │     ├── UserItems.tsx
    │     │     └── UserList.tsx
    │     ├── Login/
    │     │     └── loginForm.tsx
    ├── pages/
    │     ├── api/
    │     ├── home/
    │     │     └── index.tsx
    │     ├── _app.tsx
    │     ├── login.tsx
    │     └── index.tsx
    ├── styles/
    │     ├── components/
    │     │      ├── header.module.css
    │     │      ├── login.module.css
    │     │      ├── sidebar.module.css
    │     │      ├── userForm.module.css
    │     │      ├── userItems.module.css
    │     │      └── userList.module.css
    │     ├── globals.css
    │     ├── home.css
    │     ├── home.module.css
    │     └── index.css```
```


### 📁 Descripción de Carpetas y Archivos

- **components/**: Contiene todos los componentes reutilizables del proyecto.
  - **Home/**: Componentes específicos de la página principal.
    - `Header.tsx`: Componente de la cabecera.
    - `Sidebar.tsx`: Componente de la barra lateral.
    - `UserForm.tsx`: Formulario para agregar y editar usuarios.
    - `UserItems.tsx`: Componente para listar y gestionar usuarios.
    - `UserList.tsx`: Componente que muestra la lista de usuarios.
  - **Login/**: Componentes relacionados con la autenticación.
    - `loginForm.tsx`: Formulario de inicio de sesión.

- **pages/**: Contiene las páginas del sitio.
  - **api/**: Carpeta para futuros Endpoints y rutas.
  - **home/**: Páginas relacionadas con el área de usuario.
    - `index.tsx`: Página principal después de iniciar sesión.
    - `_app.tsx`: Archivo de configuración global de la aplicación.
    - `login.tsx`: Página de inicio de sesión.
  - `index.tsx`: Página de inicio.

- **styles/**: Archivos de estilos CSS.
  - **components/**: Estilos específicos para componentes.
  - `globals.css`: Estilos globales para toda la aplicación.
  - `home.css`, `home.module.css`, `index.css`: Estilos para las páginas y componentes.



## 📦 Instalación y configuración

### Requisitos previos

Asegúrate de tener **Node.js** y **npm** instalados en tu sistema.

### Clonar el repositorio

```
git clone https://github.com/Diego-Guarise/Proyect-React-Next-Typescript.git
cd Proyect-React-Next-Typescript
```

Instalar dependencias

```npm install```

Ejecutar la aplicación en modo desarrollo

```npm run dev```
La aplicación se abrirá en http://localhost:3000

## 🔄 Uso de la aplicación
Inicio de sesión
- Accede a la página de inicio de sesión.
- Ingresa tu email y contraseña para autenticarte.

Gestión de usuarios
- Crear Usuario: Navega a la sección de usuarios y completa el formulario para agregar un nuevo usuario.
- Editar Usuario: Haz clic en el icono de edición junto al usuario que deseas modificar.
- Eliminar Usuario: Haz clic en el icono de eliminación para borrar un usuario.

## 📋 Endpoints de la API
  - GET /users: Obtiene todos los usuarios.
  - POST /users: Crea un nuevo usuario.
  - PUT /users/{id}: Actualiza un usuario existente.
  - DELETE /users/{id}: Elimina un usuario.
## 🖼️ Capturas de pantalla
Página de inicio de sesión
![image](https://github.com/user-attachments/assets/e897b24c-062b-4358-a22b-bd4165f53f9d)


Gestión de usuarios
![image](https://github.com/user-attachments/assets/205e2285-e5a6-4eb6-825e-fa9ac3e80e9c)


## 🛠️ Contribuciones
Las contribuciones son bienvenidas. Si deseas mejorar este proyecto, por favor, crea un fork, realiza tus cambios y abre un pull request.
