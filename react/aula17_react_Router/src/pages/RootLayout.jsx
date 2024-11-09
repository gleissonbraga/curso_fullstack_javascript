import { Outlet } from "react-router-dom";
import NavBar from "../components/Nav";

export default function RootLayout(){
    return (
        <>
            <NavBar />
            <main>
                <p>Esse é o Layout principal. Abaixo está o conteúdo dinâmico de cada rota.</p>
                <hr />
                <Outlet />
                <footer>
                    <p>Feito com React Router DOM</p>
                </footer>
            </main>
        </>
    )
}