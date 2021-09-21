import React, { useState } from 'react'

export const UserContext = React.createContext();

const UserProvider = (props) => {
    const [state, setState] = useState({
        firstName: 'Billy',
        lastName: 'Bones',
        email: 'bb@email.com',
        avatar: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed00f17d4a99d0006d2e738%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D154%26cropX2%3D4820%26cropY1%3D651%26cropY2%3D5314',
        updateUser: (user) => setState({...state, ...user})
    })

    return (
        <UserContext.Provider value={state}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider;