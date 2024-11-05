import { useRef, useState } from "react"
import RefExample from "./RefExample"

export default function App(){
  let variable = 0
  const [state, setState] = useState(0)
  const ref = useRef(0)

  const showValue = () => {
    alert(`
        Variável: ${variable}
        Ref: ${ref.current}
        State: ${state}
      `)
  }

  return (
    <div className="app">
      <h2>Exemplo de useRef com o DOM</h2>
      <RefExample />
      <h1>Conhecendo o useRef</h1>
      <hr />
      <p>Variável: {variable}</p>
      <p>Ref: {ref.current}</p>
      <p>State: {state}</p>

      <button
        onClick={() => variable++}
      >Aumentar a variável</button>
      <button
        onClick={() => ref.current++}
      >Aumentar a ref</button>
      <button
        onClick={() => setState(state => state + 1)}
      >Aumentar o state</button>
      <button onClick={showValue}>Exibir valores</button>
    </div>
  )
}

