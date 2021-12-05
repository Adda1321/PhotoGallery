import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    post: {},
}

const reducer = (state, action) => {
    console.log("atleast it is inside")
    switch (action.type) {
        case 'FETCH_SUCCEED':

            console.log("fetch success switch")
            console.log(action.type);
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
          
        case 'FETCH_ERROR':
            console.log("fetch unsuccess switch ")
            return {
                loading: false,
                post: {},
                error: 'something went wrng!'
            }
        default:
            return state;
    }
}

function FetchingD() {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                dispatch({ type: 'FETCH_SUCCEED', payload: response.data })
                console.log("fetch success")
            })
            .catch(error => {
                dispatch({ type: 'FETCH_ERROR' })
                console.log("fetch un-success")
            })


    }, [])

    return (
        <div>
            {
                state.loading ? 'Loading...' : state.post.title
            }
            {state.error ? state.error : null}

        </div>
    )
}

export default FetchingD
// ------------------------------------ UseReducer ----------------
/*
import React,{useReducer} from 'react'
const initialState={
    fcounter: 0 ,
    scounter:10
}
const reducer = (state , action) => {
    switch(action.type){
case 'increment':
return {...state,fcounter: state.fcounter+action.value};
case 'decrement':
return {...state,fcounter: state.fcounter-action.value};
case 'increment2':
return {...state,scounter: state.scounter+action.value};
case 'decrement2':
return {...state,scounter: state.scounter-action.value};
case 'reset':
return initialState;
default:
    return state;
    }
}


function InterButton() {

    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div> f-count {count.fcounter}</div>
            <div> s-count {count.scounter}</div>
            <button onClick= {()=>dispatch({type: 'increment' , value: 1})}> increment 1</button>
            <button onClick= {()=>dispatch({type: 'decrement' , value: 1})}> decrement 1</button>

            <button onClick= {()=>dispatch({type: 'increment2' , value: 5})}> increment 5</button>
            <button onClick= {()=>dispatch({type: 'decrement2' , value: 5})}> decrement 5</button>
            <button onClick= {()=>dispatch({type: 'reset'})}> reset </button>
        </div>
    )
}

export default InterButton
*/