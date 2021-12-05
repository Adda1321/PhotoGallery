import React,{useState} from 'react'
import useDocTitle from './useCustomHook'

function DocTitleOne() {
    const [count, setcount] = useState(0)
    useDocTitle(count);
    
    return (
        <div>
            <button onClick={ () => {setcount(count+1)}}>count- {count}</button>
        </div>
    )
}

export default DocTitleOne
