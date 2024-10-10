
import Card from "./components/card"
import swPosterImg from "./assets/starwars.jpg"
import esbPosterImg from "./assets/esb-poster.webp"
import rotjPosterImg from "./assets/rotj-poster.webp"
import Button from "./components/button"

export default function App() {
  return (
    <>
      <Button text="Ir ao Blog" />
      <Card title="Pôster: Star Wars (1977)" posterImage={swPosterImg} />
      <Card title="Pôster: Empire Stikes Back (1980)" posterImage={esbPosterImg}/>
      <Card title="Pôster: Return of the Jedi (1983)" posterImage={rotjPosterImg}/>
    </>
  )
}