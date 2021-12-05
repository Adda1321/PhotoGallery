import React, { useState, useEffect , useRef} from 'react'

function
    UseRef() {
    const [count, setcount] = useState(0)

const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setcount(prevcount => prevcount + 1)
        }, 1000)
        return () => {
            console.log("it is removed");
            clearInterval(intervalRef.current)
        }

    }, [])

    return (
        <div>
            <button onClick={() => clearInterval(intervalRef.current)} > clear interval </button>
            counter - {count}
        </div>
    )
}

export default UseRef
