import UserContext from "../contexts/UserContext"

export default function Header(){
const user = UserContext(UserContext)

    return (
        <header>
            <h3>Bem vindo, {user.name}</h3>
            <hr />
        </header>
    )
}