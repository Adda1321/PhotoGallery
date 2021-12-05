
//-------------------------Count+1-------------------------
/*
import React , {useState} from 'react'

function Hooks() {
    const [count, setstate] = useState(5) //count is a state variable initialized to zero
    //setstate is a method used to change the count variable
    return (
        <div>
            <button onClick={()=> setstate(count+1)}>count{count}</button>
        </div>
    )
}

export default Hooks
*/
/*
//-------------------------Hooks increment Program-------------------------
import React, { useState } from 'react'

function Hooks() {
    const [count, setstate] = useState(0)

    let setStatefive = () => {
        for (let index = 0; index < 5; index++) {
            //setstate(count+1);
            setstate(prevCount => (prevCount + 1)); // how ?? PrevCount is undefined // Clear see map ss in react
        }
    }
    return (
        <div>
            count:  {count}
            <button onClick={setStatefive}> increment by 5</button>
        </div>
    )
}

export default Hooks
*/

/*
// -------------------------Class component increment program-------------------------
import React, { Component } from 'react'

class Hooks extends Component {
    constructor (props) {
        super(props)

        this.state = {
            count: 0,
        }
    }
    setStatefive = () => {
        //for (let index = 0; index < 5; index++)
        //{this.setState({ count: this.state.count + 1 });}

        this.setState(PrevState => {
            return {
                count: PrevState.count + 5,
            }
        })
    }

    render() {
        return (
            <div>
                count:  {this.state.count}
                <button onClick={this.setStatefive}> increment by 5</button>
            </div>
        )
    }
}

export default Hooks
*/

// ------------------------- useState Hook Object-------------------------
// object as a State Variable
/*
import React, { useState } from 'react'

function Hooks() {
    const [state, setstate] = useState({ firstname: '', lastname: '' })
    return (
        <div>
            <input type='text' onChange={e => { setstate({ ...state, firstname: e.target.value }) }} />
            <input type='text' onChange={e => { setstate({ ...state, lastname: e.target.value }) }} />
            <h1>FirstName is this : + {state.firstname} </h1>
            <h1>lastName is this : + {state.lastname} </h1>
        </div>
    )
}

export default Hooks
*/

//-------------------------useState with ARRAYS-------------------------
/*
import React, { useState } from 'react'

function Hooks() {

    const [item, setitem] = useState([])
    const additem = () => {

        setitem([
            ...item,
            {
                id: item.length,
                value: Math.floor(Math.random() * 10) + 1,
            }
        ])
    }


    return (
        <>
            <button onClick={additem}>click me</button>

                    {item.map(items =>
                        (<h1 key={items.id}> {items.value}</h1>)
                    )}


        </>
    )
}

export default Hooks

*/

//-------------------------useEffect with HOOKS |||| condionally run effect -------------------------
// As we know useEffect will be caleed after every Render() and this can cause serious performance issues
/*
import React, { useState, useEffect } from 'react'

function Hooks() {

    const [count, setCount] = useState(0);
    const [num, setNum] = useState('');
    useEffect(() => {
        console.log("updated")
        document.title = `you Click ${count} times`
    }, [count])

    return (
        <div>
            <input type='text' value={num} onChange={e => setNum(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>click{count} </button>
        </div>
    )
}

export default Hooks

*/

//-------------------------useEffect with HOOKS ||  Use Once----------------------------
// How to mimic DidMount() using useEffects and Functional Components

/*
import React, { useState, useEffect } from 'react'

function Hooks() {

    const [x, setx] = useState(0);
    const [y, sety] = useState(0);

    const mousePosition = (e) => {
        console.log("mouse Event called")
        setx(e.clientX)
        sety(e.clientY)

    }
    useEffect(() => {
        console.log("useEffect Called")
        window.addEventListener('mousemove', mousePosition)
        return () => {
            console.log("removing")
            window.removeEventListener('mousemove', mousePosition)
//Very important concept of removing or unmounting , useEffect() will be called first time
//always , if the component is removed like in this example (without return() console shows a warning i.e  it indicates to delete the effect first)
// OR on every state change , first it will remove the previous useEffect and then call useEffect
     }
    }
        , []
    )
    return (
        <div>
            Hooks X -{x} Y - {y}
            <br />

        </div>
    )
}

export default Hooks
*/

//-------------------------useEffect with HOOKS ||  cleanup with incorrect dependencies----------------------------
/*
import React, { useState, useEffect } from 'react'

function Hooks() {
    const [count, setcount] = useState(0)
    const tick = () => { setcount(pcount => pcount + 1) }
  
    console.log(count)

    useEffect(() => {
        console.log("use effect..")
        const Timeinterval = setInterval(tick, 10000)
        return () => {
            console.log("remove effect")
            clearInterval(Timeinterval)
        }
    }, []) //or add count ot tick and  above write count+1 at then return() wont work because useEffect only called once
    return (
        <div>
            {count} okm
        </div>
    )
}

export default Hooks
*/

