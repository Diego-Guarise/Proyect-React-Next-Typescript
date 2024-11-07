// pages/_app.tsx
import "../styles/globals.css"; // Importa los estilos globales
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
