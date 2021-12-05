import React, { Component } from 'react'
import { UserConsumer } from './userContextt'
import {ChannelContext} from '../App'

class ComponentF extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (first) => {
                        return (
                            <ChannelContext.Consumer>
                                {
                            (lastname) => {return(
                                    <div>
                                        first name is {first} second name is {lastname}
                                    </div>
                                 )}
                                 }
                            </ChannelContext.Consumer>
                                 )
                            }
}
               </UserConsumer >
        )
    }
}

export default ComponentF
