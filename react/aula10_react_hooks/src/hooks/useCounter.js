import { useState } from 'react'

function getInitialValue(){
    console.log("Obtedo valor inicial")
    return 1 + 1
}

export default function UseCounter(){
    const [count, setCount] = useState(() => getInitialValue())
    

    const increment = () => {
        setCount((currentState) => currentState + 1)
        setCount((currentState) => currentState + 1)
    }

    return {count, increment}
}