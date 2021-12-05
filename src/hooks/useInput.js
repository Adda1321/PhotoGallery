import React , {useState} from 'react'

function useInput(initialvalue) {
 const [insert, setinsert] = useState(initialvalue)  

    const reset = () => {
    setinsert(initialvalue)
}

    const bind = {                // iska function kio nae bnaya or upper waly ka kio bnaya 
        value:insert,
        onChange: e => setinsert(e.target.value)
    }            
    
    return[insert,bind,reset]
}

export default useInput
