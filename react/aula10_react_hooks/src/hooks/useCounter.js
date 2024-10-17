import { useState } from 'react'

export default function UseCounter(){
    const [count, setCount] = useState(0)
    

    const increment = () => {
        setCount(count + 1)
    }

    return {count, increment}
}