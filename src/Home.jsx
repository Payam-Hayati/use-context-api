import React, { useContext } from 'react'
import { createContext } from 'react'
import { AppContext } from './App'


const Home = () => {
    const { username } = useContext(AppContext);
    return (
        <div> <h1>Welcome To My Site {username}</h1></div>
    )
}

export default Home