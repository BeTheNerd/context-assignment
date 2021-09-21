import React from 'react'

export const UserContext = React.createContext();

const UserProvider = (props) => {
    return (
        <UserContext.Provider>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider;