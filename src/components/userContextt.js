// We do not need to make a new file we can do it in APP too and then export it in component 

import React from 'react'

const UserContext = React.createContext('Evolution')
const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer


export { UserProvider, UserConsumer }
export {UserContext}