import Container from "./components/Container"
import Header from "./components/Header"
import UserInfo from "./components/UserInfo"
import UserContext from "./contexts/UserContext"

export default function App(){
  
  const user = {
    name: "João",
    email: "João@email.com"
  }

  return (
    <>
      <UserContext.Provider value={user}>
        <Header />  
        <h1>Usando useContext</h1>
        <Container>
          <UserInfo />
        </Container>
      </UserContext.Provider>
      <div>
        {/* não há aceso ao contexto */}
      </div>
    </>
  )
}