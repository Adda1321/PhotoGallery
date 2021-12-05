import React, { useState } from 'react'
import useInput from '../hooks/useInput'
function UserForm() {
    // const [firstName, setfirstName] = useState(null)
    // const [lastName, setlastName] = useState('')
    const [firstName, bindfirstName, resetF] = useInput('')
    const [lastName, bindlastName, resetL] = useInput('')


    let submitHandler = () => {
        alert(`Hello ${firstName} ${lastName}`)
        resetF()
        resetL()
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label> FirstName </label>
                    <input type="text" {...bindfirstName} />
                </div>
                <div>
                    <label>LastName </label>
                    <input type="text"  {...bindlastName} />
                </div>
                <div>
                    <button>subm</button>
                </div>

            </form>
        </div>
    )
}

export default UserForm
