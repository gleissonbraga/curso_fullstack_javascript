import { Link } from "react-router-dom";


export default function NavBar(){
    return (
        <header>
            <nav style={{display: "flex", gap: "2rem"}}>
                <Link to="/"> Início </Link>
                <Link to="/products"> Produtos </Link>
                <Link to="/cart"> carrinho </Link>
            </nav>
        </header>
    )
}