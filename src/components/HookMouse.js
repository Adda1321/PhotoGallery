
import React,{useState} from 'react'
import Hooks from './Hooks'

function HookMouse() {
    const [display, setDisplay] = useState(true)

    return (
        <div>
            <button onClick={() => setDisplay(!display)}>toggle </button>
            { display && <Hooks /> }
        </div>
    )
}

export default HookMouse
