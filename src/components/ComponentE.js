import React,{useContext} from 'react'
import ComponentF from './ComponentF'
//import {ChannelContext} from '../App'
//import { UserContext } from './userContextt'

function ComponentE() {
// here user has the same value as the value given inside of the context in APP.js 
// so we donot have to separately enter a value as we can directly get it by using this approach i.e useContext(value) // first import this value
// watch web dev simplified for this

  //  const user = useContext(UserContext)
// const channel =  useContext(ChannelContext)
    return (
        <div>
            {/* {user} - {channel}  */}
            <ComponentF />
        </div>
    )
}
//As it is a functional component so we have to use this method instead of previous direct method

export default ComponentE
