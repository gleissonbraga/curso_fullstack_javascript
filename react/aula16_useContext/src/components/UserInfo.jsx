import { useContext } from "react"

export default function UserInfo() {
    const user = useContext(UserContext)
    return (
        <div>
            <h2>Informações do usuário</h2>
            <p>Nome: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}